/* nav.js — makes the hamburger button open and close the mobile menu */

(function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');
  var nav = document.querySelector('.nav');

  // If a page doesn't have the menu markup, just stop here.
  if (!toggle || !menu || !nav) return;

  function openMenu() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  // 1. Tapping the hamburger opens or closes the menu.
  toggle.addEventListener('click', function () {
    if (nav.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // 2. Tapping any link inside the menu closes it.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });

  // 3. Tapping outside the menu closes it.
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target)) closeMenu();
  });

  // 4. Pressing Escape closes it.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  // 5. If the window is widened back to desktop size, reset everything.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) closeMenu();
  });
})();
