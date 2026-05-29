document.addEventListener('DOMContentLoaded', function () {
  const key = 'selection';
  const targetPath = '/pages/insider-offer';

  if (window.location.pathname === targetPath) {
    localStorage.setItem(key, 'subscription');
  }
});
