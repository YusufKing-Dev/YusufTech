const G = { RC: ["#0f1e3d", "#1b2f57"], LS: ["#e4703c", "#4c7a54"], KK: ["#3a2416", "#6b4226"], NB: ["#d9481d", "#f4b942"], CP: ["#6e1423", "#8a3324"], SW: ["#0e6ba8", "#5fa8d3"], QP: ["#1d2027", "#3a3f4a"], EC: ["#0b4f4a", "#1f7a70"], AP: ["#4a3423", "#7a5a3a"], OU: ["#1a2340", "#2e3d6b"], SB: ["#12306b", "#c8962e"] };
const OWN_DOMAIN_DEMOS = true; // false = link straight to github.io
const P = (cat, ini, city, name, desc, slug) => { const gh = `https://yusufking-dev.github.io/${slug}/`, url = OWN_DOMAIN_DEMOS ? `/demos/${slug.toLowerCase()}/` : gh; return { cat, ini, city, name, desc, slug, url, grad: G[ini], shot: `https://image.thum.io/get/width/700/crop/900/noanimate/${gh}`, stack: "HTML · CSS · JS" }; };
const X = (cat, ini, city, name, desc, url, shot) => ({ cat, ini, city, name, desc, url, grad: G[ini], shot, stack: "Live website", external: true });
module.exports = {
  url: "https://www.hireyusuftech.online",
  brand: "YUSUF TECH",
  logo: "https://res.cloudinary.com/drdrwbdkp/image/upload/v1787494646/file_00000000f5b881f7ae73f9618ea5ae58_nqmlm8.png",
  photo: "https://res.cloudinary.com/drdrwbdkp/image/upload/v1787495010/file_00000000dad88210a5a0e6c071fcae65_eofdjw.png",
  title: "YUSUF TECH — Web Developer & Digital Marketing for Businesses in Nigeria",
  description: "YUSUF TECH designs and builds professional websites for cafés, laundries, law firms, real estate agencies, schools, and personal brands — fast, mobile-friendly, and fully deployed — plus SEO and digital advertising to help customers find you. Based in Nigeria, working with clients everywhere.",
  ogImage: "https://res.cloudinary.com/drdrwbdkp/image/upload/v1787495010/file_00000000dad88210a5a0e6c071fcae65_eofdjw.png",
  email: "yusuftech767@gmail.com",
  socials: [
    { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/447459223379" },
    { id: "telegram", label: "Telegram", url: "https://t.me/Hireyusuftech" },
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/yusuf-tech-undefined-2b3a02446" },
    { id: "mail", label: "Email", url: "mailto:yusuftech767@gmail.com" },
    { id: "github", label: "GitHub", url: "https://github.com/YusufKing-dev" },
    { id: "x", label: "X", url: "https://x.com/YusufKing_0x7" }
  ],
  projectTypes: ["Business website", "Portfolio", "Online store", "School or institution", "Real estate", "Restaurant or café", "Web3 / token project", "SEO optimization", "Digital advertising", "Other"],
  process: [
    ["Tell me about it", "Send a short brief through the form or WhatsApp: what you do, who it's for, and what you need."],
    ["Agree the plan", "I reply with a clear scope, a fixed quote, and a timeline before any work starts."],
    ["I build, you review", "You see the site as it takes shape and ask for changes until it's right."],
    ["Launch", "I deploy it on your domain, check it on phone and desktop, and hand it over."]
  ],
  packages: [
    { name: "Landing page", price: "", note: "One focused page to get you online fast.", items: ["Single scrolling page", "Mobile-first design", "Contact form or WhatsApp button", "Deployed on your domain"] },
    { name: "Business website", price: "", featured: true, note: "A complete site for a business or professional.", items: ["Multi-page site", "Services, gallery, and location sections", "Working contact or enquiry form", "Basic SEO and fast loading", "Deployed on your domain"] },
    { name: "Custom build", price: "", note: "For platforms, Web3 projects, and bots.", items: ["Node.js or React web apps", "Token sites and DApps", "Telegram bots and payment APIs", "Scoped and quoted per project"] }
  ],
  faqs: [
    ["How much does a website cost?", "It depends on the number of pages and features. Tell me what you need through the form and I'll reply with a fixed quote, so there are no surprises later."],
    ["How long does it take?", "Simple sites can be ready within about a day. Larger builds take longer, and I give you a timeline with the quote."],
    ["Who owns the website?", "You do. The site is built for you and delivered on your own domain."],
    ["Do you help with the domain and hosting?", "Yes. I can set up the domain and hosting for you, or deploy to ones you already have."],
    ["Will it work on phones?", "Yes. Every site is designed mobile-first and tested on phone and desktop before launch."],
    ["Do you work with clients outside Nigeria?", "Yes. I work with clients everywhere. Everything is done online, by WhatsApp, Telegram, or email."]
  ],
  stats: [["5.0", "Average rating"], ["50+", "Happy clients"], ["24h", "Average delivery"]],
  industries: ["Cafés & restaurants", "Laundry & service businesses", "Law firms", "Real estate", "Schools", "Personal portfolios"],
  about: [
    "I started building websites because I saw too many great ideas held back by a poor online presence. A strong product, business, or project deserves a website that inspires confidence from the first second.",
    "Today I work with startups, businesses, and personal brands to create modern, high-performance websites that look professional, communicate value clearly, and turn visitors into customers, users, or supporters."
  ],
  skills: [
    ["Technical", ["Frontend development", "Backend development", "Web3 / Blockchain", "Problem solving"]],
    ["Frameworks", ["React & Next.js", "Node.js & Express"]],
    ["Tools", ["Git / GitHub", "VS Code", "Chrome DevTools"]],
    ["Deployment", ["Vercel & Netlify", "GitHub Pages & Actions"]]
  ],
  why: [
    ["Fast communication", "You're never left wondering. I reply quickly and keep you updated through the build."],
    ["Attention to detail", "Every pixel, interaction, and line of code is intentional, so the result feels polished, not rushed."],
    ["Modern design standards", "Clean layouts, strong typography, and purposeful colour that set you apart from competitors."],
    ["Performance-focused", "Fast-loading, optimised code that scores high on Core Web Vitals."],
    ["Range across industries", "From cafés and law firms to schools and Web3 platforms, I fit the design to the brand, not a single template."]
  ],
  services: [
    ["Cafés, laundries & everyday businesses", "Menus, service lists, location maps, and contact forms that work on a phone."],
    ["Law firms & consultancies", "Credibility-first sites with clear practice areas and a consultation flow that keeps the call to action visible."],
    ["Real estate & listings", "Photo-forward listings, agent profiles, and inquiry forms that reach you."],
    ["Schools & institutions", "A distinct design identity for each school, not the same template every academic site shares."],
    ["Personal portfolios", "For consultants, creatives, and freelancers who need a site that reads as a credential."],
    ["Bots & Web3", "Telegram bots wired to payment APIs, token deployment, and NFT collections when the project calls for it."]
  ],
  marketing: {
    kicker: "Digital Marketing",
    title: "Get Found. Reach More Customers. Grow Your Business.",
    intro: [
      "Having a website is only the beginning. Your business also needs visibility and the right strategy to reach potential customers.",
      "At YusufTech, we help businesses improve their online visibility and reach their target audiences through strategic SEO optimization and digital advertising.",
      "Our goal is to help your business get discovered, attract relevant traffic and create more opportunities for growth."
    ],
    servicesTitle: "Our Digital Marketing Services",
    services: [
      { n: "01", name: "SEO Optimization", tag: "Make your business easier to discover online.", desc: "We optimize websites to improve their visibility on search engines, strengthen search performance and help potential customers find your products and services.", items: ["Website SEO optimization", "On-page SEO", "Keyword research and optimization", "Meta titles and descriptions optimization", "Website content optimization", "Technical SEO improvements", "Search engine visibility improvements"] },
      { n: "02", name: "Digital Advertising", tag: "Put your business in front of the right audience.", desc: "We help businesses reach potential customers through strategic digital advertising campaigns designed to increase brand awareness, drive relevant traffic and support business growth.", items: ["Digital advertising campaign setup", "Audience targeting", "Campaign planning and strategy", "Ad creative and messaging guidance", "Campaign performance monitoring", "Advertising performance optimization"] }
    ],
    whyTitle: "Why YusufTech?",
    why: ["Strategic, goal-oriented solutions", "Focus on relevant audiences", "Data-informed decision-making", "Solutions tailored to your business", "Commitment to continuous improvement"],
    processTitle: "Our Process",
    process: [
      ["Understand", "We learn about your business and marketing objectives."],
      ["Plan", "We develop an approach suited to your goals."],
      ["Execute", "We implement the SEO or advertising strategy."],
      ["Optimize", "We monitor performance and identify opportunities for improvement."]
    ],
    ctaTitle: "Ready to grow your online presence?",
    ctaText: ["Don't let your business get lost in the digital crowd.", "Let YusufTech help you improve your search visibility and reach more potential customers.", "Let's put your business in front of the right audience."],
    ctaButton: "Get started with YusufTech",
    ctaSite: "www.hireyusuftech.online",
    tagline: "YUSUFTECH — Your Trusted Tech Partner"
  },
  categories: ["Academic & Schools", "Cafés & Food", "Laundry & Garment Care", "Real Estate", "Professional Services"],
  projects: [
    X("Academic & Schools", "SB", "Nigeria", "Solid Bright Academy", "A live school website that presents the academy, its programmes and admissions clearly to parents.", "https://www.solidbrightacademy.com.ng/", "https://image.thum.io/get/width/700/crop/900/noanimate/https://www.solidbrightacademy.com.ng/"),
    P("Cafés & Food", "KK", "Yaba, Lagos", "Kúrú Kúrú Coffee House", "A specialty third-wave coffee roaster site across three Lagos branches.", "Cafekurukuru"),
    P("Cafés & Food", "NB", "Wuse 2, Abuja", "Naija Brew Café", "A high-energy café site built around live-band Fridays and street-food flavour.", "Cafenaija"),
    P("Cafés & Food", "CP", "Enugu", "Chai & Puff Lounge", "A three-generation traditional Nigerian tea lounge, built around nostalgia and heritage.", "Chai-Puff"),
    P("Laundry & Garment Care", "SW", "Surulere, Lagos", "SparkleWash Laundromat", "An on-demand pickup-and-deliver laundry site built to feel like an app.", "Sparklewash"),
    P("Laundry & Garment Care", "QP", "GRA, Port Harcourt", "QuickPress Dry Cleaners", "A premium garment-care site for a professional, courtroom-ready clientele.", "Quickpress"),
    P("Real Estate", "EC", "Lekki, Lagos", "Emerald Coast Realty", "Curated luxury waterfront listings with a location, type, and budget filter.", "Emeraldcoast"),
    P("Real Estate", "AP", "Jabi, Abuja", "Abuja Prime Properties", "Verified land and estate development, built to remove buyer fraud-anxiety.", "AbujaPrime"),
    P("Professional Services", "OU", "CBD, Abuja", "Okonkwo Ubah LP", "A commercial law firm site built to close credibility gaps fast, with real deal numbers.", "Okonkwolp")
  ]
};
