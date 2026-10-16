document.addEventListener('DOMContentLoaded', function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  var backdrop = document.getElementById('nav-backdrop');

  function closeNav() {
    nav.classList.remove('open');
    backdrop.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('open');
    backdrop.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
  }

  if (toggle && nav && backdrop) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.contains('open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    backdrop.addEventListener('click', closeNav);

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  // Back to top button visibility
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  }

  // Contact form: no backend available, so hand off to the user's email
  // client via a mailto link instead of posting anywhere (keeps the button
  // from ever failing/erroring on click).
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        note.textContent = 'Please fill in all fields before sending.';
        note.style.color = '#c0392b';
        return;
      }

      var subject = 'Website enquiry from ' + name;
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message;

      var mailto =
        'mailto:thaoht.palhomes@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;

      note.textContent = 'Opening your email app to send this message...';
      note.style.color = '#1f4766';
    });
  }
});
