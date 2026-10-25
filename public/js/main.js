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

  var els = document.querySelectorAll(".hero-copy,.stats,.chips,.photo,.prose,.sec h2,.sub,.filters,.card,.proj,.skills>div,.steps li,.pkg,.faq details,.form,#contact .lead,.socials");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el, i) { el.classList.add("reveal"); el.style.transitionDelay = (i % 3) * 90 + "ms"; io.observe(el); });
  }

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
