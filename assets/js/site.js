/* Lucky Farm 幸运农场 —— 四件小事:
   明暗、语言、把问句送去 Leptex、让山慢慢浮出来。
   问答框本身是 <form method="get">,JS 关掉也照样能用。 */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var I18N = window.LF_I18N || { langs: [], dict: {} };
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------------- 一、明暗 */
  var THEME_KEY = 'lf.theme';

  function setTheme(next) {
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    var btns = doc.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', String(next === 'light'));
    }
  }
  setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  doc.addEventListener('click', function (ev) {
    if (!ev.target.closest('[data-theme-toggle]')) return;
    setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  /* -------------------------------------------------------------- 二、语言 */
  var LANG_KEY = 'lf.lang';
  var codes = I18N.langs.map(function (l) { return l.code; });
  var lang = 'en';

  function detect() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && codes.indexOf(saved) > -1) return saved;
    } catch (e) {}
    var wanted = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < wanted.length; i++) {
      var tag = String(wanted[i]).toLowerCase();
      for (var j = 0; j < codes.length; j++) {
        if (tag === codes[j] || tag.indexOf(codes[j] + '-') === 0) return codes[j];
      }
      if (tag.indexOf('zh') === 0) return 'zh';   /* zh-CN / zh-TW / zh-Hans … */
    }
    return 'en';
  }

  function say(key) {
    var row = I18N.dict[key];
    return row ? (row[lang] || row.en || '') : '';
  }

  function applyLang(next) {
    lang = codes.indexOf(next) > -1 ? next : 'en';
    root.lang = lang === 'zh' ? 'zh-Hans' : lang;
    root.setAttribute('data-lang', lang);

    var nodes, i, s;

    nodes = doc.querySelectorAll('[data-i18n]');
    for (i = 0; i < nodes.length; i++) {
      s = say(nodes[i].getAttribute('data-i18n'));
      if (s) nodes[i].textContent = s;
    }

    nodes = doc.querySelectorAll('[data-i18n-ph]');
    for (i = 0; i < nodes.length; i++) {
      s = say(nodes[i].getAttribute('data-i18n-ph'));
      if (s) nodes[i].placeholder = s;
    }

    nodes = doc.querySelectorAll('[data-i18n-label]');
    for (i = 0; i < nodes.length; i++) {
      s = say(nodes[i].getAttribute('data-i18n-label'));
      if (s) nodes[i].setAttribute('aria-label', s);
    }

    /* 链接里的 ?q= 换成这门语言的问句;&e= 原样保留 */
    nodes = doc.querySelectorAll('a[data-q]');
    for (i = 0; i < nodes.length; i++) {
      s = say(nodes[i].getAttribute('data-q'));
      if (!s) continue;
      var url = new URL(nodes[i].href, location.href);
      url.searchParams.set('q', s);
      nodes[i].href = url.toString();
    }

    /* 语言按钮上显示当前语言 */
    var chips = doc.querySelectorAll('[data-lang-current]');
    var meta = I18N.langs.filter(function (l) { return l.code === lang; })[0];
    for (i = 0; i < chips.length; i++) chips[i].textContent = meta ? meta.tag : lang.toUpperCase();

    var opts = doc.querySelectorAll('[data-lang-set]');
    for (i = 0; i < opts.length; i++) {
      opts[i].setAttribute('aria-current', String(opts[i].getAttribute('data-lang-set') === lang));
    }

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  applyLang(detect());

  var menu = doc.querySelector('.lang');
  doc.addEventListener('click', function (ev) {
    var opt = ev.target.closest('[data-lang-set]');
    if (opt) {
      applyLang(opt.getAttribute('data-lang-set'));
      if (menu) menu.open = false;
      return;
    }
    if (menu && menu.open && !ev.target.closest('.lang')) menu.open = false;
  });
  doc.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && menu && menu.open) menu.open = false;
  });

  /* ------------------------------------------------- 三、问句送往 Leptex */
  /* 浏览器自己会把问句编码好。这里只做一件事:空问句就别带 ?q= 了。 */
  var forms = doc.querySelectorAll('form[data-ask]');
  Array.prototype.forEach.call(forms, function (form) {
    var input = form.querySelector('[data-ask-input]');
    if (!input) return;
    form.addEventListener('submit', function () {
      var v = input.value.trim();
      if (v) { input.value = v; input.setAttribute('name', 'q'); }
      else { input.removeAttribute('name'); }
      setTimeout(function () {
        input.setAttribute('name', 'q');
        input.value = '';
        input.blur();
      }, 60);
    });
  });

  /* ------------------------------------------------------ 四、页眉与抽屉 */
  var masthead = doc.querySelector('.masthead');
  var drawer = doc.querySelector('.drawer');
  var burger = doc.querySelector('.burger');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.getAttribute('data-open') === 'true';
      drawer.setAttribute('data-open', String(!open));
      burger.setAttribute('aria-expanded', String(!open));
    });
  }

  /* --------------------------------------------------- 五、浮章与浮现 */
  var hail = doc.querySelector('.hail');
  var hero = doc.querySelector('.hero');
  function onScroll() {
    if (masthead) masthead.setAttribute('data-stuck', String(window.scrollY > 8));
    if (hail) {
      var past = hero ? window.scrollY > hero.offsetHeight * 0.7 : window.scrollY > 600;
      hail.setAttribute('data-show', String(past));
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var rises = doc.querySelectorAll('.rise');
  if (calm || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(rises, function (el) { el.setAttribute('data-in', 'true'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = (parseFloat(entry.target.dataset.delay || 0)) + 'ms';
        entry.target.setAttribute('data-in', 'true');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(rises, function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------- 六、落笔即问 */
  var lead = doc.querySelector('[data-ask-focus]');
  if (lead && window.matchMedia('(min-width: 900px)').matches && !location.hash) {
    lead.focus({ preventScroll: true });
  }
})();
