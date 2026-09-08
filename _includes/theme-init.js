// Apply the saved theme before the stylesheet loads to prevent a light flash.
try {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.dataset.theme = 'dark';
  }
} catch (error) {
  // Keep the light default when browser storage is unavailable.
}
