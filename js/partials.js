/* partials.js — injects site header + footer, marks active nav from <body data-page> */
(function () {
  "use strict";

  const NAV = [
    { id: "home",     label: "Home",              href: "home.html" },
    { id: "services", label: "Business Services", href: "services.html" },
    { id: "culture",  label: "Corporate Culture", href: "culture.html" },
    { id: "news",     label: "Company News",      href: "news.html" },
    { id: "contact",  label: "Contact Us",        href: "contact.html" }
  ];

  function img(name, alt) {
    return `<img src="images/icons/${name}.svg" alt="${alt || ""}" loading="lazy" decoding="async" />`;
  }

  function renderHeader(activePage) {
    const navHtml = NAV.map(item => {
      const isCurrent = item.id === activePage;
      return `<a class="site-nav__link" href="${item.href}"${isCurrent ? ' aria-current="page"' : ""}>${item.label}</a>`;
    }).join("");

    return `
<header class="site-header" role="banner">
  <div class="site-header__inner">
    <a class="site-header__brand" href="home.html" aria-label="Runzeculture — Home">
      <img class="site-header__logo" src="images/logo/logo.svg" alt="" width="160" height="36" />
      <span class="site-header__word">Runzeculture<small>NOURISH CULTURE CO., LIMITED</small></span>
    </a>
    <button class="site-nav__toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="primary-nav">
      <img src="images/icons/menu.svg" alt="" width="24" height="24" />
    </button>
    <nav id="primary-nav" class="site-nav" role="navigation" aria-label="Primary">
      ${navHtml}
      <a class="btn btn--primary site-header__cta" href="contact.html" data-magnetic>
        Get in touch
        <img class="arrow" src="images/icons/arrow-right.svg" alt="" width="16" height="16" />
      </a>
    </nav>
  </div>
</header>`;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="site-footer__top">
      <div class="site-footer__brand">
        <img class="site-footer__logo" src="images/logo/logo-mono.svg" alt="Runzeculture" width="180" height="40" />
        <p>NOURISH CULTURE CO., LIMITED bridges cultural projects, creative campaigns, and trade across borders — headquartered in Mong Kok, Hong Kong, with a mobile culture manager app on Google Play and the Apple App Store.</p>
        <p class="t-body-sm text-muted">Room D1, 1/F, Lucky Horse Industrial Building,<br />64 Tong Mi Road, Mong Kok, Hong Kong</p>
        <div class="site-footer__socials" aria-label="Social links">
          <a href="https://www.linkedin.com/" rel="noopener" aria-label="LinkedIn">${img("linkedin", "LinkedIn")}</a>
          <a href="https://www.instagram.com/" rel="noopener" aria-label="Instagram">${img("instagram", "Instagram")}</a>
          <a href="https://twitter.com/" rel="noopener" aria-label="X (Twitter)">${img("twitter-x", "X")}</a>
          <a href="https://www.youtube.com/" rel="noopener" aria-label="YouTube">${img("youtube", "YouTube")}</a>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <ul role="list">
          <li><a href="home.html">Home</a></li>
          <li><a href="services.html">Business Services</a></li>
          <li><a href="culture.html">Corporate Culture</a></li>
          <li><a href="news.html">Company News</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4>Get the App</h4>
        <ul role="list">
          <li><a href="services.html#mobile-app">Culture Manager — overview</a></li>
          <li><a href="https://apps.apple.com/" rel="noopener">Download on the App Store</a></li>
          <li><a href="https://play.google.com/" rel="noopener">Get it on Google Play</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul role="list">
          <li><a href="mailto:support@runzeculture.com">support@runzeculture.com</a></li>
          <li><a href="mailto:huyuanhao@runzeculture.com">huyuanhao@runzeculture.com</a></li>
          <li class="t-body-sm text-muted">Mon–Fri · 09:00–18:00 HKT</li>
          <li class="t-body-sm text-muted">+852 office (by appointment)</li>
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <div>© ${year} NOURISH CULTURE CO., LIMITED · All rights reserved.</div>
      <div>
        <a href="privacy.html">Privacy Policy</a> ·
        <a href="terms.html">Terms of Service</a> ·
        <a href="mailto:support@runzeculture.com">Press</a>
      </div>
    </div>
  </div>
</footer>`;
  }

  function injectHeader() {
    const body = document.body;
    const activePage = (body.getAttribute("data-page") || "home").toLowerCase();
    const placeholder = document.getElementById("site-header");
    if (!placeholder) return;
    placeholder.outerHTML = renderHeader(activePage);
  }

  function injectFooter() {
    const placeholder = document.getElementById("site-footer");
    if (!placeholder) return;
    placeholder.outerHTML = renderFooter();
  }

  function wireMobileNav() {
    const toggle = document.querySelector(".site-nav__toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    nav.addEventListener("click", e => {
      if (e.target.closest("a")) {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function wireScrolledHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectHeader();
    injectFooter();
    wireMobileNav();
    wireScrolledHeader();
  });
})();
