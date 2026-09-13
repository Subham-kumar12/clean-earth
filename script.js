(function initializeLayout() {
  const toggleButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.main-nav');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (navMenu) {
    navMenu.querySelectorAll('a').forEach((link) => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleButton.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

})();
