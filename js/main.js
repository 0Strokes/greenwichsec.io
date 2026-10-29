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
      nav.classList.toggle('is-hidden', stuck && root.dataset.dir === 'down' && y > 400 && !nav.classList.contains('is-open'));
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

// Mobile menu: the button toggles the link panel; picking a link or
// pressing Escape closes it.
(function () {
  var nav = document.querySelector('.gs-nav');
  var btn = nav && nav.querySelector('.gs-menu');
  if (!btn) return;
  function set(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function () { set(!nav.classList.contains('is-open')); });
  nav.querySelectorAll('.gs-links a').forEach(function (a) {
    a.addEventListener('click', function () { set(false); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', function (e) { if (e.matches) set(false); });
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
    '#about > div:first-child > div:first-child', // fox mark
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

var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Count stats up from zero the first time they come into view.
(function () {
  var els = document.querySelectorAll('[data-count]');
  if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;
  function run(el) {
    var target = +el.dataset.count, suffix = el.dataset.suffix || '', start = null;
    function frame(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / 1400, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      run(e.target);
    });
  }, { threshold: 0.6 });
  els.forEach(function (el) { el.textContent = '0' + (el.dataset.suffix || ''); io.observe(el); });
})();

// Type out the sample finding's terminal, one line after another, the first
// time it scrolls into view. Lines are revealed by width, so the text itself
// is never rewritten and the language switch keeps working.
(function () {
  var term = document.querySelector('.gs-term');
  if (!term) return;
  if (reduceMotion || !('IntersectionObserver' in window) || !term.animate) { term.classList.add('is-done'); return; }
  var lines = term.querySelectorAll('.gs-type');
  function typeLine(i) {
    if (i >= lines.length) { term.classList.add('is-done'); return; }
    var el = lines[i], n = el.textContent.length;
    el.classList.add('is-active');
    var anim = el.animate([{ width: '0ch' }, { width: n + 'ch' }], { duration: n * 32, easing: 'steps(' + n + ')', fill: 'forwards' });
    anim.onfinish = function () {
      el.style.width = 'auto';
      anim.cancel();
      el.classList.remove('is-active');
      setTimeout(function () { typeLine(i + 1); }, 280);
    };
  }
  var io = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    io.disconnect();
    setTimeout(function () { typeLine(0); }, 500);
  }, { threshold: 0.6 });
  io.observe(term);
})();

// A soft glow that follows the pointer across cards.
(function () {
  if (!window.matchMedia('(hover: hover)').matches || reduceMotion) return;
  document.querySelectorAll([
    '.gs-card', '.gs-form',
    '#training > div:last-child',
    '#method > div:last-child > div:last-child',
    '#about > div:first-child'
  ].join(',')).forEach(function (el) {
    el.classList.add('gs-spot');
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();

// Contact form: deliver through Web3Forms, which emails the team. The access
// key is public by design (it can only send mail to us). If the request fails,
// fall back to opening a pre-filled email so no enquiry is lost.
(function () {
  var form = document.getElementById('gs-form');
  if (!form) return;
  var WEB3FORMS_KEY = '80acc8ca-37d1-4808-94ee-89521ad239bd';
  var btn = form.querySelector('button[type="submit"]');
  var status = form.querySelector('.gs-status');
  function say(text, error) {
    status.textContent = text;
    status.classList.toggle('is-error', !!error);
    status.hidden = false;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (name) { return (form.elements[name].value || '').trim(); };
    var es = document.documentElement.lang === 'es';
    var subject = (es ? 'Consulta: ' : 'Enquiry: ') + v('service') + (v('company') ? ' · ' + v('company') : '');
    function mailto() {
      var body = [
        (es ? 'Nombre: ' : 'Name: ') + v('name'),
        (es ? 'Empresa: ' : 'Company: ') + v('company'),
        'Email: ' + v('email'),
        (es ? 'Servicio: ' : 'Service: ') + v('service'),
        '',
        v('msg')
      ].join('\n');
      window.location.href = 'mailto:info@greenwichsec.io?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
    if (!window.fetch) { mailto(); return; }
    btn.disabled = true;
    say(es ? 'Enviando…' : 'Sending…');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: subject,
        from_name: 'greenwichsec.io',
        botcheck: form.elements.botcheck.checked,
        name: v('name'),
        email: v('email'),
        company: v('company'),
        service: v('service'),
        message: v('msg'),
        language: es ? 'es' : 'en'
      })
    }).then(function (r) { return r.json(); }).then(function (res) {
      if (!res.success) throw new Error(res.message);
      form.reset();
      say(es ? 'Gracias. Recibimos su mensaje y le responderemos en un día hábil.' : 'Thank you. We have your message and will reply within one business day.');
    }).catch(function () {
      say(es ? 'No pudimos enviarlo desde aquí, así que abrimos un correo a info@greenwichsec.io.' : 'We could not send it from here, so we opened an email to info@greenwichsec.io instead.', true);
      mailto();
    }).then(function () { btn.disabled = false; });
  });
})();
