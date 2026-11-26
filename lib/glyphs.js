// Small stroke icons used on cards (inline SVG, inherits currentColor).
const s = (inner) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
const g = {
  cup: s('<path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M17 9h2a2 2 0 0 1 0 4h-2"/><path d="M8 3v2M12 3v2"/>'),
  scale: s('<path d="M12 3v18M6 21h12"/><path d="M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z"/>'),
  building: s('<path d="M4 21V5l8-3 8 3v16"/><path d="M9 21v-5h6v5M8 9h2M14 9h2M8 13h2M14 13h2"/>'),
  school: s('<path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v6"/>'),
  user: s('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  bot: s('<rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6"/>'),
  chat: s('<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"/>'),
  eye: s('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  layout: s('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>'),
  bolt: s('<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>'),
  globe: s('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
  search: s('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'),
  megaphone: s('<path d="M3 11v3a1 1 0 0 0 1 1h3l8 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M19 9a4 4 0 0 1 0 6"/>'),
  sun: s('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  moon: s('<path d="M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10z"/>'),
  phone: s('<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>'),
  arrow: s('<path d="M7 17L17 7M8 7h9v9"/>')
};
module.exports = (id) => g[id] || "";