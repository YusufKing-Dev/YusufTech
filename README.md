# YUSUF TECH (Node.js / Express)

Run locally: `npm install && npm start` then open http://localhost:3000
Edit content in `data/site.js` (projects, services, skills, socials). Layout is in `views/index.ejs`, styles in `public/css/style.css`.

## Deploy on Vercel
1. Push this folder to GitHub, import the repo in Vercel (framework: Express/Other, no build command).
2. Project Settings > Environment Variables: `RESEND_API_KEY`, `CONTACT_TO` (your email), optional `CONTACT_FROM`.
3. Settings > Domains: add your domain and set the DNS records Vercel shows. Delete the old `CNAME` file from the repo.
