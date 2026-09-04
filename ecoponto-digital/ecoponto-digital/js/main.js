document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navBar = document.querySelector('.nav-bar');

  if (toggle && navBar) {
    toggle.addEventListener('click', function () {
      navBar.classList.toggle('open');
    });
  }

  var currentPage = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    if (link.getAttribute('data-page') === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
