const path = require("path");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const site = require("./data/site");
const icon = require("./lib/icons");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
      fontSrc: ["https://fonts.gstatic.com"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https://res.cloudinary.com", "https://image.thum.io"],
      connectSrc: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      upgradeInsecureRequests: null
    }
  }
}));
app.use(compression());
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "7d" }));

app.get("/", (req, res) => res.render("index", { site, icon }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false,
  message: { ok: false, error: "Too many messages. Please try again in a few minutes or use WhatsApp." } });
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

app.post("/api/contact", limiter, async (req, res) => {
  const { name = "", email = "", message = "", website = "" } = req.body || {};
  if (website) return res.json({ ok: true }); // honeypot: bots fill this hidden field
  const n = String(name).trim(), e = String(email).trim(), m = String(message).trim();
  if (n.length < 2 || n.length > 80) return res.status(400).json({ ok: false, error: "Enter your name (2–80 characters)." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) || e.length > 120) return res.status(400).json({ ok: false, error: "Enter a valid email address." });
  if (m.length < 10 || m.length > 2000) return res.status(400).json({ ok: false, error: "Write a message of 10–2000 characters." });
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ ok: false, error: "The form isn't configured yet. Please use WhatsApp or email." });
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "YUSUF TECH <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO || site.email],
        reply_to: e,
        subject: `New project enquiry from ${n.replace(/[\r\n]/g, " ")}`,
        html: `<p><b>Name:</b> ${esc(n)}<br><b>Email:</b> ${esc(e)}</p><p>${esc(m).replace(/\n/g, "<br>")}</p>`
      })
    });
    if (!r.ok) throw new Error(`Resend ${r.status}`);
    res.json({ ok: true });
  } catch (err) {
    console.error(err.message);
    res.status(502).json({ ok: false, error: "Message could not be sent. Please try WhatsApp or email." });
  }
});

app.use((req, res) => res.redirect(302, "/"));

if (require.main === module) app.listen(process.env.PORT || 3000, () => console.log("YusufTech on http://localhost:" + (process.env.PORT || 3000)));
module.exports = app;
