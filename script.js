document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // mark active nav link based on current file
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // click-to-play video facades (loads the iframe only on click, keeps pages fast)
  document.querySelectorAll('.video-thumb[data-video-id]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var id = thumb.getAttribute('data-video-id');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = thumb.getAttribute('data-title') || 'Experiment video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      thumb.innerHTML = '';
      thumb.appendChild(iframe);
    }, { once: true });
  });

  // subtle parallax on the hero waveform signature
  var wfBox = document.querySelector('.waveform-box');
  if (wfBox && window.matchMedia('(hover: hover)').matches) {
    wfBox.addEventListener('mousemove', function (e) {
      var r = wfBox.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      var svg = wfBox.querySelector('svg');
      if (svg) svg.style.transform = 'translate(' + (x * 8) + 'px,' + (y * 8) + 'px)';
    });
    wfBox.addEventListener('mouseleave', function () {
      var svg = wfBox.querySelector('svg');
      if (svg) svg.style.transform = '';
    });
  }

  // simple scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('fade-up'); });
  }
});
