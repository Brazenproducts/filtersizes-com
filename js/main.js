// FilterSizes.com — Main JS
(function() {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });

    // Close nav on link click (mobile)
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active nav link
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/index';
  document.querySelectorAll('.site-nav a').forEach(function(link) {
    var href = link.getAttribute('href').replace(/\/$/, '').replace('.html', '');
    var path = currentPath.replace('.html', '');
    if (path.endsWith(href.replace('.html', '')) || (href === 'index.html' && (path === '' || path === '/' || path.endsWith('/index')))) {
      link.classList.add('active');
    }
  });
})();
