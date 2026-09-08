(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-switcher');
  if (!button) return;
  let transitionTimer;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const label = theme === 'dark' ? button.dataset.labelLight : button.dataset.labelDark;
    button.setAttribute('aria-label', label);
    button.title = label;
  }

  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    // Fade only an explicit theme change, never the initial page load.
    clearTimeout(transitionTimer);
    root.classList.add('theme-changing');
    applyTheme(theme);
    transitionTimer = setTimeout(() => root.classList.remove('theme-changing'), 300);
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // The switch still works on this page when storage is unavailable.
    }
  });

  // Keep open tabs and pages restored with Back/Forward in sync.
  function restoreTheme() {
    try {
      applyTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
    } catch (error) {
      // Keep the current theme when storage is unavailable.
    }
  }

  window.addEventListener('storage', (event) => {
    if (event.key === 'theme' || event.key === null) restoreTheme();
  });
  window.addEventListener('pageshow', restoreTheme);

  applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
  button.hidden = false;
})();
