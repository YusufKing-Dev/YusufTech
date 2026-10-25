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

  var form = document.getElementById("form"), msg = document.getElementById("msg");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var btn = form.querySelector("button"), data = Object.fromEntries(new FormData(form));
    if (!form.checkValidity()) { msg.className = "err"; msg.textContent = "Please fill in your name, a valid email, and a message of at least 10 characters."; return; }
    btn.disabled = true; btn.textContent = "Sending…"; msg.className = ""; msg.textContent = "";
    try {
      var r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      var j = await r.json();
      if (!j.ok) throw new Error(j.error);
      form.reset(); msg.className = "ok"; msg.textContent = "Message sent. I'll reply within 24 hours.";
    } catch (err) {
      msg.className = "err"; msg.textContent = err.message || "Message could not be sent. Please try WhatsApp or email.";
    } finally { btn.disabled = false; btn.textContent = "Send message"; }
  });
})();
