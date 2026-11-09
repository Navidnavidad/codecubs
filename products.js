// CodeCubs Academy catalogue. Shared by the shop and the admin page.
const STORE = {
  name: "CodeCubs Academy",
  owner: "Mohamed Naveed Mohamed Rafi",
  role: "Founder",
  currency: "AUD",
  url: "https://navidnavidad.github.io/codecubs/",
  repo: "https://github.com/Navidnavidad/codecubs",
  location: "Brisbane, Australia"
};

const PRODUCTS = [
  { id: "B001", type: "Book", title: "My First Python Adventure", ages: "8-12", price: 24.95, stock: 40, color: "#3b82f6", accent: "#fde047", icon: "py",
    desc: "A friendly, full-colour guide where kids write real Python to help a robot explore a treasure island." },
  { id: "B002", type: "Book", title: "Scratch Space Quest", ages: "6-9", price: 19.95, stock: 55, color: "#8b5cf6", accent: "#f9a8d4", icon: "rocket",
    desc: "Drag-and-drop coding missions that teach loops, events and variables through a galaxy-wide adventure." },
  { id: "B003", type: "Book", title: "Build Your Own Website", ages: "10-14", price: 27.95, stock: 30, color: "#10b981", accent: "#fef08a", icon: "web",
    desc: "Learn HTML and CSS step by step and publish a real personal website by the last chapter." },
  { id: "B004", type: "Book", title: "Robots, Logic & Puzzles", ages: "7-11", price: 21.95, stock: 35, color: "#f97316", accent: "#bfdbfe", icon: "bot",
    desc: "Unplugged puzzles and activities that build computational thinking before kids touch a keyboard." },
  { id: "B005", type: "Book", title: "Game Makers Club", ages: "10-14", price: 29.95, stock: 25, color: "#ef4444", accent: "#fde68a", icon: "game",
    desc: "Make three arcade games in Python with Pygame Zero, with challenges at the end of every chapter." },
  { id: "T001", type: "Tutoring", title: "1:1 Online Lesson (45 min)", ages: "6-16", price: 49.00, stock: null, color: "#0ea5e9", accent: "#ffffff", icon: "video",
    desc: "A live one-on-one video lesson with a CodeCubs tutor, tailored to your child's level and interests." },
  { id: "T002", type: "Tutoring", title: "Starter Pack: 4 Lessons", ages: "6-16", price: 179.00, stock: null, color: "#14b8a6", accent: "#ffffff", icon: "pack",
    desc: "Four weekly 45-minute online lessons plus a printable progress certificate. Save $17." },
  { id: "T003", type: "Tutoring", title: "Holiday Coding Camp (5 days)", ages: "8-14", price: 249.00, stock: 12, color: "#6366f1", accent: "#ffffff", icon: "camp",
    desc: "Small-group online camp, one hour a day for five days. Kids finish with a game they built themselves." }
];

const ICONS = {
  py: '<text x="50" y="62" font-size="34" text-anchor="middle" font-family="monospace" font-weight="700">&gt;_</text>',
  rocket: '<path d="M50 18c12 10 16 26 12 42H38c-4-16 0-32 12-42z"/><circle cx="50" cy="38" r="6" fill="#fff"/><path d="M38 60l-8 12 12-4zM62 60l8 12-12-4z"/>',
  web: '<rect x="20" y="26" width="60" height="44" rx="6"/><rect x="20" y="26" width="60" height="10" rx="4" fill="#fff" opacity=".6"/><text x="50" y="62" font-size="16" text-anchor="middle" fill="#fff" font-family="monospace">&lt;/&gt;</text>',
  bot: '<rect x="28" y="32" width="44" height="36" rx="8"/><circle cx="40" cy="48" r="5" fill="#fff"/><circle cx="60" cy="48" r="5" fill="#fff"/><rect x="47" y="20" width="6" height="12"/><circle cx="50" cy="18" r="5"/>',
  game: '<rect x="20" y="36" width="60" height="30" rx="14"/><rect x="32" y="46" width="12" height="4" fill="#fff"/><rect x="36" y="42" width="4" height="12" fill="#fff"/><circle cx="62" cy="46" r="3" fill="#fff"/><circle cx="68" cy="54" r="3" fill="#fff"/>',
  video: '<rect x="18" y="32" width="46" height="36" rx="6"/><path d="M66 44l16-10v32l-16-10z"/>',
  pack: '<rect x="22" y="30" width="56" height="40" rx="6"/><path d="M22 42h56" stroke="#14b8a6" stroke-width="3"/><text x="50" y="62" font-size="16" text-anchor="middle" fill="#14b8a6" font-family="sans-serif" font-weight="700">x4</text>',
  camp: '<path d="M50 20l30 50H20z"/><path d="M50 44l10 26H40z" fill="#6366f1"/>'
};

function coverSVG(p) {
  return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="100" height="100" fill="${p.color}"/>
    <circle cx="82" cy="18" r="22" fill="${p.accent}" opacity=".35"/>
    <circle cx="12" cy="90" r="18" fill="${p.accent}" opacity=".3"/>
    <g fill="${p.accent === '#ffffff' ? '#ffffff' : p.accent}">${ICONS[p.icon] || ""}</g>
  </svg>`;
}

function money(n) { return "$" + n.toFixed(2); }
