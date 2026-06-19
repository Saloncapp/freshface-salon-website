(function () {
  const theme = {
    green: '#8DC455',
    greenDark: '#658D3D',
    black: '#0D0D0D',
    charcoal: '#1F1F1F',
    surface: '#161616',
    cream: '#F5F5F0',
    gray: '#A8B5A0',
    line: 'rgba(168,181,160,0.22)'
  };

  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    const cssName = '--' + key.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
    root.style.setProperty(cssName, value);
  });

  if (document.getElementById('freshface-theme-styles')) return;

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

    @media (max-width: 760px) {
      header nav {
        min-height: 0;
      }

      .nav-links {
        gap: 14px !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
