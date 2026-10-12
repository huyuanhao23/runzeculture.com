/* app.js — per-page boot logic. Reads <body data-page> and dispatches initialiser. */
(function () {
  "use strict";

  const inits = {
    /* ---------- Home ---------- */
    home(ctx) {
      // Periodic counter pulse for hero mascot
      const mascot = ctx.querySelector("[data-mascot-blink]");
      if (mascot) setInterval(() => mascot.classList.add("mascot--pulse"), 4000);
    },

    /* ---------- Services ---------- */
    services(ctx) {
      // Filter by service category chips (if any added later).
      const filterButtons = ctx.querySelectorAll("[data-filter]");
      filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-filter");
          filterButtons.forEach(b => b.setAttribute("aria-pressed", String(b === btn));
          ctx.querySelectorAll(".service-card").forEach(card => {
            const cat = card.getAttribute("data-category") || "";
            card.style.display = (target === "all" || cat.includes(target)) ? "" : "none";
          });
        });
      });
    },

    /* ---------- Culture ---------- */
    culture(ctx) {
      // Mascot hover peek.
      const mascot = ctx.querySelector("[data-mascot-hover]");
      if (mascot) {
        mascot.addEventListener("mouseenter", () => mascot.classList.add("mascot--pulse"));
        mascot.addEventListener("mouseleave", () => mascot.classList.remove("mascot--pulse"));
      }
    },

    /* ---------- News ---------- */
    news(ctx) {
      // Filter chips
      const filterButtons = ctx.querySelectorAll("[data-tag-filter]");
      filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-tag-filter");
          filterButtons.forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
          ctx.querySelectorAll(".news-card").forEach(card => {
            const tags = (card.getAttribute("data-tags") || "").split(/\s+/);
            card.style.display = (target === "all" || tags.includes(target)) ? "" : "none";
          });
        });
      });
    },

    /* ---------- Contact ---------- */
    contact(ctx) {
      // Copy-to-clipboard on email cards
      ctx.querySelectorAll("[data-copy-email]").forEach(card => {
        card.addEventListener("click", async (e) => {
          if (e.target.closest("a")) return;
          const email = card.getAttribute("data-copy-email");
          try {
            await navigator.clipboard.writeText(email);
            card.classList.add("is-copied");
            setTimeout(() => card.classList.remove("is-copied"), 1200);
          } catch (_) { /* ignore */ }
        });
      });
    },

    /* ---------- Privacy / Terms ---------- */
    privacy(ctx) {},
    terms(ctx) {},

    /* ---------- 404 / index ---------- */
    "404"(ctx) {},
    default(ctx) {}
  };

  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const page = (body.getAttribute("data-page") || "default").toLowerCase();
    const init = inits[page] || inits.default;
    init(document);

    // Insert scroll-progress bar on every page (cheap).
    if (!document.querySelector("[data-scroll-progress]")) {
      const bar = document.createElement("div");
      bar.className = "scroll-progress";
      bar.setAttribute("data-scroll-progress", "");
      document.body.prepend(bar);
    }
  });
})();
