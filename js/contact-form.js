/* contact-form.js — client-side validation + simulated submit (no real backend). */
(function () {
  "use strict";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function fieldWrapper(field) {
    // Match either the BEM-style .form__field OR the flat .form-row used by contact.html.
    return field.closest(".form__field") || field.closest(".form-row");
  }

  function fieldError(field) {
    const wrap = fieldWrapper(field);
    if (!wrap) return null;
    // Prefer a dedicated error slot, otherwise reuse .cf-feedback on the form.
    return wrap.querySelector(".form__error") || wrap.querySelector(".cf-feedback") || null;
  }

  function setError(field, message) {
    const errEl = fieldError(field);
    const wrap = fieldWrapper(field);
    if (errEl) {
      errEl.textContent = message;
      if (errEl.classList.contains("cf-feedback")) {
        errEl.setAttribute("data-state", message ? "error" : "");
      } else {
        errEl.style.display = message ? "block" : "none";
      }
    }
    if (wrap) wrap.setAttribute("aria-invalid", message ? "true" : "false");
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validate(form) {
    let ok = true;
    $$("[required]", form).forEach(field => {
      const value = (field.value || "").trim();
      if (!value) {
        setError(field, "This field is required.");
        ok = false;
      } else if (field.type === "email" && !EMAIL_RE.test(value)) {
        setError(field, "Please enter a valid email address.");
        ok = false;
      } else if (field.tagName === "SELECT" && value === "") {
        setError(field, "Please choose an option.");
        ok = false;
      } else {
        setError(field, "");
      }
    });

    // Honeypot
    const honeypot = form.querySelector("[data-honeypot]");
    if (honeypot && honeypot.value) ok = false;

    return ok;
  }

  function serialize(form) {
    const data = {};
    Array.from(new FormData(form).entries()).forEach(([k, v]) => { data[k] = v; });
    return data;
  }

  function bindForm(form) {
    // Accept any form that has a [type='submit'] (covers both .form and #contact-form).
    const submit = $("[type='submit']", form);
    if (!submit) return;
    // Success target: prefer .form__success, fall back to .cf-feedback.
    const success = $(".form__success", form) || $(".cf-feedback", form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate(form)) {
        const firstInvalid = form.querySelector("[aria-invalid='true']");
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      submit.disabled = true;
      submit.setAttribute("aria-busy", "true");
      setTimeout(() => {
        const payload = serialize(form);
        const msg = `Thanks, ${payload.name || "friend"} — this is a demo form. Please email support@runzeculture.com directly.`;
        if (success) {
          if (success.classList.contains("cf-feedback")) {
            success.setAttribute("data-state", "ok");
          } else {
            success.setAttribute("data-active", "true");
          }
          success.textContent = msg;
        }
        submit.disabled = false;
        submit.removeAttribute("aria-busy");
        form.reset();
      }, 700);
    });

    // Live-clear error on input
    $$("input, select, textarea", form).forEach(field => {
      field.addEventListener("input", () => setError(field, ""));
      field.addEventListener("change", () => setError(field, ""));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Bind any form that has a submit button. The previous selector
    // only matched .form, which excluded the contact page form.
    $$("form").forEach(f => { if ($("[type='submit']", f)) bindForm(f); });
  });
})();
