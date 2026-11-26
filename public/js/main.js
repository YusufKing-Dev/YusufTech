(function () {
  var loader = document.getElementById("loader"), t0 = Date.now();
  function hide() { loader.classList.add("done"); }
  function ready() { setTimeout(hide, Math.max(0, 700 - (Date.now() - t0))); }
  if (document.readyState === "complete") ready(); else window.addEventListener("load", ready);
  setTimeout(hide, 4000);

  var burger = document.getElementById("burger"), menu = document.getElementById("menu");
  burger.addEventListener("click", function () { burger.setAttribute("aria-expanded", menu.classList.toggle("open")); });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  var btns = document.querySelectorAll(".filters button"), cards = document.querySelectorAll(".proj");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      btns.forEach(function (x) { x.classList.toggle("on", x === b); });
      cards.forEach(function (c) { c.hidden = b.dataset.f !== "all" && c.dataset.cat !== b.dataset.f; });
    });
  });

  document.querySelectorAll(".thumb img").forEach(function (im) { im.addEventListener("error", function () { im.remove(); }); });

  var els = document.querySelectorAll(".hero-copy,.stats,.chips,.photo,.prose,.sec h2,.sub,.filters,.card,.proj,.skills>div,.steps li,.pkg,.faq details,.form,#contact .lead,.socials,.kicker,.mk-h,.mk-cta,.statband,.marquee,.hero-art,.quote");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { var t = e.target; t.classList.add("in"); io.unobserve(t); setTimeout(function () { t.style.transitionDelay = ""; }, 1000); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el, i) { el.classList.add("reveal"); el.style.transitionDelay = (i % 3) * 90 + "ms"; io.observe(el); });
  }


  // project thumbnail gradients (set here because the CSP blocks inline style attributes)
  document.querySelectorAll(".thumb[data-g1]").forEach(function (t) { t.style.setProperty("--g1", t.dataset.g1); t.style.setProperty("--g2", t.dataset.g2); });

  // scroll progress + nav shadow
  var bar = document.getElementById("progress"), nav = document.querySelector(".nav"), tick = false;
  function onScroll() {
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, scrollY / h) : 0) + ")";
    nav.classList.toggle("scrolled", scrollY > 8); tick = false;
  }
  addEventListener("scroll", function () { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // light / dark toggle
  var tbtn = document.getElementById("theme"), root = document.documentElement;
  function syncTheme() {
    var light = root.getAttribute("data-theme") === "light";
    tbtn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", light ? "#f7f6f1" : "#0d0f12");
  }
  tbtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncTheme();
  });
  syncTheme();

  // count-up stats
  var counts = document.querySelectorAll(".count");
  function run(el) {
    var to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec, 10) || 0, t0 = performance.now(), d = 1400;
    (function step(now) {
      var p = Math.min(1, (now - t0) / d), v = to * (1 - Math.pow(1 - p, 3));
      el.textContent = v.toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counts.forEach(function (c) { co.observe(c); });
  }

  // rotating word in the headline
  var rot = document.getElementById("rot");
  if (rot && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var words = rot.dataset.words.split(","), wi = 0;
    setInterval(function () {
      rot.classList.add("out");
      setTimeout(function () { wi = (wi + 1) % words.length; rot.textContent = words[wi]; rot.classList.remove("out"); }, 260);
    }, 2400);
  }

  // project gallery: arrows + drag to scroll
  var gal = document.getElementById("projects");
  function step(dir) { gal.scrollBy({ left: dir * Math.min(490, gal.clientWidth * 0.85), behavior: "smooth" }); }
  document.getElementById("gprev").addEventListener("click", function () { step(-1); });
  document.getElementById("gnext").addEventListener("click", function () { step(1); });
  var down = false, sx = 0, sl = 0, moved = false;
  gal.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = gal.scrollLeft; });
  addEventListener("pointerup", function () { down = false; gal.style.scrollSnapType = ""; });
  addEventListener("pointermove", function (e) {
    if (!down) return;
    var dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; gal.style.scrollSnapType = "none"; }
    gal.scrollLeft = sl - dx;
  });
  gal.addEventListener("click", function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
  gal.addEventListener("dragstart", function (e) { e.preventDefault(); });

  // cursor spotlight on cards
  document.addEventListener("pointermove", function (e) {
    var c = e.target.closest && e.target.closest(".card,.proj");
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });

  var typeSel = document.getElementById("type"), otherWrap = document.getElementById("otherWrap"), other = document.getElementById("other");
  typeSel.addEventListener("change", function () {
    var isOther = typeSel.value === "Other";
    otherWrap.hidden = !isOther; other.required = isOther;
    if (isOther) other.focus();
  });

  var form = document.getElementById("form"), msg = document.getElementById("msg");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var btn = form.querySelector("button"), data = Object.fromEntries(new FormData(form));
    if (!form.checkValidity()) { msg.className = "err"; msg.textContent = "Please fill in your name, a valid email, the website type, and a message of at least 10 characters."; return; }
    btn.disabled = true; btn.textContent = "Sending…"; msg.className = ""; msg.textContent = "";
    try {
      var r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      var j = await r.json();
      if (!j.ok) throw new Error(j.error);
      form.reset(); otherWrap.hidden = true; msg.className = "ok"; msg.textContent = "Message sent. I'll reply within 24 hours.";
    } catch (err) {
      msg.className = "err"; msg.textContent = err.message || "Message could not be sent. Please try WhatsApp or email.";
    } finally { btn.disabled = false; btn.textContent = "Send message"; }
  });
})();