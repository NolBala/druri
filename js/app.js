(function () {
  "use strict";
  var LANGS = ["en", "sq", "de"];
  var LOCALES = { en: "en-GB", sq: "sq-AL", de: "de-DE" };
  var state = { lang: "en", cat: "all", q: "", sort: "featured" };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function t(key, vars) {
    var s = (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace("{" + k + "}", vars[k]); });
    return s;
  }
  function money(n) {
    return new Intl.NumberFormat(LOCALES[state.lang], { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  }
  function catName(id) { return t("cat." + id); }
  function pname(p) { return p.name[state.lang] || p.name.en; }
  /* Unsplash photo id -> cropped 4:3 image URL; a path like "images/x.jpg" is used as-is */
  function img(photo, w) {
    if (photo.indexOf("photo-") !== 0) return photo;
    return "https://images.unsplash.com/" + photo + "?auto=format&fit=crop&q=75&w=" + w + "&h=" + Math.round(w * 3 / 4);
  }
  function srcset(photo) {
    if (photo.indexOf("photo-") !== 0) return "";
    return ' srcset="' + img(photo, 480) + ' 480w, ' + img(photo, 800) + ' 800w, ' + img(photo, 1200) + ' 1200w"';
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ---------- language ---------- */
  function detectLang() {
    var saved = store("druri-lang");
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : "en";
  }
  function setLang(lang) {
    state.lang = lang;
    store("druri-lang", lang);
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-placeholder]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-placeholder")); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $$("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"); });
    renderRooms(); renderChips(); renderGrid();
    if (openId) fillModal(openId);
  }

  /* ---------- rooms ---------- */
  function renderRooms() {
    $("#rooms-grid").innerHTML = CATEGORIES.map(function (c) {
      var n = PRODUCTS.filter(function (p) { return p.category === c.id; }).length;
      return '<button type="button" class="room" data-room="' + c.id + '">' +
        '<span class="room-img"><img src="' + img(c.photo, 800) + '"' + srcset(c.photo) + ' sizes="(max-width: 480px) 100vw, (max-width: 860px) 50vw, 400px" alt="" loading="lazy" width="800" height="600"></span>' +
        '<span class="room-text"><span class="room-name">' + esc(catName(c.id)) + '</span>' +
        '<span class="room-count">' + n + ' ' + esc(t("cats.items")) + '</span></span></button>';
    }).join("");
  }

  /* ---------- filters ---------- */
  function renderChips() {
    var ids = ["all"].concat(CATEGORIES.map(function (c) { return c.id; }));
    $("#chips").innerHTML = ids.map(function (id) {
      var on = state.cat === id;
      return '<button type="button" role="tab" class="chip" data-cat="' + id + '" aria-selected="' + on + '">' + esc(catName(id)) + '</button>';
    }).join("");
  }

  function visible() {
    var q = state.q.trim().toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      if (state.cat !== "all" && p.category !== state.cat) return false;
      if (!q) return true;
      var hay = [p.name.en, p.name.sq, p.name.de, p.code, catName(p.category), p.desc[state.lang], p.material[state.lang]].join(" ").toLowerCase();
      return hay.indexOf(q) > -1;
    });
    if (state.sort === "priceAsc") list.sort(function (a, b) { return a.price - b.price; });
    if (state.sort === "priceDesc") list.sort(function (a, b) { return b.price - a.price; });
    if (state.sort === "name") list.sort(function (a, b) { return pname(a).localeCompare(pname(b), LOCALES[state.lang]); });
    return list;
  }

  function renderGrid() {
    var list = visible();
    $("#count").textContent = t("catalog.count", { n: list.length });
    $("#empty").hidden = list.length > 0;
    $("#grid").innerHTML = list.map(function (p) {
      return '<a class="card" href="#' + p.id + '" data-id="' + p.id + '">' +
        '<span class="card-img"><img src="' + img(p.photo, 800) + '"' + srcset(p.photo) + ' sizes="(max-width: 600px) 100vw, 300px" alt="' + esc(pname(p)) + '" loading="lazy" width="800" height="600">' +
        (p.isNew ? '<span class="badge">' + esc(t("badge.new")) + '</span>' : '') + '</span>' +
        '<span class="card-body">' +
          '<span class="card-top"><span class="card-name">' + esc(pname(p)) + '</span>' +
          '<span class="card-price"><small>' + esc(t("price.from")) + '</small> ' + money(p.price) + '</span></span>' +
          '<span class="card-meta">' + esc(catName(p.category)) + ' · <span class="mono">' + p.dims.w + ' × ' + p.dims.d + ' × ' + p.dims.h + ' cm</span></span>' +
        '</span></a>';
    }).join("");
  }

  /* ---------- detail ---------- */
  var openId = null, lastFocus = null;
  function fillModal(id) {
    var p = PRODUCTS.filter(function (x) { return x.id === id; })[0];
    if (!p) return false;
    $("#m-img").src = img(p.photo, 1200);
    $("#m-img").alt = pname(p);
    $("#m-cat").textContent = catName(p.category);
    $("#m-name").textContent = pname(p);
    $("#m-price").innerHTML = '<small>' + esc(t("price.from")) + '</small> ' + money(p.price);
    $("#m-desc").textContent = p.desc[state.lang];
    $("#m-w").textContent = p.dims.w + " cm";
    $("#m-d").textContent = p.dims.d + " cm";
    $("#m-h").textContent = p.dims.h + " cm";
    $("#m-mat").textContent = p.material[state.lang];
    $("#m-code").textContent = p.code;
    $("#m-sw").innerHTML = p.finishes.map(function (c) { return '<span class="swatch" style="background:' + c + '"></span>'; }).join("");
    $("#copy").textContent = t("detail.copy");
    return true;
  }
  function openModal(id) {
    if (!fillModal(id)) return;
    openId = id;
    lastFocus = document.activeElement;
    $("#modal").hidden = false;
    document.body.classList.add("locked");
    $(".close", $("#modal")).focus();
  }
  function closeModal() {
    if (!openId) return;
    openId = null;
    $("#modal").hidden = true;
    document.body.classList.remove("locked");
    if (location.hash && location.hash !== "#catalog") {
      try { history.replaceState(null, "", "#catalog"); } catch (e) {}
    }
    if (lastFocus) lastFocus.focus();
  }
  function routeHash() {
    var id = location.hash.slice(1);
    if (PRODUCTS.some(function (p) { return p.id === id; })) openModal(id);
    else if (openId) closeModal();
  }

  /* ---------- events ---------- */
  document.addEventListener("click", function (e) {
    var b;
    if ((b = e.target.closest("[data-lang]"))) return setLang(b.getAttribute("data-lang"));
    if ((b = e.target.closest("[data-cat]"))) { state.cat = b.getAttribute("data-cat"); renderChips(); renderGrid(); return; }
    if ((b = e.target.closest("[data-room]"))) {
      state.cat = b.getAttribute("data-room"); renderChips(); renderGrid();
      $("#catalog").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      return;
    }
    if ((b = e.target.closest(".card"))) { e.preventDefault(); location.hash = b.getAttribute("data-id"); return; }
    if (e.target.closest("[data-close]")) return closeModal();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  window.addEventListener("hashchange", routeHash);
  $("#q").addEventListener("input", function (e) { state.q = e.target.value; renderGrid(); });
  $("#sort").addEventListener("change", function (e) { state.sort = e.target.value; renderGrid(); });
  $("#reset").addEventListener("click", function () { state.cat = "all"; state.q = ""; $("#q").value = ""; renderChips(); renderGrid(); });
  $("#copy").addEventListener("click", function () {
    var code = $("#m-code").textContent, btn = this;
    var done = function () { btn.textContent = t("detail.copied"); setTimeout(function () { btn.textContent = t("detail.copy"); }, 1600); };
    var fallback = function () { var r = document.createRange(); r.selectNodeContents($("#m-code")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done, fallback);
    else fallback();
  });

  $("#hero-img").src = "images/hero.svg";
  $("#year").textContent = new Date().getFullYear();
  $("#statPieces").textContent = PRODUCTS.length;
  setLang(detectLang());
  routeHash();
})();
