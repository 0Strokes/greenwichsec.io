// Live GMT clock in the top bar.
(function () {
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var gmtEls = document.querySelectorAll('[data-gmt]');
  function tick() {
    var d = new Date();
    var t = pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());
    gmtEls.forEach(function (el) { el.textContent = t; });
  }
  tick();
  setInterval(tick, 1000);
})();

// Scroll: direction, sticky nav that hides going down, progress line.
(function () {
  var root = document.documentElement;
  var nav = document.querySelector('.gs-nav');
  var bar = document.querySelector('.gs-progress');
  var lastY = window.scrollY;
  var ticking = false;
  // A stuck element's offsetTop follows the scroll, so measure its resting
  // position from the element just above it instead.
  var navTop = 0;
  function measure() { navTop = nav && nav.previousElementSibling ? nav.previousElementSibling.offsetHeight : 0; }
  measure();
  window.addEventListener('resize', measure);
  root.dataset.dir = 'down';

  function update() {
    var y = window.scrollY;
    if (Math.abs(y - lastY) > 4) {
      root.dataset.dir = y > lastY ? 'down' : 'up';
      lastY = y;
    }
    if (nav) {
      var stuck = y > navTop + 1;
      nav.classList.toggle('is-stuck', stuck);
      nav.classList.toggle('is-hidden', stuck && root.dataset.dir === 'down' && y > 400);
    }
    if (bar) {
      var max = root.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

// Reveal blocks as they enter the viewport, from below when scrolling down
// and from above when scrolling up. Blocks entering together are staggered.
(function () {
  if (!('IntersectionObserver' in window)) return;
  var candidates = document.querySelectorAll([
    '.gs-eyebrow', 'h1', 'h2', 'h3', 'p', '.gs-row', '.gs-card', 'form',
    '#top > div:last-child > div',          // hero stats
    '#top > div > div:last-child',          // hero clock
    '#method > div:nth-child(2) > div',     // method steps
    '#method > div:last-child > div:last-child', // sample finding
    '#training > div:last-child',           // workshop syllabus
    '#about > div:first-child > div:first-child', // panther
    '#about > div:first-child > div:last-child > div:last-child > div', // team traits
    '#about > div:nth-child(3) > div',      // experience stats
    '#contact > div > div:last-child'       // email
  ].join(','));
  // Only animate the outermost match, so nothing moves twice.
  var set = new Set(candidates);
  var els = Array.prototype.filter.call(candidates, function (el) {
    for (var p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false;
    return true;
  });
  els.forEach(function (el) { el.classList.add('gs-reveal'); });

  var io = new IntersectionObserver(function (entries) {
    var entering = entries.filter(function (e) {
      if (!e.isIntersecting) { e.target.classList.remove('is-in'); return false; }
      return e.intersectionRatio >= 0.2 || e.boundingClientRect.height > window.innerHeight;
    });
    entering.sort(function (a, b) {
      return (a.boundingClientRect.top - b.boundingClientRect.top) || (a.boundingClientRect.left - b.boundingClientRect.left);
    });
    if (document.documentElement.dataset.dir === 'up') entering.reverse();
    entering.forEach(function (e, i) {
      var el = e.target;
      if (el.classList.contains('is-in')) return;
      el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
      el.classList.add('is-in');
      setTimeout(function () { el.style.transitionDelay = ''; }, 1500);
    });
  }, { threshold: [0, 0.2] });
  els.forEach(function (el) { io.observe(el); });
})();

// Contact form: open a pre-filled email, since the site has no backend.
(function () {
  var form = document.getElementById('gs-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (name) { return (form.elements[name].value || '').trim(); };
    var es = document.documentElement.lang === 'es';
    var subject = (es ? 'Consulta: ' : 'Enquiry: ') + v('service') + (v('company') ? ' · ' + v('company') : '');
    var body = [
      (es ? 'Nombre: ' : 'Name: ') + v('name'),
      (es ? 'Empresa: ' : 'Company: ') + v('company'),
      'Email: ' + v('email'),
      (es ? 'Servicio: ' : 'Service: ') + v('service'),
      '',
      v('msg')
    ].join('\n');
    window.location.href = 'mailto:hello@greenwichsec.io?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
