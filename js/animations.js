/* animations.js — IntersectionObserver reveals, parallax, marquee, magnetic CTA, scroll progress, kinetic type.
   Honors prefers-reduced-motion globally. */
(function () {
  "use strict";

  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  /* ---------- 1. Reveal-on-scroll ---------- */
  function initReveals() {
    const els = $$("[data-reveal], [data-reveal-mask]");
    if (!els.length) return;

    if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
      els.forEach(el => { el.setAttribute("data-revealed", "true"); el.setAttribute("data-revealed", "true"); el.dataset.revealed = "true"; });
      return;
    }

    // Stagger children for [data-reveal] parents.
    $$("[data-reveal]").forEach(parent => {
      const kids = Array.from(parent.children);
      kids.forEach((kid, i) => {
        if (kid.hasAttribute("data-no-stagger")) return;
        kid.style.setProperty("--reveal-index", String(i));
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-revealed", "true");
          entry.target.dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    els.forEach(el => observer.observe(el));
  }

  /* ---------- 2. Split-text kinetic headline ---------- */
  function initSplitText() {
    $$("[data-split-text]").forEach(el => {
      const html = el.textContent;
      el.classList.add("split-text");
      el.innerHTML = html.split(/(\s+)/).map(token => {
        if (/^\s+$/.test(token)) return token;
        return token.split("").map(c => `<span>${c}</span>`).join("");
      }).join("");
      el.style.opacity = "1";
      // Trigger reveal after a beat
      requestAnimationFrame(() => el.setAttribute("data-revealed", "true"));
    });

    // Find span children and animate.
    $$(".split-text").forEach(el => {
      const spans = $$("> span", el);
      spans.forEach((s, i) => {
        s.style.transitionDelay = `${i * 28}ms`;
      });
    });
  }

  /* ---------- 3. Scroll progress bar ---------- */
  function initScrollProgress() {
    const el = document.querySelector("[data-scroll-progress]");
    if (!el) return;
    let raf = null;
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.setProperty("--progress", String(progress));
      raf = null;
    }
    window.addEventListener("scroll", () => {
      if (raf == null) raf = requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /* ---------- 4. Parallax via rAF ---------- */
  function initParallax() {
    if (REDUCED_MOTION) return;
    const targets = $$("[data-parallax-y]");
    if (!targets.length) return;
    let ticking = false;
    function update() {
      const sy = window.scrollY;
      targets.forEach(el => {
        const factor = parseFloat(el.getAttribute("data-parallax-y")) || 0.15;
        const top = el.getBoundingClientRect().top + sy;
        const offset = (sy - top) * factor;
        el.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------- 5. Magnetic CTAs (desktop only, hover-enabled) ---------- */
  function initMagnetic() {
    if (REDUCED_MOTION) return;
    const isCoarse = window.matchMedia("(hover: none)").matches;
    if (isCoarse) return;
    $$("[data-magnetic]").forEach(el => {
      let raf = null;
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const tx = Math.max(-12, Math.min(12, x * 0.25));
          const ty = Math.max(-12, Math.min(12, y * 0.4));
          el.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
        });
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
      });
    });
  }

  /* ---------- 6. Marquee duplication ---------- */
  function initMarquees() {
    $$(".marquee").forEach(m => {
      const track = $(".marquee__track", m);
      if (!track) return;
      // Clone children once so the loop is seamless.
      const original = Array.from(track.children).map(n => n.outerHTML).join("");
      track.insertAdjacentHTML("beforeend", original);
      const speed = parseFloat(m.getAttribute("data-marquee-speed")) || 40;
      track.style.animationDuration = `${speed}s`;
      const dir = m.getAttribute("data-marquee-direction");
      if (dir === "right") {
        track.style.animationName = "marquee-right";
      }
    });
  }

  /* ---------- 7. Count-up ---------- */
  function initCountUp() {
    const els = $$("[data-count-up]");
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const end = parseFloat(el.getAttribute("data-count-up")) || 0;
        const duration = parseInt(el.getAttribute("data-count-duration")) || 1400;
        const start = performance.now();
        function tick(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = (end * eased);
          el.textContent = Math.round(value).toLocaleString();
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = end.toLocaleString();
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach(el => obs.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initReveals();
    initSplitText();
    initScrollProgress();
    initParallax();
    initMagnetic();
    initMarquees();
    initCountUp();
  });
})();
