(function () {
  const theme = {
    green: '#8DC455',
    greenDark: '#658D3D',
    black: '#0D0D0D',
    charcoal: '#1F1F1F',
    surface: '#161616',
    cream: '#F5F5F0',
    gray: '#A8B5A0',
    line: 'rgba(168,181,160,0.22)',
    easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)'
  };

  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    const cssName = '--' + key.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
    root.style.setProperty(cssName, value);
  });
  root.style.setProperty('--bg', theme.black);
  root.style.setProperty('--bg-card', theme.surface);
  root.style.setProperty('--bg-input', theme.charcoal);
  root.style.setProperty('--green-lite', theme.green);
  root.style.setProperty('--white', theme.cream);
  root.style.setProperty('--muted', theme.gray);
  root.style.setProperty('--border', theme.line);

  if (!document.getElementById('freshface-theme-styles')) {
    const style = document.createElement('style');
    style.id = 'freshface-theme-styles';
    style.textContent = `
    header nav {
      min-height: 97px;
    }

    .nav-links {
      align-items: center !important;
      gap: 38px !important;
    }

    .nav-links .btn,
    .nav-links .btn-book {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 16px 36px !important;
      border: 2px solid transparent;
      border-radius: 999px;
      background: var(--green) !important;
      color: var(--cream) !important;
      font-size: 1rem !important;
      font-weight: 800 !important;
      line-height: 1.6;
    }

    .nav-links a:not(.btn):not(.btn-book),
    .nav-links a:not(.btn):not(.btn-book).active,
    .nav-links a:not(.btn):not(.btn-book).is-active {
      color: var(--cream) !important;
      position: relative;
      padding: 6px 0;
    }

    .nav-links a:not(.btn):not(.btn-book)::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: var(--green);
      transition: width .25s ease;
    }

    .nav-links a:not(.btn):not(.btn-book):hover::after,
    .nav-links a:not(.btn):not(.btn-book).active::after,
    .nav-links a:not(.btn):not(.btn-book).is-active::after {
      width: 100% !important;
    }

    .ff-common-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(13,13,13,.94) !important;
      border-bottom: 1px solid var(--line) !important;
      backdrop-filter: blur(12px);
    }

    .ff-common-header nav {
      min-height: 97px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 8vw;
    }

    .ff-common-logo,
    .ff-common-footer-logo {
      color: var(--cream);
      font-family: var(--display, 'Fraunces', serif);
      font-size: 1.65rem;
      font-weight: 800;
      line-height: 1;
      text-decoration: none;
    }

    .ff-common-logo span,
    .ff-common-footer-logo span {
      color: var(--green);
    }

    .ff-common-footer {
      background: var(--black) !important;
      color: var(--cream) !important;
      padding: 70px 8vw 30px !important;
      border-top: 1px solid var(--line) !important;
    }

    .ff-common-footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1.25fr;
      gap: 50px;
      margin-bottom: 50px;
    }

    .ff-common-footer p,
    .ff-common-footer a,
    .ff-common-footer li,
    .ff-common-footer span {
      color: var(--gray);
      font-size: .92rem;
    }

    .ff-common-footer h4 {
      color: var(--green);
      font-size: .85rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .ff-common-footer ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0;
      margin: 0;
    }

    .ff-common-social {
      display: flex;
      gap: 12px;
      margin-top: 18px;
    }

    .ff-common-social a {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 1.5px solid rgba(141,196,85,.35);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--green);
      background: rgba(141,196,85,.08);
      font-weight: 800;
    }

    .ff-common-footer-bottom {
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      gap: 16px;
      padding-top: 24px;
    }

    @media (max-width: 860px) {
      .ff-common-header nav {
        min-height: 0;
        align-items: flex-start;
        flex-direction: column;
        gap: 16px;
        padding: 18px 6vw;
      }

      .ff-common-footer-grid {
        grid-template-columns: 1fr;
      }

      .ff-common-footer-bottom {
        flex-direction: column;
      }
    }

    .hero-load {
      opacity: 0;
      transform: translate3d(0, 28px, 0);
      transition: opacity .85s var(--ease-out), transform .85s var(--ease-out);
      will-change: opacity, transform;
    }

    .hero-load.is-loaded {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    .reveal {
      opacity: 0;
      transform: translate3d(0, 32px, 0);
      transition: opacity .75s var(--ease-out), transform .75s var(--ease-out);
      will-change: opacity, transform;
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    .reveal-child {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition: opacity .6s var(--ease-out), transform .6s var(--ease-out);
      will-change: opacity, transform;
    }

    .reveal-stagger.is-visible .reveal-child {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    @media (max-width: 760px) {
      header nav {
        min-height: 0;
      }

      .nav-links {
        gap: 14px !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-load,
      .reveal,
      .reveal-child {
        opacity: 1 !important;
        transform: none !important;
        transition-duration: .01ms !important;
      }
    }
  `;
    document.head.appendChild(style);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let revealObserver = null;

  function isHomePage() {
    return window.location.pathname.replace(/\\/g, '/').endsWith('/home/index.html');
  }

  function commonHeader() {
    return `
      <header class="ff-common-header">
        <nav>
          <a href="/home/index.html" class="ff-common-logo"><span>Fresh</span>Face</a>
          <div class="nav-links">
            <a href="/home/index.html">Home</a>
            <a href="/services/index.html">Services</a>
            <a href="/about-us/index.html">About Us</a>
            <a href="/gallery/index.html">Gallery</a>
            <a href="/contact-us/index.html">Contact</a>
            <a href="/home/index.html#booking-section" class="btn-book">Book Now</a>
          </div>
        </nav>
      </header>
    `;
  }

  function commonFooter() {
    return `
      <footer class="ff-common-footer">
        <div class="ff-common-footer-grid">
          <div>
            <div class="ff-common-footer-logo"><span>Fresh</span>Face</div>
            <p>FreshFace Unisex Salon - where everyone gets the care, style, and confidence they deserve.</p>
            <div class="ff-common-social">
              <a href="https://www.instagram.com/freshface_kumbakonam?igsh=enl0ajhyMTdsOWU1&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://www.facebook.com/profile.php?id=100095534824375" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://youtube.com/@freshfaceunisexsalon?si=aawKs8U1ShjKmrVN" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home/index.html">Home</a></li>
              <li><a href="/services/index.html">Services</a></li>
              <li><a href="/about-us/index.html">About Us</a></li>
              <li><a href="/gallery/index.html">Gallery</a></li>
              <li><a href="/contact-us/index.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="/services/hair/index.html">Hair & Styling</a></li>
              <li><a href="/services/skin-facial/index.html">Skin & Facial</a></li>
              <li><a href="/services/others/index.html">Nails</a></li>
              <li><a href="/services/others/index.html">Grooming</a></li>
              <li><a href="/services/makeup/index.html">Bridal & Makeup</a></li>
            </ul>
          </div>
          <div>
            <h4>Our Outlets</h4>
            <ul>
              <li><strong style="color:var(--cream);">Kumbakonam</strong> - TSR Big Street</li>
              <li><a href="tel:+917380478047">+91 73804 78047</a></li>
              <li><strong style="color:var(--cream);">Karikulam</strong> - Near Axis Bank</li>
              <li><a href="tel:+916380453804">+91 63804 53804</a></li>
              <li><a href="mailto:freshfacekumbakonam@gmail.com">freshfacekumbakonam@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div class="ff-common-footer-bottom">
          <span>(c) 2026 FreshFace Unisex Salon. All rights reserved.</span>
          <span>Designed with care.</span>
        </div>
      </footer>
    `;
  }

  function applyCommonShell() {
    if (isHomePage()) return;

    const header = document.querySelector('header');
    const standaloneNav = !header ? document.querySelector('body > nav') : null;
    if (header) {
      header.outerHTML = commonHeader();
    } else if (standaloneNav) {
      standaloneNav.outerHTML = commonHeader();
    } else {
      document.body.insertAdjacentHTML('afterbegin', commonHeader());
    }

    const footer = document.querySelector('footer');
    if (footer) {
      footer.outerHTML = commonFooter();
    } else {
      document.body.insertAdjacentHTML('beforeend', commonFooter());
    }
  }

  function toArray(list) {
    return Array.prototype.slice.call(list);
  }

  function scopedElements(scope, selector) {
    const elements = [];
    if (scope.matches && scope.matches(selector)) elements.push(scope);
    if (scope.querySelectorAll) elements.push(...toArray(scope.querySelectorAll(selector)));
    return elements;
  }

  function applyStaggerDelays(container) {
    scopedElements(container, '.reveal-child').forEach((child, index) => {
      child.style.transitionDelay = (index * 90) + 'ms';
    });
  }

  function revealElement(element) {
    element.classList.add('is-visible');
  }

  function getRevealObserver() {
    if (revealObserver || prefersReducedMotion || !('IntersectionObserver' in window)) {
      return revealObserver;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        revealElement(entry.target);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    return revealObserver;
  }

  function initFreshFaceAnimations(scope) {
    const target = scope || document;

    scopedElements(target, '.hero-load').forEach(element => {
      if (element.dataset.ffLoaded === 'true') return;
      element.dataset.ffLoaded = 'true';

      if (prefersReducedMotion) {
        element.classList.add('is-loaded');
        return;
      }

      const delay = parseInt(element.dataset.delay || '0', 10);
      setTimeout(() => element.classList.add('is-loaded'), delay);
    });

    scopedElements(target, '.reveal-stagger').forEach(applyStaggerDelays);

    scopedElements(target, '.reveal, .reveal-stagger').forEach(element => {
      if (element.classList.contains('is-visible')) return;

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealElement(element);
        return;
      }

      if (element.dataset.ffObserved === 'true') return;
      element.dataset.ffObserved = 'true';
      getRevealObserver().observe(element);
    });
  }

  window.FreshFaceAnimations = {
    refresh: initFreshFaceAnimations,
    reveal: revealElement
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyCommonShell();
      initFreshFaceAnimations(document);
    }, { once: true });
  } else {
    applyCommonShell();
    initFreshFaceAnimations(document);
  }
})();
