/* ==========================================================
   WAYPOINT — daily lessons
   Static single-page app. All progress is stored on-device
   (localStorage). Content lives in /content/*.js.
   ========================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     Icons (24px line icons, stroke = currentColor)
     --------------------------------------------------------- */
  const sv = (d, extra = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const I = {
    logo: sv('<path d="M12 2.5 21.5 12 12 21.5 2.5 12Z"/><path d="M8 13.5 12 9l4 4.5"/>'),
    chevR: sv('<path d="m9 6 6 6-6 6"/>'),
    back: sv('<path d="M15 6 9 12l6 6"/>'),
    close: sv('<path d="M6 6l12 12M18 6 6 18"/>'),
    check: sv('<path d="m5 12.5 4.5 4.5L19 7.5"/>', 'stroke-width="2.4"'),
    lock: sv('<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    dot: sv('<circle cx="12" cy="12" r="4"/>'),
    ring: sv('<circle cx="12" cy="12" r="7"/>'),
    okc: sv('<circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5-6"/>'),
    streak: sv('<path d="M6 14l6-6 6 6"/><path d="M6 19l6-6 6 6"/><path d="M6 9l6-6 6 6" opacity=".45"/>'),
    bolt: sv('<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>'),
    warn: sv('<path d="M12 3 2.5 20h19Z"/><path d="M12 10v4.5M12 17.5v.01"/>'),
    cross: sv('<circle cx="12" cy="12" r="8"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>'),
    flag: sv('<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>'),
    // tabs
    today: sv('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/>'),
    review: sv('<rect x="3" y="7" width="14" height="13" rx="1.5"/><path d="M7 4h12.5A1.5 1.5 0 0 1 21 5.5V17"/>'),
    library: sv('<path d="M4 4.5h6a2 2 0 0 1 2 2V20a1.5 1.5 0 0 0-1.5-1.5H4Z"/><path d="M20 4.5h-6a2 2 0 0 0-2 2V20a1.5 1.5 0 0 1 1.5-1.5H20Z"/>'),
    logbook: sv('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    profile: sv('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'),
    // drill modes
    flash: sv('<rect x="3" y="6" width="13" height="14" rx="1.5"/><path d="M8 3h11.5A1.5 1.5 0 0 1 21 4.5V16"/><path d="M7 13h5"/>'),
    mcq: sv('<circle cx="5" cy="6" r="1.6"/><circle cx="5" cy="12" r="1.6"/><circle cx="5" cy="18" r="1.6"/><path d="M10 6h10M10 12h10M10 18h10"/>'),
    tf: sv('<path d="m3.5 12.5 3 3 5-6"/><path d="m14 8 7 7M21 8l-7 7"/>'),
    match: sv('<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6.5 17 17.5M7 17.5 17 6.5"/>'),
    timer: sv('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9.5 2.5h5"/>'),
    // feature list
    brief: sv('<path d="M6 3h9l4 4v14H6Z"/><path d="M15 3v4h4M9 12h7M9 16h5"/>'),
    medal: sv('<path d="m8 3 4 6 4-6"/><circle cx="12" cy="15" r="6"/><path d="m12 12 1 2h2l-1.5 1.3.5 2.2-2-1.2-2 1.2.5-2.2L9 14h2Z"/>'),
    // settings
    sun: sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    plus: sv('<path d="M12 5v14M5 12h14"/>'),
    swap: sv('<path d="M4 8h13l-3-3M20 16H7l3 3"/>'),
    share: sv('<path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M5 12v7.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V12"/>'),
    chat: sv('<path d="M4 5h16v11H9l-5 4Z"/><path d="M8 9.5h8M8 12.5h5"/>'),
    bulb: sv('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>'),
    book: sv('<path d="M4 19.5V5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2Z"/><path d="M20 18v3H6a2 2 0 0 1-2-1.5"/>'),
    // audio
    speaker: sv('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4Z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),
    play: sv('<path d="M8 5v14l11-7Z" fill="currentColor"/>'),
    pause: sv('<path d="M8 5v14M16 5v14" stroke-width="3"/>'),
    snow: sv('<path d="M12 2.5v19M3.8 7.2l16.4 9.6M3.8 16.8l16.4-9.6"/><path d="m9.5 4 2.5 2 2.5-2M9.5 20l2.5-2 2.5 2"/>'),
  };
  const TOPIC_ICON = {
    ai: sv('<rect x="6" y="6" width="12" height="12" rx="1.5"/><path d="M9.5 9.5h5v5h-5z"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/>'),
    eng: sv('<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2.5 12h3M18.5 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/><circle cx="12" cy="12" r="6.5"/>'),
    cfa: sv('<path d="M3 20h18"/><path d="M4 16l5-5 4 3 7-8"/><path d="M15 6h5v5"/>'),
    aero: sv('<path d="M21 15.5 13.5 12V5.5a1.5 1.5 0 0 0-3 0V12L3 15.5v2l7.5-2.2V19l-2 1.5V22l3.5-1 3.5 1v-1.5l-2-1.5v-3.7l7.5 2.2Z"/>'),
    cyber: sv('<path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>'),
    lead: sv('<circle cx="12" cy="12" r="9.5"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2"/>'),
    ddia: sv('<ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"/><path d="M4.5 5.5v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6"/><path d="M4.5 11.5v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6"/>'),
    bank: sv('<path d="M3 9.5 12 4l9 5.5"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18"/>'),
    econ: sv('<path d="M4 4v16h16"/><path d="M7 7c3 0 6 3 7 6s3 5 5 5"/><path d="M7 17c3 0 5-2 7-5s4-5 6-5"/>'),
    risk: sv('<path d="M3 19h18"/><path d="M4 19c2.5 0 3.5-12 8-12s5.5 12 8 12"/><path d="M17 15v4" stroke-dasharray="1.5 2"/>'),
    invest: sv('<path d="M4 20V14M9.5 20V10M15 20V12M20.5 20V5"/><path d="m3.5 11 6-5 5 3 6-6"/>'),
    strat: sv('<path d="M12 3v5M12 8l-6 5M12 8l6 5"/><rect x="9.5" y="2" width="5" height="3" rx=".5"/><rect x="3" y="13" width="6" height="4" rx=".5"/><rect x="15" y="13" width="6" height="4" rx=".5"/><path d="M6 17v3M18 17v3"/>'),
    politics: sv('<path d="M4 20h16M6 20v-8M10 20v-8M14 20v-8M18 20v-8M3 12h18M12 3 4 8h16Z"/>'),
    reg: sv('<path d="M7 3h10v18H7z"/><path d="M10 7h4M10 11h4M10 15h2"/><path d="M4 7v14h3"/>'),
    hist: sv('<path d="M5 21V8l7-5 7 5v13"/><path d="M3 21h18M9 21v-6h6v6M9 10h6"/>'),
    geo: sv('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z"/>'),
    philo: sv('<path d="M5 20h14M7 20V9M12 20V9M17 20V9M4 9h16L12 4Z"/>'),
    tor: sv('<path d="M12 2v4M11 6h2l.5 6h-3Z"/><ellipse cx="12" cy="13" rx="3" ry="1.3"/><path d="M11.2 14.3 10 21h4l-1.2-6.7M3 21h18"/>'),
    carp: sv('<path d="m14 4 6 6-3 3-6-6Z"/><path d="m11 7-7.5 7.5a2 2 0 0 0 0 2.8l3.2 3.2a2 2 0 0 0 2.8 0L17 13"/>'),
    hvac: sv('<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-6 3-6s2 3-1 6M14 12c4 0 6 1 6 3s-3 2-6-1M12 14c0 4-1 6-3 6s-2-3 1-6M10 12c-4 0-6-1-6-3s3-2 6 1"/>'),
    tennis: sv('<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5c3.5 3 3.5 10 0 13M18.5 5.5c-3.5 3-3.5 10 0 13"/>'),
    squash: sv('<ellipse cx="9" cy="8.5" rx="5" ry="6" transform="rotate(-35 9 8.5)"/><path d="m12.5 13 7 7"/><circle cx="19" cy="5" r="1.6"/>'),
    gym: sv('<path d="M6 7v10M18 7v10M3 9.5v5M21 9.5v5M6 12h12"/>'),
  };
  const FACULTIES = [
    { id: "tech", name: "Technology", topics: ["ai", "ddia", "cyber", "eng"] },
    { id: "money", name: "Money & Markets", topics: ["cfa", "bank", "econ", "risk", "invest"] },
    { id: "society", name: "Society & Ideas", topics: ["politics", "reg", "hist", "geo", "philo", "tor"] },
    { id: "lead", name: "Leadership & Strategy", topics: ["lead", "strat"] },
    { id: "trades", name: "Trades & Home", topics: ["carp", "hvac"] },
    { id: "flight", name: "Flight & Space", topics: ["aero"] },
    { id: "sport", name: "Sport & Body", topics: ["tennis", "squash", "gym"] },
  ];
  const topicIcon = (id) => TOPIC_ICON[id] || I.brief;
  // Landscape photo per topic (files in /img).
  const TOPIC_IMG = {
    ai: "waterfall-ring", ddia: "topo-map", cyber: "storm-rocks", eng: "canyon-machine",
    cfa: "savanna", bank: "rock-tower", econ: "desert-path", risk: "topo-map", invest: "blue-shore",
    politics: "forest-tower", reg: "snow-ridge", hist: "forest-ruins", geo: "alpine-stream", philo: "blue-shore",
    tor: "forest-tower", lead: "rock-tower", strat: "savanna", carp: "forest-ruins", hvac: "snow-ridge",
    aero: "waterfall-ring", tennis: "desert-path", squash: "storm-rocks", gym: "canyon-machine",
  };
  const topicImg = (id) => `img/${TOPIC_IMG[id] || "alpine-stream"}.webp`;

  const INSIGNIA = {
    chevron: sv('<path d="M4 11l8-6 8 6"/><path d="M4 17l8-6 8 6"/>', 'stroke-width="2"'),
    star: sv('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>', 'stroke-width="1.8"'),
    wings: sv('<circle cx="12" cy="12" r="2.5"/><path d="M9.5 12H2c1 2.5 3.5 4 7.5 4M14.5 12H22c-1 2.5-3.5 4-7.5 4M3 9.5h6.5M14.5 9.5H21"/>', 'stroke-width="1.8"'),
    delta: sv('<path d="M12 3 21 20H3Z"/><path d="M12 10v6"/>', 'stroke-width="1.8"'),
    compass: sv('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/>', 'stroke-width="1.8"'),
    bolt: sv('<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>', 'stroke-width="1.8"'),
  };

  /* ---------------------------------------------------------
     Content index
     --------------------------------------------------------- */
  const TOPICS = WP.topics;
  const TOPIC_BY_ID = {};
  const LESSON_BY_ID = {};
  const EXTRAS = WP.extras || {};
  const FIGS = WP.figs || {};
  const words = (v) => (Array.isArray(v) ? v.join(" ") : typeof v === "object" && v ? Object.values(v).map(words).join(" ") : String(v || "")).split(/\s+/).length;
  TOPICS.forEach((t) => {
    TOPIC_BY_ID[t.id] = t;
    t.lessons.forEach((l, i) => {
      if (EXTRAS[l.id]) Object.assign(l, EXTRAS[l.id]);
      (FIGS[l.id] || []).forEach((m) => addFigures(l, m));
      l.topic = t.id;
      l.index = i;
      // Reading time from the teaching text (~180 words/min on a phone).
      const w = words([l.hook, l.bluf, (l.story || []).filter((x) => typeof x === "string"), l.points, l.example, l.pitfall, l.terms, l.talk]);
      l.minutes = Math.max(3, Math.round(w / 180));
      LESSON_BY_ID[l.id] = l;
    });
  });
  // Place figures from WP.addFigures(): at the end of a named section, after a
  // paragraph, or at the end of the story. Extra quiz questions are appended.
  function addFigures(l, m) {
    const story = l.story = (l.story || []).slice();
    (m.story || []).forEach((e) => {
      const isStr = (x) => typeof x === "string";
      let at = story.length;
      if (e.section) {
        const h = story.findIndex((x) => isStr(x) && x === "## " + e.section);
        if (h < 0) console.warn(`Figure for ${l.id}: no section "${e.section}"`);
        else { at = h + 1; while (at < story.length && !(isStr(story[at]) && story[at].startsWith("## "))) at++; }
      } else if (e.after) {
        const k = story.findIndex((x) => isStr(x) && x.startsWith(e.after));
        if (k < 0) console.warn(`Figure for ${l.id}: no paragraph starting "${e.after}"`);
        else at = k + 1;
      }
      story.splice(at, 0, e.fig);
    });
    if (m.mcq) l.mcq = (l.mcq || []).concat(m.mcq);
    if (m.tf) l.tf = (l.tf || []).concat(m.tf);
  }
  // Group topics by faculty; any topic not listed lands in "More".
  const listed = new Set(FACULTIES.flatMap((f) => f.topics));
  const extraTopics = TOPICS.filter((t) => !listed.has(t.id)).map((t) => t.id);
  if (extraTopics.length) FACULTIES.push({ id: "more", name: "More", topics: extraTopics });
  FACULTIES.forEach((f) => { f.topics = f.topics.filter((id) => TOPIC_BY_ID[id]); });
  const TOTAL_LESSONS = Object.keys(LESSON_BY_ID).length;

  /* ---------------------------------------------------------
     Game rules
     --------------------------------------------------------- */
  const RANKS = [
    { name: "Cadet", xp: 0 },
    { name: "Pilot Officer", xp: 150 },
    { name: "Flying Officer", xp: 400 },
    { name: "Flight Lieutenant", xp: 800 },
    { name: "Squadron Leader", xp: 1400 },
    { name: "Wing Commander", xp: 2200 },
    { name: "Group Captain", xp: 3300 },
    { name: "Air Commodore", xp: 4800 },
    { name: "Air Marshal", xp: 7000 },
  ];
  const XP = {
    brief: 20,
    flash: 10,
    mcqPer: 5, mcqBase: 10,
    tfPer: 3, tfBase: 5,
    match: 20,
    perfect: 15,
    repeat: 5,
    day: 50,
    reviewPer: 2,
    blitzPer: 3,
    recall: 10,
    comboPer: 2,
  };
  const FREEZE_MAX = 2;
  const DRILLS = {
    flash: { name: "Flashcards", desc: "Flip cards to lock in the key terms.", icon: I.flash },
    mcq: { name: "Multiple choice", desc: "Pick the right answer from four.", icon: I.mcq },
    tf: { name: "True or false", desc: "Quick-fire checks on the facts.", icon: I.tf },
    match: { name: "Match-up", desc: "Pair each term with its meaning.", icon: I.match },
  };
  const LEITNER_DAYS = [0, 1, 2, 4, 8, 16, 32];

  const PATCHES = [
    { id: "first", name: "First Sortie", desc: "Complete your first lesson", test: (p) => p.stats.lessons >= 1 },
    { id: "mission", name: "Mission Complete", desc: "Finish your daily lesson", test: (p) => Object.values(p.days).some((d) => d.done) },
    { id: "s3", name: "Three-Day Run", desc: "Reach a 3-day streak", test: (p) => p.streak.best >= 3 },
    { id: "s7", name: "Full Week", desc: "Reach a 7-day streak", test: (p) => p.streak.best >= 7 },
    { id: "s30", name: "Iron Discipline", desc: "Reach a 30-day streak", test: (p) => p.streak.best >= 30 },
    { id: "perfect", name: "Bullseye", desc: "Score 100% on a quiz", test: (p) => p.stats.perfect >= 1 },
    { id: "ace", name: "Ace", desc: "Score 100% ten times", test: (p) => p.stats.perfect >= 10 },
    { id: "allmodes", name: "Full Spectrum", desc: "Clear all four drills on one lesson", test: (p) => Object.values(p.lessons).some((l) => Object.keys(l.modes || {}).length >= 4) },
    { id: "poly", name: "Polymath", desc: "Study four different topics", test: (p) => new Set(Object.keys(p.lessons).filter((id) => p.lessons[id].done).map((id) => LESSON_BY_ID[id] && LESSON_BY_ID[id].topic)).size >= 4 },
    { id: "century", name: "Centurion", desc: "Answer 100 questions correctly", test: (p) => p.stats.correct >= 100 },
    { id: "review", name: "Sharp Recall", desc: "Review 50 flashcards", test: (p) => p.stats.reviews >= 50 },
    { id: "blitz", name: "Afterburner", desc: "Score 10+ in a Blitz", test: (p) => (p.stats.blitzBest || 0) >= 10 },
    { id: "topic", name: "Specialist", desc: "Finish every lesson in a topic", test: (p) => TOPICS.some((t) => t.lessons.every((l) => p.lessons[l.id] && p.lessons[l.id].done)) },
    { id: "dawn", name: "Dawn Patrol", desc: "Finish a lesson before 7am", test: (p) => !!p.flags.dawn },
    { id: "night", name: "Night Flyer", desc: "Finish a lesson after 10pm", test: (p) => !!p.flags.night },
    { id: "double", name: "Doubled", desc: "Learn on 70 days — 1.01^70 ≈ 2×", test: (p) => learnDays(p) >= 70 },
  ];

  /* ---------------------------------------------------------
     Utilities
     --------------------------------------------------------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pad = (n) => String(n).padStart(2, "0");
  const dateKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const addDays = (key, n) => {
    const [y, m, d] = key.split("-").map(Number);
    return dateKey(new Date(y, m - 1, d + n));
  };
  const today = () => dateKey();
  const fmtDate = (key) => {
    const [y, m, d] = key.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(undefined, { weekday: "short", day: "2-digit", month: "short" }).toUpperCase();
  };
  const daysBetween = (a, b) => {
    const [y1, m1, d1] = a.split("-").map(Number), [y2, m2, d2] = b.split("-").map(Number);
    return Math.round((new Date(y2, m2 - 1, d2) - new Date(y1, m1 - 1, d1)) / 864e5);
  };
  const uid = () => Math.random().toString(36).slice(2, 10);
  const vibrate = (ms) => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) { /* unsupported */ } };

  /* ---------------------------------------------------------
     Storage
     --------------------------------------------------------- */
  const KEY = "waypoint.v1";
  let db = { profiles: {}, active: null };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) db = Object.assign(db, JSON.parse(raw));
  } catch (e) { /* storage unavailable: run in memory */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* ignore */ }
  }

  function newProfile(callsign) {
    return {
      id: uid(),
      callsign: callsign,
      insignia: "chevron",
      interests: [],
      drill: "mcq",
      theme: "dark",
      created: today(),
      xp: 0,
      streak: { count: 0, best: 0, last: null },
      days: {},
      lessons: {},
      cards: {},
      stats: { lessons: 0, answered: 0, correct: 0, perfect: 0, reviews: 0, blitzBest: 0 },
      badges: {},
      flags: {},
      notes: {},
      log: [],
      activity: {},
      actV: 1,
      audio: { rate: 1, voice: "", auto: false, narrate: false },
    };
  }
  function normalise(p) {
    const base = newProfile(p.callsign || "PILOT");
    const needsBackfill = !p.actV;
    for (const k of Object.keys(base)) if (p[k] === undefined) p[k] = base[k];
    p.stats = Object.assign(base.stats, p.stats);
    p.audio = Object.assign(base.audio, p.audio);
    if (p.streak.freezes == null) p.streak.freezes = 0;
    // One-off: rebuild the activity grid from the XP log and finished days.
    if (needsBackfill) {
      p.activity = {};
      p.log.forEach((e) => { p.activity[e.d] = (p.activity[e.d] || 0) + e.xp; });
      Object.entries(p.days).forEach(([k, d]) => { if (d.done) p.activity[k] = Math.max(p.activity[k] || 0, XP.day); });
      p.actV = 1;
    }
    return p;
  }
  Object.values(db.profiles).forEach(normalise);

  const P = () => db.profiles[db.active] || null;

  /* ---------------------------------------------------------
     Progress helpers
     --------------------------------------------------------- */
  function rankFor(xp) {
    let i = 0;
    while (i + 1 < RANKS.length && xp >= RANKS[i + 1].xp) i++;
    const cur = RANKS[i], next = RANKS[i + 1];
    const pct = next ? (xp - cur.xp) / (next.xp - cur.xp) : 1;
    return { i, cur, next, pct };
  }
  // Days missed since the last finished day (0 = streak intact).
  function missedDays(p) {
    if (!p.streak.last) return Infinity;
    return Math.max(0, daysBetween(p.streak.last, today()) - 1);
  }
  // A streak survives missed days while there are enough freezes to cover them.
  function streakNow(p) {
    const m = missedDays(p);
    return m <= (p.streak.freezes || 0) ? p.streak.count : 0;
  }
  // "1% better every day": every finished day compounds.
  function learnDays(p) { return Object.values(p.days).filter((d) => d.done).length; }
  function compound(n) { const x = Math.pow(1.01, n); return x < 10 ? x.toFixed(2) : x.toFixed(1); }
  function lessonRec(p, id) {
    if (!p.lessons[id]) p.lessons[id] = { brief: false, modes: {}, done: false, doneOn: null };
    return p.lessons[id];
  }
  function pickLesson(p, topicId, exclude) {
    const t = TOPIC_BY_ID[topicId];
    const fresh = t.lessons.find((l) => !(p.lessons[l.id] && p.lessons[l.id].done) && l.id !== exclude);
    if (fresh) return fresh.id;
    // Everything done: re-fly the lesson completed longest ago.
    const sorted = t.lessons.slice().sort((a, b) => (p.lessons[a.id].doneOn || "").localeCompare(p.lessons[b.id].doneOn || ""));
    return sorted[0].id;
  }
  function todayRec(p) { return p.days[today()] || null; }
  // A day holds two lesson slots. Older saves keyed lessons by topic.
  // A day offers two preselected lessons; the user completes one of them.
  // Older saves stored two required "slots" — still understood for history.
  function slots(d) {
    if (!d) return [];
    if (d.options) return d.choice && LESSON_BY_ID[d.choice] ? [d.choice] : [];
    if (!d.slots) d.slots = (d.topics || []).map((t) => d.lessons[t]);
    return d.slots.filter((id) => LESSON_BY_ID[id]);
  }
  function isTodayLesson(p, id) {
    const d = todayRec(p);
    if (!d) return false;
    if (d.options && !d.choice) return d.options.includes(id);
    return slots(d).includes(id);
  }
  function canOpen(p, id) {
    // The whole library is open; the daily lesson sets the pace.
    return !!LESSON_BY_ID[id];
  }
  function started(p, id) {
    const r = p.lessons[id];
    return !!r && (r.brief || Object.keys(r.modes).length > 0);
  }
  // Two lessons from different interests, favouring topics not studied lately.
  function pickOptions(p, avoidTopics = []) {
    const topics = suggestedTopics(p, 99);
    const out = [];
    const add = (tid) => {
      if (out.length >= 2 || out.some((id) => LESSON_BY_ID[id].topic === tid)) return;
      const lid = pickLesson(p, tid);
      if (lid) out.push(lid);
    };
    topics.filter((t) => !avoidTopics.includes(t)).forEach(add);
    topics.forEach(add);
    return out;
  }
  function ensureToday(p) {
    let d = p.days[today()];
    if (!d) {
      d = p.days[today()] = { options: pickOptions(p), choice: null, done: false };
      save();
    } else if (!d.options) {
      const old = slots(d);
      d.options = old.slice(0, 2);
      d.choice = old.find((id) => started(p, id)) || null;
      delete d.slots;
      save();
    }
    return d;
  }
  function chooseToday(p, id) {
    const d = ensureToday(p);
    if (!d.done && !d.choice && d.options.includes(id)) { d.choice = id; save(); }
  }
  function suggestedTopics(p, n = 2) {
    // Prefer interests studied least recently; break ties randomly.
    const last = {};
    Object.entries(p.days).forEach(([k, d]) => slots(d).forEach((id) => { const t = LESSON_BY_ID[id].topic; if (!last[t] || k > last[t]) last[t] = k; }));
    const pool = (p.interests.length >= 2 ? p.interests : TOPICS.map((t) => t.id)).filter((id) => TOPIC_BY_ID[id]);
    return shuffle(pool).sort((a, b) => (last[a] || "").localeCompare(last[b] || "")).slice(0, n);
  }
  function dueCards(p) {
    const t = today();
    return Object.entries(p.cards).filter(([, c]) => c.due <= t).map(([k]) => k);
  }
  function cardData(key) {
    const [lid, idx] = key.split("#");
    const l = LESSON_BY_ID[lid];
    if (!l || !l.terms[+idx]) return null;
    return { lesson: l, term: l.terms[+idx][0], def: l.terms[+idx][1] };
  }

  /* ---------------------------------------------------------
     XP, completion, streaks, patches
     --------------------------------------------------------- */
  function award(p, amount, reason) {
    if (amount <= 0) return;
    const before = rankFor(p.xp).i;
    p.xp += amount;
    p.activity[today()] = (p.activity[today()] || 0) + amount;
    p.log.unshift({ d: today(), t: reason, xp: amount });
    p.log = p.log.slice(0, 60);
    toast(`<b>+${amount} XP</b> ${esc(reason)}`, "xp");
    const after = rankFor(p.xp);
    if (after.i > before) {
      queueModal({
        icon: rankBadge(after.i),
        label: "Promotion",
        title: after.cur.name,
        text: "You've earned a new rank. Keep flying daily to climb the ladder.",
      });
    }
  }
  function checkPatches(p) {
    PATCHES.forEach((b) => {
      if (!p.badges[b.id] && b.test(p)) {
        p.badges[b.id] = today();
        queueModal({ icon: patchIcon(b.id, true), label: "Patch earned", title: b.name, text: b.desc + "." });
      }
    });
  }
  function completeLesson(p, id) {
    const rec = lessonRec(p, id);
    if (rec.done) return;
    rec.done = true;
    rec.doneOn = today();
    p.stats.lessons++;
    const h = new Date().getHours();
    if (h < 7) p.flags.dawn = true;
    if (h >= 22) p.flags.night = true;
    // Add the lesson's terms to the spaced-review deck.
    LESSON_BY_ID[id].terms.forEach((_, i) => {
      const k = `${id}#${i}`;
      if (!p.cards[k]) p.cards[k] = { box: 1, due: addDays(today(), 1) };
    });
    // Day complete? Finishing either of today's options counts.
    const d = todayRec(p);
    if (d && d.options && !d.choice && d.options.includes(id)) d.choice = id;
    const ds = slots(d);
    if (d && !d.done && ds.length && ds.every((lid) => p.lessons[lid] && p.lessons[lid].done)) {
      d.done = true;
      const t = today();
      const missed = missedDays(p);
      let froze = 0;
      if (p.streak.last === t) { /* already counted */ }
      else if (missed === 0) p.streak.count += 1;
      else if (missed <= p.streak.freezes) {
        // Spend freezes to bridge the gap; mark those days on the grid.
        froze = missed;
        p.streak.freezes -= missed;
        for (let k = 1; k <= missed; k++) {
          const key = addDays(t, -k);
          if (!p.days[key]) p.days[key] = { frozen: true };
          else p.days[key].frozen = true;
        }
        p.streak.count += 1;
      } else p.streak.count = 1;
      p.streak.last = t;
      p.streak.best = Math.max(p.streak.best, p.streak.count);
      const bonus = Math.min(p.streak.count * 5, 50);
      award(p, XP.day + bonus, `Daily lesson complete · ${p.streak.count}-day streak`);
      if (froze) toast(`Streak freeze used — your ${p.streak.count}-day streak is safe`);
      // Every 7 days in a row earns a freeze (hold up to two).
      if (p.streak.count % 7 === 0 && p.streak.freezes < FREEZE_MAX) {
        p.streak.freezes++;
        toast("Earned a streak freeze");
      }
      const n = learnDays(p);
      queueModal({
        icon: `<span class="m-big">1.01<sup>${n}</sup></span>`,
        label: "Day complete",
        title: `${p.streak.count}-day streak`,
        text: `${n} day${n === 1 ? "" : "s"} of learning: 1.01^${n} = ${compound(n)}× where you started. Small steps, compounding.`,
      });
    }
  }
  function recordDrill(p, lessonId, mode, correct, total) {
    const rec = lessonRec(p, lessonId);
    const first = !rec.modes[mode];
    const prev = rec.modes[mode] || { best: 0 };
    rec.modes[mode] = { best: Math.max(prev.best, total ? correct / total : 1), last: correct + "/" + total, on: today() };
    if (mode !== "flash") {
      p.stats.answered += total;
      p.stats.correct += correct;
    }
    const perfect = total > 0 && correct === total;
    if (perfect && mode !== "flash") p.stats.perfect++;
    let xp = 0;
    if (first) {
      if (mode === "flash") xp = XP.flash;
      if (mode === "mcq") xp = XP.mcqBase + XP.mcqPer * correct;
      if (mode === "tf") xp = XP.tfBase + XP.tfPer * correct;
      if (mode === "match") xp = XP.match;
      if (perfect && mode !== "flash") xp += XP.perfect;
    } else {
      xp = XP.repeat;
    }
    award(p, xp, `${DRILLS[mode].name} · ${LESSON_BY_ID[lessonId].title}`);
    completeLesson(p, lessonId);
    checkPatches(p);
    save();
    return xp;
  }

  /* ---------------------------------------------------------
     Toasts & modals
     --------------------------------------------------------- */
  function toast(html, cls = "") {
    const el = document.createElement("div");
    el.className = "toast " + cls;
    el.innerHTML = (cls === "xp" ? I.bolt : I.okc) + `<span>${html}</span>`;
    const box = $("#toasts");
    box.appendChild(el);
    while (box.children.length > 2) box.firstChild.remove();
    setTimeout(() => el.remove(), 2200);
  }
  const modalQueue = [];
  function queueModal(m) {
    modalQueue.push(m);
    if (modalQueue.length === 1) setTimeout(showModal, 350);
  }
  function showModal() {
    const m = modalQueue[0];
    if (!m) return;
    const root = $("#modal-root");
    root.innerHTML = `
      <div class="modal-back" role="dialog" aria-modal="true" aria-labelledby="m-title">
        <div class="panel brackets modal">
          <div class="m-ico">${m.icon}</div>
          <div class="label accent">${esc(m.label)}</div>
          <h2 id="m-title">${esc(m.title)}</h2>
          <p>${esc(m.text)}</p>
          <button class="btn primary block" id="m-ok">Continue</button>
        </div>
      </div>`;
    vibrate([20, 40, 20]);
    $("#m-ok").focus();
    $("#m-ok").onclick = () => {
      root.innerHTML = "";
      modalQueue.shift();
      if (modalQueue.length) setTimeout(showModal, 150);
    };
  }

  /* ---------------------------------------------------------
     Audio: read-aloud with the device's built-in voices.
     Text always stays on screen; audio is an extra way in.
     Speech is chunked into sentences (long utterances get cut off in
     some browsers) and a token guards against stale callbacks.
     --------------------------------------------------------- */
  const Speech = (() => {
    const ok = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    const synth = ok ? window.speechSynthesis : null;
    let token = 0;
    if (ok && synth.onvoiceschanged !== undefined) synth.onvoiceschanged = () => {};
    function voices() {
      if (!ok) return [];
      const lang = (navigator.language || "en").slice(0, 2).toLowerCase();
      const all = synth.getVoices();
      const mine = all.filter((v) => (v.lang || "").toLowerCase().startsWith(lang));
      return mine.length ? mine : all.filter((v) => /^en/i.test(v.lang || ""));
    }
    function voice() {
      const p = P();
      const vs = voices();
      if (p && p.audio.voice) { const v = vs.find((x) => x.voiceURI === p.audio.voice); if (v) return v; }
      return vs.find((v) => /natural|premium|enhanced|neural/i.test(v.name))
        || vs.find((v) => /google|samantha|daniel|karen|serena|moira|ava|allison/i.test(v.name))
        || vs.find((v) => v.default) || vs[0] || null;
    }
    const sentences = (text) => (String(text).replace(/\s+/g, " ").match(/[^.!?…]+[.!?…]+["'”’)]*\s*|[^.!?…]+$/g) || [text]).map((x) => x.trim()).filter(Boolean);
    // Speak text (all sentences), then call done. Returns nothing; stop() cancels.
    function say(text, done) {
      if (!ok || !text) { if (done) done(); return; }
      const my = ++token;
      synth.cancel();
      const parts = sentences(text);
      let i = 0;
      const next = () => {
        if (my !== token) return;
        if (i >= parts.length) { if (done) done(); return; }
        const u = new SpeechSynthesisUtterance(parts[i++]);
        const v = voice();
        if (v) { u.voice = v; u.lang = v.lang; }
        u.rate = (P() && P().audio.rate) || 1;
        u.onend = next;
        u.onerror = (e) => { if (e.error !== "interrupted" && e.error !== "canceled") next(); };
        synth.speak(u);
      };
      // Some engines drop a speak() issued straight after cancel().
      setTimeout(next, 60);
    }
    function stop() { token++; if (ok) synth.cancel(); }
    return { ok, say, stop, voices };
  })();
  WPV.speak = (text, done) => Speech.say(text, done);
  WPV.stopSpeech = () => { Reader.stop(); Speech.stop(); };

  // Lesson reader: walks every [data-say] block on the page in order,
  // highlighting the one being read. Scenes play with narration in place.
  const Reader = (() => {
    let items = [], idx = 0, playing = false, bar = null;
    const textOf = (el) => el.dataset.say || el.textContent;
    function mark() {
      items.forEach((el, i) => el.classList.toggle("speaking", playing && i === idx));
      const el = items[idx];
      if (playing && el) {
        const r = el.getBoundingClientRect();
        if (r.top < 70 || r.bottom > innerHeight - 150) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (bar) {
        bar.querySelector("#rd-play").innerHTML = playing ? I.pause : I.play;
        bar.querySelector("#rd-play").setAttribute("aria-label", playing ? "Pause" : "Play");
        bar.querySelector("#rd-pos").textContent = items.length ? `${Math.min(idx + 1, items.length)} / ${items.length}` : "";
        bar.querySelector("#rd-rate").textContent = ((P() && P().audio.rate) || 1) + "×";
      }
    }
    function readCurrent() {
      const el = items[idx];
      if (!el) { stop(); idx = 0; mark(); return; }
      mark();
      const go = () => { if (playing) { idx++; readCurrent(); } };
      if (el.classList.contains("scene") && el._play) { el._play(go); return; }
      Speech.say(textOf(el), go);
    }
    function play(from) {
      if (from != null) idx = from;
      WPV.stopAll(); // may stop us via a playing scene, so set state after
      playing = true;
      readCurrent();
    }
    function pause() { playing = false; WPV.stopAll(); Speech.stop(); mark(); }
    function stop() { playing = false; Speech.stop(); items.forEach((el) => el.classList.remove("speaking")); if (bar) mark(); }
    function close() { stop(); if (bar) { bar.remove(); bar = null; } document.body.classList.remove("has-player"); }
    // Build the player for the current page.
    function open(root) {
      items = $$("[data-say]", root);
      idx = 0;
      if (!bar) {
        bar = document.createElement("div");
        bar.className = "player";
        bar.setAttribute("role", "region");
        bar.setAttribute("aria-label", "Read aloud");
        bar.innerHTML = `<button class="pl-btn main" id="rd-play"></button>
          <div class="pl-mid"><b>Listening</b><span class="tiny muted mono-num" id="rd-pos"></span></div>
          <button class="pl-btn" id="rd-back" aria-label="Previous paragraph">${I.back}</button>
          <button class="pl-btn" id="rd-fwd" aria-label="Next paragraph">${I.chevR}</button>
          <button class="pl-btn rate" id="rd-rate" aria-label="Reading speed"></button>
          <button class="pl-btn" id="rd-x" aria-label="Close player">${I.close}</button>`;
        document.body.appendChild(bar);
        document.body.classList.add("has-player");
        bar.querySelector("#rd-play").onclick = () => (playing ? pause() : play());
        bar.querySelector("#rd-back").onclick = () => play(Math.max(0, idx - 1));
        bar.querySelector("#rd-fwd").onclick = () => play(Math.min(items.length - 1, idx + 1));
        bar.querySelector("#rd-x").onclick = close;
        bar.querySelector("#rd-rate").onclick = () => {
          const p = P();
          const rates = [0.9, 1, 1.15, 1.3, 1.5];
          p.audio.rate = rates[(rates.indexOf(p.audio.rate) + 1) % rates.length] || 1;
          save();
          if (playing) play(); else mark();
        };
      }
      // Tap any paragraph to jump there while the player is open.
      items.forEach((el, i) => el.addEventListener("click", (e) => {
        if (!bar || e.target.closest("button, a, input, textarea, summary, .s-ctrl")) return;
        play(i);
      }));
      play(0);
    }
    return { open, close, stop, isOpen: () => !!bar };
  })();

  /* ---------------------------------------------------------
     Graphic generators (rank badges, patches, score ring)
     --------------------------------------------------------- */
  function rankBadge(i) {
    // Cadet: open ring. Then 1–4 chevrons, then stars for senior ranks.
    let inner = "";
    if (i === 0) inner = '<circle cx="32" cy="32" r="8"/>';
    else if (i <= 4) {
      for (let k = 0; k < i; k++) {
        const y = 40 - k * 7 + (i - 1) * 3.5;
        inner += `<path d="M18 ${y} 32 ${y - 9} 46 ${y}"/>`;
      }
    } else {
      const n = i - 4;
      const xs = n === 1 ? [32] : n === 2 ? [24, 40] : n === 3 ? [18, 32, 46] : [14, 26, 38, 50];
      inner += xs.map((x) => `<path transform="translate(${x - 32} 0)" d="m32 22 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L32 36.8l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9Z"/>`).join("");
      inner += '<path d="M18 46 32 40 46 46"/>';
    }
    return `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M32 3 57 17.5v29L32 61 7 46.5v-29Z" stroke-width="1.6" opacity=".55"/>${inner}</svg>`;
  }
  const PATCH_GLYPH = {
    first: '<path d="M24 34V16M24 16l-7 7M24 16l7 7"/>',
    mission: '<path d="m16 25 6 6 11-12"/>',
    s3: '<path d="M16 22l8-6 8 6M16 29l8-6 8 6M16 36l8-6 8 6"/>',
    s7: '<path d="M14 30h20M24 14v26M17 19l14 14M31 19 17 33"/>',
    s30: '<path d="M24 13l3.2 6.6 7.3 1-5.3 5.2 1.3 7.2L24 29.6 17.5 33l1.3-7.2-5.3-5.2 7.3-1Z"/>',
    perfect: '<circle cx="24" cy="25" r="9"/><circle cx="24" cy="25" r="4"/><path d="M24 12v4M24 34v4M11 25h4M33 25h4"/>',
    ace: '<path d="M17 34 24 15l7 19M19.5 28h9"/>',
    allmodes: '<rect x="15" y="16" width="7" height="7"/><rect x="26" y="16" width="7" height="7"/><rect x="15" y="27" width="7" height="7"/><rect x="26" y="27" width="7" height="7"/>',
    poly: '<circle cx="24" cy="25" r="10"/><path d="M14 25h20M24 15c3 3 4 6.5 4 10s-1 7-4 10c-3-3-4-6.5-4-10s1-7 4-10Z"/>',
    century: '<path d="M15 19v13M20 19h4v13h-4zM28 19h4v13h-4z"/>',
    review: '<rect x="15" y="18" width="13" height="16" rx="1"/><path d="M20 14h12v16"/>',
    blitz: '<path d="M26 12 16 27h7l-2 10 11-15h-7Z"/>',
    topic: '<path d="M14 20 24 14l10 6-10 6Z"/><path d="M18 23v6c3 3 9 3 12 0v-6"/>',
    dawn: '<path d="M13 31h22M17 31a7 7 0 0 1 14 0M24 15v4M14.5 20.5l2.5 2.5M33.5 20.5 31 23"/>',
    night: '<path d="M30 30a9 9 0 0 1-10-13 9 9 0 1 0 10 13Z"/>',
    double: '<path d="M14 20a4 4 0 0 1 8 0c0 3-8 6-8 11h8M26 22l7 9M33 22l-7 9"/>',
  };
  function patchIcon(id, earned) {
    return `<svg viewBox="0 0 48 52" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M24 2 45 13.5v25L24 50 3 38.5v-25Z" ${earned ? 'fill="currentColor" fill-opacity=".12"' : ""}/>
      <path d="M24 7 40.5 16v20L24 45 7.5 36V16Z" stroke-width="1" opacity=".5"/>
      ${PATCH_GLYPH[id] || ""}</svg>`;
  }
  function scoreRing(pct, label) {
    const r = 64, c = 2 * Math.PI * r;
    const color = pct >= 0.8 ? "var(--ok)" : pct >= 0.5 ? "var(--accent)" : "var(--bad)";
    return `<div class="ring"><svg viewBox="0 0 150 150">
      <circle cx="75" cy="75" r="${r}" stroke="var(--line)" stroke-width="8" fill="none"/>
      <circle cx="75" cy="75" r="${r}" stroke="${color}" stroke-width="8" fill="none" stroke-linecap="round"
        stroke-dasharray="${c}" stroke-dashoffset="${c}" class="ring-arc" data-off="${c * (1 - pct)}"/></svg>
      <div class="val"><div>${label}<small>SCORE</small></div></div></div>`;
  }
  function animateRing() {
    const arc = $(".ring-arc");
    if (arc) requestAnimationFrame(() => { arc.style.transition = "stroke-dashoffset 1s ease"; arc.style.strokeDashoffset = arc.dataset.off; });
  }

  /* ---------------------------------------------------------
     Layout pieces
     --------------------------------------------------------- */
  // Page header: small kicker, wide display title, hairline rule with accent tick.
  function pageHead(kicker, title, opts = {}) {
    const pager = opts.pager ? `<span class="pager">${Array.from({ length: opts.pager[1] }, (_, i) => `<i class="${i === opts.pager[0] ? "on" : ""}"></i>`).join("")}</span>` : "";
    return `<header class="ph"><div class="ph-kicker">${esc(kicker)} //</div>
      <div class="ph-row"><h1 class="ph-title ${opts.long ? "long" : ""}">${esc(title)}</h1>${pager}</div>
      <div class="ph-rule"><span></span></div></header>`;
  }
  // Icon inside a circular progress arc (commendation style).
  function ringIcon(icon, pct, size = "") {
    const r = 44, c = 2 * Math.PI * r;
    const p = Math.max(0, Math.min(1, pct || 0));
    return `<span class="ringicon ${size}"><svg class="r" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="r-track" cx="50" cy="50" r="${r}" fill="none" stroke-width="3"/>
      ${p > 0 ? `<circle class="r-arc ${p >= 1 ? "done" : ""}" cx="50" cy="50" r="${r}" fill="none" stroke-width="5" stroke-linecap="butt" stroke-dasharray="${c * p} ${c}"/>` : ""}
      </svg><span class="r-ico">${icon}</span></span>`;
  }
  function topicPct(p, t) {
    if (!p) return 0;
    return t.lessons.filter((l) => p.lessons[l.id] && p.lessons[l.id].done).length / t.lessons.length;
  }
  function topbar(p) {
    return `<header class="topbar">
      <a class="brand" href="#/"><span class="brand-mark">${I.logo}</span><span class="brand-name">WAYPOINT</span></a>
      ${p ? `<div class="topbar-right"><a class="pilot-chip" href="#/profile"><span class="insignia">${INSIGNIA[p.insignia]}</span>${esc(p.callsign)}</a></div>` : ""}
    </header>`;
  }
  function renderTabs(active) {
    const nav = $("#tabbar");
    const p = P();
    if (!active || !p) { nav.hidden = true; $("#app").classList.add("no-tabs"); return; }
    nav.hidden = false;
    $("#app").classList.remove("no-tabs");
    const due = dueCards(p).length;
    const tabs = [
      ["today", "#/", "Today", I.today],
      ["review", "#/review", "Review", I.review, due],
      ["library", "#/library", "Library", I.library],
      ["logbook", "#/logbook", "Logbook", I.logbook],
      ["profile", "#/profile", "Profile", I.profile],
    ];
    nav.innerHTML = `<div class="tabbar-inner">${tabs
      .map(([id, href, label, icon, badge]) => `<a class="tab ${id === active ? "on" : ""}" href="${href}" ${id === active ? 'aria-current="page"' : ""}>${icon}${label}${badge ? `<span class="dot">${badge > 99 ? "99+" : badge}</span>` : ""}</a>`)
      .join("")}</div>`;
  }
  function applyTheme() {
    const p = P();
    document.documentElement.dataset.theme = p ? p.theme : "dark";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = p && p.theme === "light" ? "#f3f5f8" : "#0a0f17";
  }
  function view(html, tab) {
    const app = $("#app");
    app.innerHTML = `<div class="view">${html}</div>`;
    renderTabs(tab);
    window.scrollTo(0, 0);
  }

  /* ---------------------------------------------------------
     Views: welcome & profile setup
     --------------------------------------------------------- */
  function vWelcome() {
    view(`${topbar(null)}
      <section class="hero">
        <div class="label accent">A pocket university · one commute at a time</div>
        <h1>Learn something that matters, every day.</h1>
        <p>${TOTAL_LESSONS} plain-English lessons across ${TOPICS.length} subjects — from AI and data systems to banking, history, HVAC and squash. Each day you get two hand-picked options — choose one and learn the 20% that gets you 80% of the way.</p>
      </section>
      <div class="feature-list">
        <div class="feature"><div class="f-ico">${I.brief}</div><div><b>Read or listen</b><span>A short version, the full story in simple English, a real example and the common trap. Charts and animations where a picture helps, and a Listen button on every lesson.</span></div></div>
        <div class="feature"><div class="f-ico">${I.chat}</div><div><b>Think and talk</b><span>Questions to mull over on the ride, and one thing worth bringing up with a colleague.</span></div></div>
        <div class="feature"><div class="f-ico">${I.flash}</div><div><b>Drill</b><span>Flashcards, multiple choice, true/false and match-ups.</span></div></div>
        <div class="feature"><div class="f-ico">${I.medal}</div><div><b>Progress</b><span>A daily log of every day you learn. 1% better a day compounds: 1.01³⁶⁵ ≈ 38×.</span></div></div>
      </div>
      <a class="btn primary block" href="#/setup">Create your profile ${I.chevR}</a>
      ${Object.keys(db.profiles).length ? `<div style="margin-top:12px"><a class="btn ghost block" href="#/pilots">Choose existing profile</a></div>` : ""}
      <p class="footer-note">Your progress is saved on this device only.</p>`);
  }

  // Setup is a 3-step guided flow. Draft is kept in memory until finished.
  let draft = null;
  function vSetup(step, editing) {
    const p = P();
    if (!draft) {
      draft = editing && p
        ? { callsign: p.callsign, insignia: p.insignia, interests: p.interests.slice(), drill: p.drill, theme: p.theme }
        : { callsign: "", insignia: "chevron", interests: [], drill: "mcq", theme: "dark" };
    }
    step = Math.max(1, Math.min(3, +step || 1));
    const base = editing ? "#/edit/" : "#/setup/";
    const backHref = step > 1 ? base + (step - 1) : editing ? "#/profile" : Object.keys(db.profiles).length ? "#/pilots" : "#/welcome";
    let body = "";
    if (step === 1) {
      body = `
        ${pageHead("Step 1 of 3 · Identity", "Callsign", { pager: [0, 3] })}
        <p class="muted">Choose the name shown on your profile.</p>
        <label class="field"><span class="label">Callsign</span>
          <input class="input" id="cs" maxlength="16" autocomplete="nickname" placeholder="e.g. MAVERICK" value="${esc(draft.callsign)}"></label>
        <div class="field"><span class="label">Insignia</span>
          <div class="choice-row">${Object.keys(INSIGNIA).map((k) => `<button class="choice" data-ins="${k}" aria-pressed="${draft.insignia === k}" aria-label="${k}">${INSIGNIA[k]}</button>`).join("")}</div></div>
        <div class="sticky-cta"><button class="btn primary block" id="next" ${draft.callsign.trim() ? "" : "disabled"}>Next ${I.chevR}</button></div>`;
    } else if (step === 2) {
      body = `
        ${pageHead("Step 2 of 3 · Interests", "Interests", { pager: [1, 3] })}
        <p class="muted">Pick at least two — more is better. Each day you'll get two lessons from these to choose between, and you can browse every topic in the Library any time.</p>
        <div style="margin-top:8px"><button class="link-btn" id="all-int">${draft.interests.length === TOPICS.length ? "Clear all" : "Select all"}</button></div>
        ${facultyGrid((t) => draft.interests.includes(t.id))}
        <div class="sticky-cta"><button class="btn primary block" id="next" ${draft.interests.length >= 2 ? "" : "disabled"}>Next ${I.chevR}</button></div>`;
    } else {
      body = `
        ${pageHead("Step 3 of 3 · Preferences", "Training", { pager: [2, 3] })}
        <p class="muted">Your preferred drill is highlighted after each brief. You can try every drill on any lesson.</p>
        <div class="field"><span class="label">Preferred drill</span>
          <div class="opt-list">${Object.entries(DRILLS).map(([k, d]) => `<button class="opt" data-drill="${k}" aria-pressed="${draft.drill === k}">${d.icon}<span><b>${d.name}</b><small>${d.desc}</small></span></button>`).join("")}</div></div>
        <div class="field"><span class="label">Display</span>
          <div class="seg"><button data-mode-theme="dark" aria-pressed="${draft.theme === "dark"}">Dark</button><button data-mode-theme="light" aria-pressed="${draft.theme === "light"}">Light</button></div></div>
        <div class="sticky-cta"><button class="btn primary block" id="next">${editing ? "Save changes" : "Begin training"} ${I.chevR}</button></div>`;
    }
    view(`${topbar(null)}<a class="back" href="${backHref}">${I.back} Back</a>${body}`, null);

    const cs = $("#cs");
    if (cs) {
      cs.addEventListener("input", () => {
        draft.callsign = cs.value.toUpperCase().replace(/[^A-Z0-9 \-]/g, "");
        if (cs.value !== draft.callsign) cs.value = draft.callsign;
        $("#next").disabled = !draft.callsign.trim();
      });
      if (!editing) cs.focus();
    }
    $$("[data-ins]").forEach((b) => (b.onclick = () => {
      draft.insignia = b.dataset.ins;
      $$("[data-ins]").forEach((x) => x.setAttribute("aria-pressed", x === b));
    }));
    $$("[data-topic]").forEach((b) => (b.onclick = () => {
      const id = b.dataset.topic;
      draft.interests = draft.interests.includes(id) ? draft.interests.filter((x) => x !== id) : draft.interests.concat(id);
      b.setAttribute("aria-pressed", draft.interests.includes(id));
      $("#next").disabled = draft.interests.length < 2;
    }));
    const ai = $("#all-int");
    if (ai) ai.onclick = () => {
      draft.interests = draft.interests.length === TOPICS.length ? [] : TOPICS.map((t) => t.id);
      vSetup(2, editing);
    };
    $$("[data-drill]").forEach((b) => (b.onclick = () => {
      draft.drill = b.dataset.drill;
      $$("[data-drill]").forEach((x) => x.setAttribute("aria-pressed", x === b));
    }));
    $$("[data-mode-theme]").forEach((b) => (b.onclick = () => {
      draft.theme = b.dataset.modeTheme;
      document.documentElement.dataset.theme = draft.theme;
      $$("[data-mode-theme]").forEach((x) => x.setAttribute("aria-pressed", x === b));
    }));
    $("#next").onclick = () => {
      if (step < 3) { location.hash = base + (step + 1); return; }
      draft.callsign = draft.callsign.trim().slice(0, 16);
      if (editing && p) {
        Object.assign(p, draft);
        toast("Profile updated");
      } else {
        const np = Object.assign(newProfile(draft.callsign), draft);
        db.profiles[np.id] = np;
        db.active = np.id;
      }
      draft = null;
      save();
      applyTheme();
      location.hash = editing ? "#/profile" : "#/";
    };
  }
  // Topic grid grouped under faculty headings.
  function facultyGrid(isOn, isDisabled = () => false, only = null) {
    return FACULTIES.map((f) => {
      const ts = f.topics.map((id) => TOPIC_BY_ID[id]).filter((t) => !only || only.includes(t.id));
      if (!ts.length) return "";
      return `<div class="faculty"><div class="label faculty-name">${esc(f.name)}</div>
        <div class="topic-grid">${ts.map((t) => topicOpt(t, isOn(t), isDisabled(t))).join("")}</div></div>`;
    }).join("");
  }
  function topicOpt(t, on, disabled) {
    return `<button class="topic-opt" data-topic="${t.id}" aria-pressed="${!!on}" ${disabled ? "disabled" : ""}>
      <span class="check">${I.check}</span>
      ${ringIcon(topicIcon(t.id), topicPct(P(), t))}
      <span class="t-name">${esc(t.name)}</span>
      <span class="t-meta mono-num">${P() ? t.lessons.filter((l) => P().lessons[l.id] && P().lessons[l.id].done).length + " / " : ""}${t.lessons.length} lessons</span>
    </button>`;
  }

  function vPilots() {
    const list = Object.values(db.profiles);
    view(`${topbar(null)}
      ${pageHead("Who's flying today?", "Profiles")}
      <div class="pilot-list" style="margin-top:18px">
        ${list.map((p) => { const r = rankFor(p.xp); return `<button class="pilot-row ${p.id === db.active ? "cur" : ""}" data-pid="${p.id}">
          <span class="insignia lg">${INSIGNIA[p.insignia]}</span><span><b>${esc(p.callsign)}</b><small>${r.cur.name} · ${p.xp} XP</small></span></button>`; }).join("")}
      </div>
      <div style="margin-top:14px"><a class="btn block" href="#/setup">${I.plus} New profile</a></div>`, null);
    $$("[data-pid]").forEach((b) => (b.onclick = () => {
      db.active = b.dataset.pid;
      save();
      applyTheme();
      location.hash = "#/";
    }));
  }

  /* ---------------------------------------------------------
     View: Today (home / mission)
     --------------------------------------------------------- */
  // Photo card in the style of a travel/destination card: image, title, short
  // pitch, and a solid action panel at the bottom for legibility.
  function photoCard(p, id, o) {
    const l = LESSON_BY_ID[id];
    const t = TOPIC_BY_ID[l.topic];
    const pitch = (l.hook || l.bluf || "").replace(/\s+/g, " ");
    return `<article class="pcard ${o.cls || ""}" data-card="${id}" style="background-image:url('${topicImg(l.topic)}')">
      <div class="pc-head"><span class="pc-kicker">${esc(o.label)}</span><span class="pc-chip">${l.minutes} min</span></div>
      <div class="pc-body">
        <div class="pc-topic">${topicIcon(l.topic)}<span>${esc(t.name)}</span></div>
        <h2 class="pc-title">${esc(l.title)}</h2>
        <p class="pc-sub">${esc(pitch)}</p>
      </div>
      <div class="pc-panel">
        ${o.panelTop || `<div class="pc-feats"><span>${I.brief}Read</span><span>${I.bulb}Think</span><span>${I.flash}Drill</span><span class="pc-lv">${l.index + 1}/${t.lessons.length}</span></div>`}
        ${o.cta}
      </div>
    </article>`;
  }
  /* GitHub-style activity grid: one square per day, columns are weeks
     (Sunday at the top), shaded by XP earned that day. */
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function dayLevel(p, key) {
    const xp = p.activity[key] || 0;
    const d = p.days[key];
    if (!xp) return d && d.frozen ? "fz" : "";
    let lv = xp >= 140 ? 4 : xp >= 80 ? 3 : xp >= 30 ? 2 : 1;
    if (d && d.done) lv = Math.max(lv, 2);
    return "l" + lv;
  }
  function dayTip(p, key) {
    const [y, m, dd] = key.split("-").map(Number);
    const label = new Date(y, m - 1, dd).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
    const d = p.days[key] || {};
    const xp = p.activity[key] || 0;
    const what = d.done ? "daily lesson done" : d.frozen ? "streak freeze" : xp ? "some practice" : "no activity";
    return `${label} · ${xp ? xp + " XP · " : ""}${what}`;
  }
  function activityGrid(p, weeks, scroll) {
    const t = today();
    const [y, m, d] = t.split("-").map(Number);
    const dow = new Date(y, m - 1, d).getDay();
    const start = addDays(t, -(weeks - 1) * 7 - dow);
    let cells = "", months = "", lastMonth = -1, lastLabel = -9;
    for (let w = 0; w < weeks; w++) {
      const col = addDays(start, w * 7);
      const [cy, cm, cd] = col.split("-").map(Number);
      if (cm !== lastMonth) {
        const roomy = w > 0 || new Date(cy, cm, 0).getDate() - cd >= 13; // skip a stub first month
        if (roomy && w - lastLabel >= 3) { months += `<span style="grid-column:${w + 1}">${MONTHS[cm - 1]}</span>`; lastLabel = w; }
        lastMonth = cm;
      }
      for (let r = 0; r < 7; r++) {
        const key = addDays(col, r);
        if (key > t) { cells += `<i class="fut"></i>`; continue; }
        cells += `<i class="${dayLevel(p, key)} ${key === t ? "today" : ""}" data-k="${key}" title="${esc(dayTip(p, key))}"></i>`;
      }
    }
    const cols = scroll ? `repeat(${weeks}, 12px)` : `repeat(${weeks}, 1fr)`;
    return `<div class="gh ${scroll ? "scroll" : ""}">
      <div class="gh-days"><span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span></div>
      <div class="gh-main"><div class="gh-months" style="grid-template-columns:${cols}">${months}</div>
        <div class="gh-grid" style="grid-template-columns:${cols}">${cells}</div></div>
    </div>`;
  }
  function activityCard(p, weeks, scroll) {
    const n = learnDays(p);
    const streak = streakNow(p);
    const fz = p.streak.freezes || 0;
    const since = addDays(today(), -weeks * 7);
    const active = Object.keys(p.activity).filter((k) => k > since && p.activity[k] > 0).length;
    return `<div class="panel gh-card">
      <div class="gh-head">
        <span class="gh-stat ${streak ? "hot" : ""}">${I.streak}<b class="mono-num">${streak}</b> day streak</span>
        <span class="gh-stat" title="Each finished day compounds 1%"><span>1.01<sup>${n}</sup></span> = <b class="mono-num">${compound(n)}×</b></span>
      </div>
      ${activityGrid(p, weeks, scroll)}
      <div class="gh-foot">
        <span class="gh-cap tiny muted" aria-live="polite">${active} active day${active === 1 ? "" : "s"} in ${weeks} weeks${fz ? ` · <span class="fz-note">${I.snow}${fz} freeze${fz === 1 ? "" : "s"}</span>` : ""}</span>
        <span class="gh-legend tiny muted">Less<i></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i>More</span>
      </div>
    </div>`;
  }
  function bindGrid(root) {
    $$(".gh-grid [data-k]", root).forEach((c) => (c.onclick = () => {
      const card = c.closest(".gh-card");
      $$(".sel", card).forEach((x) => x.classList.remove("sel"));
      c.classList.add("sel");
      $(".gh-cap", card).textContent = dayTip(P(), c.dataset.k);
    }));
    $$(".gh.scroll .gh-main", root).forEach((el) => { el.scrollLeft = el.scrollWidth; });
  }

  /* One question from an earlier lesson, shown once today's lesson is done.
     Pulling an old idea back out of memory is what makes it stick. */
  function recallCard(p, d) {
    if (!d.done) return "";
    if (!d.recall) {
      const pool = Object.keys(p.lessons)
        .filter((id) => p.lessons[id].done && id !== d.choice && LESSON_BY_ID[id] && (LESSON_BY_ID[id].mcq || []).length)
        .sort((a, b) => (p.lessons[a].doneOn || "").localeCompare(p.lessons[b].doneOn || ""));
      if (!pool.length) return "";
      const id = pool[Math.floor(Math.random() * Math.min(pool.length, 5))];
      d.recall = { id, k: Math.floor(Math.random() * LESSON_BY_ID[id].mcq.length), ans: null };
      save();
    }
    const l = LESSON_BY_ID[d.recall.id];
    const q = l && l.mcq[d.recall.k];
    if (!q) return "";
    const answered = d.recall.ans != null;
    const opts = answered ? q.a.map((text, i) => ({ text, i })) : shuffle(q.a.map((text, i) => ({ text, i })));
    return `<section class="section" id="recall">
      <div class="section-head"><h2>Quick recall</h2><span class="label">${answered ? (d.recall.ans === q.c ? "Nailed it" : "Reviewed") : `+${XP.recall} XP`}</span></div>
      <div class="panel recall">
        <div class="label accent">From ${esc(l.title)}</div>
        ${q.fig ? WPV.render(q.fig, { compact: true, static: true }) : ""}
        <p class="rc-q">${esc(q.q)}</p>
        <div class="rc-opts">${opts.map((o) => {
          const cls = !answered ? "" : o.i === q.c ? "correct" : o.i === d.recall.ans ? "wrong" : "dim";
          return `<button class="answer sm ${cls}" data-rc="${o.i}" ${answered ? "disabled" : ""}><span>${esc(o.text)}</span></button>`;
        }).join("")}</div>
        ${answered ? `<p class="small muted" style="margin-top:10px">${esc(q.why || "")} <a href="#/lesson/${l.id}">Revisit the lesson</a></p>` : ""}
      </div>
    </section>`;
  }

  function hudPanel(p) {
    const r = rankFor(p.xp);
    const streak = streakNow(p);
    const accuracy = p.stats.answered ? Math.round((100 * p.stats.correct) / p.stats.answered) : null;
    return `<section class="panel brackets">
      <div class="hud">
        <div class="lvl"><span class="label">Level</span><b class="mono-num">${r.i + 1}</b></div>
        <div>
          <div class="label">Current rank</div>
          <div class="hud-title">${r.cur.name}</div>
          <div class="xpbar"><span style="width:${Math.round(r.pct * 100)}%"></span></div>
          <div class="tiny muted mono-num">${r.next ? `${p.xp} / ${r.next.xp} XP · next: ${r.next.name}` : `${p.xp} XP · highest rank`}</div>
        </div>
      </div>
      <div class="statrow">
        <div class="statcell"><span class="label">Streak</span><b class="${streak ? "accent" : ""}">${streak}<small>day${streak === 1 ? "" : "s"}</small></b></div>
        <div class="statcell"><span class="label">Lessons</span><b>${p.stats.lessons}<small class="dim">/${TOTAL_LESSONS}</small></b></div>
        <div class="statcell"><span class="label">Accuracy</span><b>${accuracy === null ? "—" : accuracy + "<small>%</small>"}</b></div>
      </div>
    </section>`;
  }

  /* ---------------------------------------------------------
     View: Today — two preselected lessons, pick one
     --------------------------------------------------------- */
  function vHome() {
    const p = P();
    const d = ensureToday(p);
    const r = rankFor(p.xp);
    const streak = streakNow(p);
    const due = dueCards(p).length;
    const h = new Date().getHours();
    const greet = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";

    const head = `<section class="greet">
      <div><div class="ph-kicker">${esc(fmtDate(today()))} //</div><h1 class="greet-title">${greet}, ${esc(p.callsign)}</h1></div>
      <div class="hchips"><span class="hchip ${streak ? "hot" : ""}" title="Streak">${I.streak}<b class="mono-num">${streak}</b></span><span class="hchip" title="Level">LV<b class="mono-num">${r.i + 1}</b></span></div>
    </section>`;

    let mission;
    if (!d.choice) {
      const opts = d.options;
      mission = `<section class="today">
        <div class="section-head"><h2>Today's lesson</h2><span class="label hud">Pick one</span></div>
        <div class="carousel" id="opts">
          ${opts.map((id, n) => photoCard(p, id, {
            label: `Option ${"AB"[n]}`,
            cta: `<button class="pc-btn" data-start="${id}">Start this lesson ${I.chevR}</button>`,
          })).join("")}
        </div>
        <div class="car-foot"><span class="pager" id="pg">${opts.map((_, n) => `<i class="${n ? "" : "on"}"></i>`).join("")}</span>
          <button class="link-btn" id="shuffle">${I.swap.replace("<svg", '<svg style="width:15px;height:15px;display:inline;vertical-align:-3px;margin-right:4px"')}Show two different options</button></div>
      </section>`;
    } else {
      const id = d.choice;
      const rec = p.lessons[id] || {};
      const briefed = rec.brief;
      const drilled = rec.modes && Object.keys(rec.modes).length > 0;
      const done = rec.done;
      const href = briefed ? `#/drill/${id}` : `#/lesson/${id}`;
      const cta = done ? "Review lesson" : briefed ? "Continue to drill" : "Start this lesson";
      const steps = `<div class="pc-steps">
        <span class="${briefed ? "ok" : "on"}">Brief</span><span class="${drilled ? "ok" : briefed ? "on" : ""}">Drill</span><span class="${done ? "ok" : drilled ? "on" : ""}">Debrief</span></div>`;
      const other = d.options.find((x) => x !== id);
      mission = `<section class="today">
        <div class="section-head"><h2>Today's lesson</h2><span class="label ${done ? "" : "hud"}" style="${done ? "color:var(--ok)" : ""}">${done ? "Complete ✓" : "In progress"}</span></div>
        ${photoCard(p, id, {
          label: done ? `Cleared · ${streak}-day streak` : "Your pick",
          cls: done ? "is-done" : "single",
          panelTop: steps,
          cta: `<a class="pc-btn" href="${done ? `#/lesson/${id}` : href}">${cta} ${I.chevR}</a>`,
        })}
        <div class="car-foot">${!started(p, id) && !done && other ? `<button class="link-btn" id="switch">${I.swap.replace("<svg", '<svg style="width:15px;height:15px;display:inline;vertical-align:-3px;margin-right:4px"')}Switch to the other option</button>` : done && other ? `<a class="link-btn" href="#/lesson/${other}">Extra credit: ${esc(LESSON_BY_ID[other].title)} ${I.chevR.replace("<svg", '<svg style="width:14px;height:14px;display:inline;vertical-align:-2px"')}</a>` : "<span></span>"}</div>
      </section>`;
    }

    // Talking point from today's lesson once it's been read.
    const talkId = d.choice && p.lessons[d.choice] && p.lessons[d.choice].brief && LESSON_BY_ID[d.choice].talk ? d.choice : null;
    const talkHtml = talkId ? `<section class="section">
      <div class="section-head"><h2>Bring it up today</h2><span class="label">Talking point</span></div>
      <div class="panel talk"><div class="talk-head">${I.chat}<div class="label accent">${esc(TOPIC_BY_ID[LESSON_BY_ID[talkId].topic].name)}</div></div><p>${esc(LESSON_BY_ID[talkId].talk)}</p></div>
    </section>` : "";

    const review = `<section class="section">
      <div class="section-head"><h2>Stay sharp</h2></div>
      <div class="drill-list">
        <a class="drill-opt ${due ? "rec" : ""}" href="#/review/cards" style="text-decoration:none;color:inherit">
          <span class="d-ico">${I.review}</span><span><b>Spaced review</b><small>${due ? `${due} card${due === 1 ? "" : "s"} due — short, daily recall` : "No cards due. Finished lessons feed this deck."}</small></span><span class="chev">${I.chevR}</span></a>
        <a class="drill-opt" href="#/review/blitz" style="text-decoration:none;color:inherit">
          <span class="d-ico">${I.timer}</span><span><b>Blitz</b><small>60 seconds. As many correct answers as you can.</small></span><span class="chev">${I.chevR}</span></a>
      </div>
    </section>
    <section class="section"><div class="section-head"><h2>Progress</h2><a class="label hud" href="#/logbook" style="text-decoration:none">Logbook ›</a></div>${hudPanel(p)}</section>`;

    const log = `<section class="section">
      <div class="section-head"><h2>Daily log</h2><a class="label hud" href="#/logbook" style="text-decoration:none">Full year ›</a></div>
      ${activityCard(p, 20, false)}
    </section>`;

    view(topbar(p) + head + mission + log + recallCard(p, d) + talkHtml + review, "today");
    WPV.mount($("#app"));
    bindGrid($("#app"));
    $$("[data-rc]").forEach((b) => (b.onclick = () => {
      const k = +b.dataset.rc;
      const q = LESSON_BY_ID[d.recall.id].mcq[d.recall.k];
      d.recall.ans = k;
      p.stats.answered++;
      if (k === q.c) { p.stats.correct++; award(p, XP.recall, "Quick recall"); } else vibrate(60);
      checkPatches(p);
      save();
      const y = window.scrollY;
      vHome();
      window.scrollTo(0, y);
    }));

    // Carousel pager follows native scroll-snap momentum.
    const car = $("#opts");
    if (car) {
      let raf = 0;
      car.addEventListener("scroll", () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const n = Math.round(car.scrollLeft / (car.firstElementChild.offsetWidth + 12));
          $$("#pg i").forEach((x, k) => x.classList.toggle("on", k === n));
        });
      }, { passive: true });
    }
    $$("[data-start]").forEach((b) => (b.onclick = () => {
      chooseToday(p, b.dataset.start);
      go(`#/lesson/${b.dataset.start}`);
    }));
    const sh = $("#shuffle");
    if (sh) sh.onclick = () => {
      const td = ensureToday(p);
      td.options = pickOptions(p, td.options.map((x) => LESSON_BY_ID[x].topic));
      save();
      vHome();
    };
    const sw = $("#switch");
    if (sw) sw.onclick = () => {
      const td = ensureToday(p);
      td.choice = null;
      save();
      vHome();
    };
  }

  /* ---------------------------------------------------------
     View: Lesson brief
     --------------------------------------------------------- */
  function tracker(step) {
    const names = ["Brief", "Drill", "Debrief"];
    return `<div class="tracker">${names.map((n, i) => `${i ? '<span class="bar"></span>' : ""}<span class="tk ${i + 1 < step ? "ok" : i + 1 === step ? "on" : ""}"><i>${i + 1 < step ? "✓" : i + 1}</i>${n}</span>`).join("")}</div>`;
  }
  function storyHtml(story) {
    if (!story || !story.length) return "";
    return story.map((para) => typeof para === "object"
      ? WPV.render(para)
      : para.startsWith("## ")
        ? `<h3 class="story-h" data-say>${esc(para.slice(3))}</h3>`
        : `<p data-say>${esc(para)}</p>`).join("");
  }
  function vLesson(id) {
    const p = P();
    const l = LESSON_BY_ID[id];
    if (!l || !canOpen(p, id)) return go("#/");
    const t = TOPIC_BY_ID[l.topic];
    const rec = lessonRec(p, id);
    // Opening one of today's options counts as choosing it.
    const td = todayRec(p);
    if (td && td.options && !td.choice && td.options.includes(id)) chooseToday(p, id);
    const fromMission = isTodayLesson(p, id);
    const note = (p.notes && p.notes[id]) || "";
    view(`${topbar(p)}
      <a class="back" href="${fromMission ? "#/" : "#/library"}">${I.back} ${fromMission ? "Today" : "Library"}</a>
      ${tracker(1)}
      <header class="lhero" style="background-image:url('${topicImg(l.topic)}')">
        <div class="pc-topic">${topicIcon(l.topic)}<span>${esc(t.name)} · Lesson ${l.index + 1} of ${t.lessons.length}</span></div>
        <h1 class="lhero-title">${esc(l.title)}</h1>
        <div class="lhero-meta"><span>${l.level}</span><span>${l.minutes} min read</span>${rec.done ? "<span>Completed ✓</span>" : ""}</div>
      </header>
      ${Speech.ok ? `<button class="listen" id="listen">${I.speaker}<span><b>Listen to this lesson</b><small>About ${Math.max(2, Math.round(l.minutes * 1.15))} min · the text stays on screen</small></span></button>` : ""}
      ${l.hook ? `<p class="hook" data-say>${esc(l.hook)}</p>` : ""}
      <section class="panel bluf" data-say="${esc("The short version. " + l.bluf)}"><div class="label accent">The short version</div><p>${esc(l.bluf)}</p></section>
      ${l.story ? `<section class="section story"><div class="section-head"><h2>The full picture</h2></div>${storyHtml(l.story)}</section>` : ""}
      <section class="section">
        <div class="section-head"><h2>${l.story ? "Remember these" : "The 80% you need"}</h2><span class="label">${l.points.length} points</span></div>
        <div class="panel"><ol class="points">${l.points.map((x) => `<li data-say="${esc(x.h + ". " + x.t)}"><div><b>${esc(x.h)}</b><span>${esc(x.t)}</span></div></li>`).join("")}</ol></div>
      </section>
      <section class="section">
        <div class="panel callout field-ex" data-say="${esc("Real-world example. " + l.example)}">${I.cross}<div><div class="label hud">Real-world example</div><p>${esc(l.example)}</p></div></div>
        <div class="panel callout warn" data-say="${esc("Common trap. " + l.pitfall)}">${I.warn}<div><div class="label" style="color:var(--bad)">Common trap</div><p>${esc(l.pitfall)}</p></div></div>
      </section>
      <section class="section terms">
        <div class="section-head"><h2>Key terms</h2><span class="label">${l.terms.length} terms</span></div>
        <div class="panel"><dl>${l.terms.map(([a, b]) => `<dt data-say="${esc(a + ": " + b)}">${esc(a)}</dt><dd>${esc(b)}</dd>`).join("")}</dl></div>
      </section>
      ${l.think ? `<section class="section">
        <div class="section-head"><h2>Think about it</h2><span class="label">On the ride in</span></div>
        <div class="panel callout think">${I.bulb}<div><ol class="think-list">${l.think.map((q) => `<li data-say>${esc(q)}</li>`).join("")}</ol>
          <label class="label" for="note" style="display:block;margin-top:14px">Your notes</label>
          <textarea id="note" class="note" rows="3" placeholder="Jot down a thought — saved on this device.">${esc(note)}</textarea></div></div>
      </section>` : ""}
      ${l.talk ? `<section class="section">
        <div class="panel talk"><div class="talk-head">${I.chat}<div class="label accent">Talk about it</div></div>
          <p data-say="${esc("Talk about it. " + l.talk)}">${esc(l.talk)}</p>
          <button class="btn ghost" id="share" style="margin-top:12px">${I.share} Share</button></div>
      </section>` : ""}
      <div class="end-cta"><button class="btn primary block" id="done-brief">${rec.brief ? "Go to drill" : "Done reading — start drill"} ${I.chevR}</button></div>
    `, fromMission ? "today" : "library");
    WPV.mount($("#app"));
    const ls = $("#listen");
    if (ls) ls.onclick = () => Reader.open($("#app"));
    const ta = $("#note");
    if (ta) ta.addEventListener("input", () => {
      p.notes = p.notes || {};
      if (ta.value.trim()) p.notes[id] = ta.value; else delete p.notes[id];
      save();
    });
    const sh = $("#share");
    if (sh) sh.onclick = async () => {
      const text = `${l.talk}\n\n— from "${l.title}" (${t.name})`;
      try {
        if (navigator.share) await navigator.share({ title: l.title, text });
        else { await navigator.clipboard.writeText(text); toast("Copied to clipboard"); }
      } catch (e) { /* share cancelled */ }
    };
    $("#done-brief").onclick = () => {
      if (!rec.brief) {
        rec.brief = true;
        award(p, XP.brief, `Brief · ${l.title}`);
        save();
      }
      go(`#/drill/${id}`);
    };
  }

  /* ---------------------------------------------------------
     View: Drill menu
     --------------------------------------------------------- */
  function vDrill(id) {
    const p = P();
    const l = LESSON_BY_ID[id];
    if (!l || !canOpen(p, id)) return go("#/");
    const rec = lessonRec(p, id);
    const order = [p.drill].concat(Object.keys(DRILLS).filter((k) => k !== p.drill));
    view(`${topbar(p)}
      <a class="back" href="#/lesson/${id}">${I.back} Brief</a>
      ${tracker(rec.done ? 3 : 2)}
      <div class="label">${esc(TOPIC_BY_ID[l.topic].name)}</div>
      <h1 class="lesson-title">${esc(l.title)}</h1>
      <p class="muted">${rec.done ? "Lesson complete. Try another drill to strengthen it — every drill you clear earns XP." : "Choose a drill. Finishing any one completes the lesson."}</p>
      <div class="drill-list" style="margin-top:18px">
        ${order.map((k) => {
          const m = rec.modes[k];
          return `<button class="drill-opt ${k === p.drill && !m ? "rec" : ""}" data-mode="${k}">
            <span class="d-ico">${DRILLS[k].icon}</span>
            <span><b>${DRILLS[k].name}${k === p.drill ? ' <span class="tag accent" style="margin-left:6px">Preferred</span>' : ""}</b><small>${DRILLS[k].desc}</small></span>
            ${m ? `<span class="score">${Math.round(m.best * 100)}%</span>` : `<span class="chev">${I.chevR}</span>`}
          </button>`;
        }).join("")}
      </div>
      <div style="margin-top:20px"><a class="btn ghost block" href="#/">Return to mission</a></div>
    `, "today");
    $$("[data-mode]").forEach((b) => (b.onclick = () => go(`#/run/${id}/${b.dataset.mode}`)));
  }

  /* ---------------------------------------------------------
     Runners (quiz engines)
     Each runner renders into #app with its own top bar and
     calls finish(correct, total) at the end.
     --------------------------------------------------------- */
  function runnerShell(title, i, n, extra = "") {
    return `<div class="runner-top">
      <button class="icon-btn" id="quit" aria-label="Quit">${I.close}</button>
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${i}"><span style="width:${(100 * i) / n}%"></span></div>
      ${extra || `<span class="counter mono-num">${Math.min(i + 1, n)}/${n}</span>`}
    </div><div class="label hud q-label">${esc(title)}</div>`;
  }
  function bindQuit(href) {
    const q = $("#quit");
    if (q) q.onclick = () => { cleanupRunner(); go(href); };
  }
  let runnerTimer = null;
  function cleanupRunner() { if (runnerTimer) { clearInterval(runnerTimer); runnerTimer = null; } }

  function vRun(id, mode) {
    const p = P();
    const l = LESSON_BY_ID[id];
    if (!l || !DRILLS[mode] || !canOpen(p, id)) return go("#/");
    renderTabs(null);
    const back = `#/drill/${id}`;
    const finish = (c, n, combo = 0) => {
      const first = !lessonRec(p, id).modes[mode];
      let xp = recordDrill(p, id, mode, c, n);
      // Answer three or more in a row on a first run for a small bonus.
      if (first && combo >= 3) { award(p, combo * XP.comboPer, `Combo ×${combo}`); xp += combo * XP.comboPer; save(); }
      resultView({ c, n, xp, combo, title: DRILLS[mode].name, backHref: back, againHref: `#/run/${id}/${mode}`, nextLabel: "Back to drills" });
    };
    if (mode === "mcq") runChoice(l.mcq.map((q) => toMcq(q)), DRILLS.mcq.name, back, finish);
    if (mode === "tf") runChoice(l.tf.map(toTf), DRILLS.tf.name, back, finish);
    if (mode === "flash") runFlash(l.terms.map(([a, b]) => ({ term: a, def: b })), back, finish);
    if (mode === "match") runMatch(l.terms, back, finish);
  }
  const toMcq = (q) => {
    const opts = shuffle(q.a.map((text, i) => ({ text, ok: i === q.c })));
    return { kind: "mcq", q: q.q, opts, why: q.why, fig: q.fig };
  };
  const toTf = (q) => ({ kind: "tf", q: q.s, opts: [{ text: "True", ok: q.v === true }, { text: "False", ok: q.v === false }], why: q.why, fig: q.fig });
  const qFig = (it) => (it.fig ? WPV.render(it.fig, { compact: true, static: true }) : "");
  const sayBtn = () => (Speech.ok ? `<button class="say-q" id="say-q" aria-label="Read question aloud">${I.speaker}</button>` : "");
  const questionText = (it) => it.q + (it.kind === "tf" ? " True or false?" : " " + it.opts.map((o, k) => `${"ABCD"[k]}: ${o.text}.`).join(" "));

  // Shared engine for multiple choice and true/false.
  function runChoice(items, title, back, finish) {
    items = shuffle(items);
    let i = 0, correct = 0, combo = 0, best = 0;
    const p = P();
    const render = () => {
      const it = items[i];
      $("#app").innerHTML = `<div class="view">${runnerShell(title, i, items.length, `${combo >= 2 ? `<span class="combo mono-num">${I.bolt}×${combo}</span>` : ""}<span class="counter mono-num">${i + 1}/${items.length}</span>`)}
        ${qFig(it)}
        <div class="q-row"><div class="question">${esc(it.q)}</div>${sayBtn()}</div>
        <div class="answers ${it.kind === "tf" ? "tf" : ""}">
          ${it.opts.map((o, k) => `<button class="answer" data-k="${k}">${it.kind === "tf" ? "" : `<span class="key">${"ABCD"[k]}</span>`}<span>${esc(o.text)}</span></button>`).join("")}
        </div>
        <div id="fb"></div></div>`;
      bindQuit(back);
      WPV.mount($("#app"));
      const sq = $("#say-q");
      if (sq) sq.onclick = () => Speech.say(questionText(it));
      if (p.audio.auto) Speech.say(questionText(it));
      $$(".answer").forEach((b) => (b.onclick = () => answer(+b.dataset.k)));
    };
    const answer = (k) => {
      const it = items[i];
      const ok = it.opts[k].ok;
      if (ok) { correct++; combo++; best = Math.max(best, combo); } else { combo = 0; vibrate(60); }
      $$(".answer").forEach((b, j) => {
        b.disabled = true;
        if (it.opts[j].ok) b.classList.add("correct");
        else if (j === k) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      const last = i === items.length - 1;
      $("#fb").innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}"><div class="label">${ok ? (combo >= 2 ? `Correct · ${combo} in a row` : "Correct") : "Not quite"}</div><div>${esc(it.why)}</div></div>
        <div class="runner-cta"><button class="btn primary block" id="nx">${last ? "See results" : "Next"} ${I.chevR}</button></div>`;
      if (p.audio.auto) Speech.say(`${ok ? "Correct." : "Not quite."} ${it.why}`);
      $("#nx").focus({ preventScroll: true });
      $("#nx").scrollIntoView({ behavior: "smooth", block: "nearest" });
      $("#nx").onclick = () => { Speech.stop(); if (last) finish(correct, items.length, best); else { i++; render(); window.scrollTo(0, 0); } };
    };
    render();
  }

  // Flashcards: tap to flip, then self-grade. Missed cards come back once at the end.
  function runFlash(cards, back, finish, opts = {}) {
    let deck = shuffle(cards).map((c) => Object.assign({ retry: false }, c));
    const total = deck.length;
    let i = 0, firstTry = 0;
    const render = () => {
      const c = deck[i];
      $("#app").innerHTML = `<div class="view">${runnerShell(opts.title || "Flashcards", Math.min(i, total), Math.max(total, deck.length), `<span class="counter mono-num">${i + 1}/${deck.length}</span>`)}
        <div class="flash-wrap"><button class="flash" id="card" aria-label="Flip card">
          <div class="face front"><span class="label corner">${c.retry ? "Second look" : "Term"}</span><div class="big">${esc(c.term)}</div><span class="label hint">Tap to reveal</span></div>
          <div class="face back"><span class="label hud corner">Definition</span><div class="def">${esc(c.def)}</div>${c.meta ? `<span class="label hint">${esc(c.meta)}</span>` : ""}</div>
        </button></div>
        <div class="runner-cta" id="grade" style="visibility:hidden">
          <div class="btn-row"><button class="btn" id="again">Still learning</button><button class="btn primary" id="got">Got it ${I.check}</button></div>
        </div></div>`;
      bindQuit(back);
      const card = $("#card");
      card.onclick = () => {
        card.classList.toggle("flipped");
        $("#grade").style.visibility = "visible";
      };
      $("#got").onclick = () => grade(true);
      $("#again").onclick = () => grade(false);
    };
    const grade = (ok) => {
      const c = deck[i];
      if (!c.retry) {
        if (ok) firstTry++;
        if (opts.onGrade) opts.onGrade(c, ok);
      }
      if (!ok && !c.retry) deck.push(Object.assign({}, c, { retry: true }));
      i++;
      if (i >= deck.length) finish(firstTry, total);
      else render();
    };
    render();
  }

  // Match-up: tap a term chip, then the definition it belongs to.
  function runMatch(terms, back, finish) {
    const items = terms.map(([t, d], k) => ({ k, t, d }));
    const chips = shuffle(items);
    const defs = shuffle(items);
    const matched = new Set();
    const missed = new Set();
    let sel = null;
    const render = () => {
      $("#app").innerHTML = `<div class="view">${runnerShell("Match-up", matched.size, items.length, `<span class="counter mono-num">${matched.size}/${items.length}</span>`)}
        <div class="question">Tap a term, then tap its meaning.</div>
        <div class="chips">${chips.map((c) => `<button class="chip ${matched.has(c.k) ? "used" : ""} ${sel === c.k ? "sel" : ""}" data-c="${c.k}">${esc(c.t)}</button>`).join("")}</div>
        <div class="defs">${defs.map((d) => matched.has(d.k)
          ? `<div class="def-card matched"><b>${esc(d.t)}</b>${esc(d.d)}</div>`
          : `<button class="def-card" data-d="${d.k}">${esc(d.d)}</button>`).join("")}</div></div>`;
      bindQuit(back);
      $$("[data-c]").forEach((b) => (b.onclick = () => { sel = +b.dataset.c; render(); }));
      $$("[data-d]").forEach((b) => (b.onclick = () => {
        if (sel === null) { toast("Pick a term first"); return; }
        const k = +b.dataset.d;
        if (k === sel) {
          matched.add(k);
          sel = null;
          if (matched.size === items.length) return finish(items.length - missed.size, items.length);
          render();
        } else {
          missed.add(sel);
          vibrate(60);
          b.classList.remove("shake");
          void b.offsetWidth;
          b.classList.add("shake");
        }
      }));
    };
    render();
  }

  function resultView({ c, n, xp, title, backHref, againHref, nextLabel, note, combo }) {
    const pct = n ? c / n : 1;
    const head = pct === 1 ? "Perfect run" : pct >= 0.8 ? "Strong work" : pct >= 0.5 ? "Good progress" : "Keep at it";
    const sub = pct === 1 ? "Every answer on target." : pct >= 0.8 ? "You've got the core of this." : pct >= 0.5 ? "Review the brief and run it again to lock it in." : "Re-read the brief, then try again — repetition is how it sticks.";
    $("#app").innerHTML = `<div class="view">
      ${topbar(P())}
      ${tracker(3)}
      <div class="result">
        ${scoreRing(pct, `${c}/${n}`)}
        <div class="label accent">Debrief · ${esc(title)}</div>
        <h2>${head}</h2>
        <p class="muted" style="margin-top:6px">${esc(note || sub)}</p>
        ${xp ? `<div class="xp-pill">${I.bolt.replace("<svg", '<svg style="width:16px;height:16px"')} +${xp} XP</div>` : ""}
        ${combo >= 3 ? `<div class="tiny muted" style="margin-top:8px">Best run: ${combo} in a row</div>` : ""}
      </div>
      <div class="btn-row" style="margin-top:24px">
        <a class="btn" href="${againHref}">Run again</a>
        <a class="btn primary" href="${backHref}">${esc(nextLabel)}</a>
      </div>
      <div style="margin-top:10px"><a class="btn ghost block" href="#/">Return to mission</a></div>
    </div>`;
    renderTabs("today");
    window.scrollTo(0, 0);
    animateRing();
    // Re-render on hash change even if the href equals the current hash.
    $$("#app a[href]").forEach((a) => a.addEventListener("click", (e) => {
      if (a.getAttribute("href") === location.hash) { e.preventDefault(); route(); }
    }));
  }

  /* ---------------------------------------------------------
     View: Review (spaced repetition + blitz)
     --------------------------------------------------------- */
  function vReview(sub) {
    const p = P();
    if (sub === "cards") return runReviewCards(p);
    if (sub === "blitz") return runBlitz(p);
    const due = dueCards(p);
    const total = Object.keys(p.cards).length;
    const boxes = [1, 2, 3, 4, 5, 6].map((b) => Object.values(p.cards).filter((c) => c.box === b).length);
    const done = Object.keys(p.lessons).filter((id) => p.lessons[id].done).length;
    view(`${topbar(p)}
      ${pageHead("Memory", "Review")}
      <p class="muted">Cards you know well come back less often. Cards you miss come back tomorrow.</p>
      <section class="section">
        <div class="stats-grid">
          <div class="stat"><span class="label">Due now</span><b class="mono-num" style="color:var(--hud)">${due.length}</b></div>
          <div class="stat"><span class="label">In deck</span><b class="mono-num">${total}</b></div>
        </div>
        ${total ? `<div class="panel" style="margin-top:10px"><div class="label">Memory strength</div>
          <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:10px;align-items:end;height:70px">
          ${boxes.map((n, k) => `<div title="Level ${k + 1}: ${n}" style="background:${k < 2 ? "var(--bad)" : k < 4 ? "var(--accent)" : "var(--ok)"};opacity:${n ? 0.85 : 0.15};height:${Math.max(6, (n / Math.max(...boxes, 1)) * 64)}px;border-radius:2px"></div>`).join("")}
          </div><div class="tiny muted" style="display:flex;justify-content:space-between;margin-top:6px"><span>New</span><span>Mastered</span></div></div>` : ""}
      </section>
      <section class="section">
        <div class="drill-list">
          <a class="drill-opt ${due.length ? "rec" : ""}" href="#/review/cards" style="text-decoration:none;color:inherit">
            <span class="d-ico">${I.review}</span><span><b>Spaced review</b><small>${due.length ? `${Math.min(due.length, 20)} cards this session` : "Nothing due — check back tomorrow"}</small></span><span class="chev">${I.chevR}</span></a>
          <a class="drill-opt" href="#/review/blitz" style="text-decoration:none;color:inherit">
            <span class="d-ico">${I.timer}</span><span><b>Blitz</b><small>${done ? `60-second sprint across your ${done} completed lesson${done === 1 ? "" : "s"}. Best: ${p.stats.blitzBest || 0}` : "Complete a lesson to unlock"}</small></span><span class="chev">${I.chevR}</span></a>
        </div>
      </section>`, "review");
  }
  function runReviewCards(p) {
    const due = shuffle(dueCards(p)).slice(0, 20);
    if (!due.length) {
      view(`${topbar(p)}<a class="back" href="#/review">${I.back} Review</a>
        <div class="empty">${I.okc}<h2 style="color:var(--text);margin-bottom:6px">All clear</h2><p>No cards due. Finish lessons to add cards, and come back tomorrow.</p></div>`, "review");
      return;
    }
    renderTabs(null);
    const cards = due.map((k) => { const c = cardData(k); return c && { key: k, term: c.term, def: c.def, meta: TOPIC_BY_ID[c.lesson.topic].name }; }).filter(Boolean);
    runFlash(cards, "#/review", (c, n) => {
      p.stats.reviews += n;
      const xp = c * XP.reviewPer;
      award(p, xp, "Spaced review");
      checkPatches(p);
      save();
      resultView({ c, n, xp, title: "Spaced review", backHref: "#/review", againHref: "#/review/cards", nextLabel: "Done", note: `${c} card${c === 1 ? "" : "s"} moved up a level. Missed cards return tomorrow.` });
    }, {
      title: "Spaced review",
      onGrade: (card, ok) => {
        const rec = p.cards[card.key];
        rec.box = ok ? Math.min(rec.box + 1, LEITNER_DAYS.length - 1) : 1;
        rec.due = addDays(today(), LEITNER_DAYS[rec.box]);
        save();
      },
    });
  }
  function runBlitz(p) {
    const done = Object.keys(p.lessons).filter((id) => p.lessons[id].done).map((id) => LESSON_BY_ID[id]).filter(Boolean);
    if (!done.length) {
      view(`${topbar(p)}<a class="back" href="#/review">${I.back} Review</a>
        <div class="empty">${I.lock}<h2 style="color:var(--text);margin-bottom:6px">Locked</h2><p>Complete your first lesson to unlock Blitz.</p></div>`, "review");
      return;
    }
    renderTabs(null);
    let pool = [];
    done.forEach((l) => { pool = pool.concat(l.mcq.map(toMcq), l.tf.map(toTf)); });
    pool = shuffle(pool);
    let i = 0, score = 0, answered = 0, left = 60, over = false;
    const end = () => {
      if (over) return;
      over = true;
      cleanupRunner();
      p.stats.answered += answered;
      p.stats.correct += score;
      p.stats.blitzBest = Math.max(p.stats.blitzBest || 0, score);
      const xp = score * XP.blitzPer;
      award(p, xp, `Blitz · ${score} correct`);
      checkPatches(p);
      save();
      resultView({ c: score, n: answered || 1, xp, title: "Blitz", backHref: "#/review", againHref: "#/review/blitz", nextLabel: "Done", note: `${score} correct in 60 seconds. Personal best: ${p.stats.blitzBest}.` });
    };
    const render = () => {
      if (i >= pool.length) { pool = pool.concat(shuffle(pool)); }
      const it = pool[i];
      $("#app").innerHTML = `<div class="view">${runnerShell("Blitz · " + score + " correct", 60 - left, 60, `<span class="timer ${left <= 10 ? "low" : ""}" id="tm">${left}s</span>`)}
        ${qFig(it)}
        <div class="question">${esc(it.q)}</div>
        <div class="answers ${it.kind === "tf" ? "tf" : ""}">
          ${it.opts.map((o, k) => `<button class="answer" data-k="${k}">${it.kind === "tf" ? "" : `<span class="key">${"ABCD"[k]}</span>`}<span>${esc(o.text)}</span></button>`).join("")}
        </div></div>`;
      bindQuit("#/review");
      $$(".answer").forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k;
        const ok = it.opts[k].ok;
        answered++;
        if (ok) score++; else vibrate(60);
        $$(".answer").forEach((x, j) => { x.disabled = true; if (it.opts[j].ok) x.classList.add("correct"); else if (j === k) x.classList.add("wrong"); });
        setTimeout(() => { if (!over) { i++; render(); } }, ok ? 350 : 900);
      }));
    };
    cleanupRunner();
    runnerTimer = setInterval(() => {
      left--;
      const tm = $("#tm");
      if (tm) { tm.textContent = left + "s"; tm.classList.toggle("low", left <= 10); }
      const bar = $(".progress > span");
      if (bar) bar.style.width = ((60 - left) / 60) * 100 + "%";
      if (left <= 0) end();
    }, 1000);
    render();
  }

  /* ---------------------------------------------------------
     View: Library
     --------------------------------------------------------- */
  let libQuery = "";
  function vLibrary() {
    const p = P();
    const doneAll = Object.keys(p.lessons).filter((id) => p.lessons[id].done && LESSON_BY_ID[id]).length;
    view(`${topbar(p)}
      ${pageHead("Pocket university", "Library")}
      <p class="muted">${TOPICS.length} topics · ${TOTAL_LESSONS} lessons · ${doneAll} completed. Read anything, any time — extra lessons earn XP too.</p>
      <input class="input search" id="lib-q" type="search" placeholder="Search lessons…" value="${esc(libQuery)}" autocomplete="off">
      <div id="lib-body"></div>`, "library");
    const body = $("#lib-body");
    const draw = () => {
      const q = libQuery.trim().toLowerCase();
      const match = (l, t) => !q || (l.title + " " + t.name + " " + l.bluf).toLowerCase().includes(q);
      body.innerHTML = FACULTIES.map((f) => {
        const blocks = f.topics.map((tid) => {
          const t = TOPIC_BY_ID[tid];
          const ls = t.lessons.filter((l) => match(l, t));
          if (!ls.length) return "";
          const doneN = t.lessons.filter((l) => p.lessons[l.id] && p.lessons[l.id].done).length;
          const mine = p.interests.includes(t.id);
          return `<details class="panel topic-block" ${q ? "open" : ""}>
            <summary class="tb-banner" style="background-image:url('${topicImg(t.id)}')"><div class="topic-row">${ringIcon(topicIcon(t.id), doneN / t.lessons.length, "sm")}
              <div style="flex:1"><h3>${esc(t.name)} ${mine ? '<span class="tag accent" style="margin-left:6px">Interest</span>' : ""}</h3>
              <div class="tiny muted">${doneN}/${t.lessons.length} complete</div>
              <div class="mini-bar"><span style="width:${(100 * doneN) / t.lessons.length}%"></span></div></div></div></summary>
            <p class="small muted" style="margin-top:12px">${esc(t.blurb)}</p>
            <ul class="lesson-list">${ls.map((l) => {
              const done = p.lessons[l.id] && p.lessons[l.id].done;
              const tdy = isTodayLesson(p, l.id);
              const cls = done ? "done" : tdy ? "today" : "";
              const ic = done ? I.okc : tdy ? I.dot : I.ring;
              return `<li><a class="lesson-link ${cls}" href="#/lesson/${l.id}"><span class="st">${ic}</span><span>${esc(l.title)}</span><span class="lv">${tdy && !done ? "TODAY" : l.minutes + " MIN"}</span></a></li>`;
            }).join("")}</ul>
          </details>`;
        }).join("");
        return blocks ? `<section class="section"><div class="label faculty-name">${esc(f.name)}</div>${blocks}</section>` : "";
      }).join("") || `<div class="empty">No lessons match “${esc(libQuery)}”.</div>`;
    };
    draw();
    $("#lib-q").addEventListener("input", (e) => { libQuery = e.target.value; draw(); });
  }

  /* ---------------------------------------------------------
     View: Logbook (progress)
     --------------------------------------------------------- */
  function vLogbook() {
    const p = P();
    const r = rankFor(p.xp);
    const acc = p.stats.answered ? Math.round((100 * p.stats.correct) / p.stats.answered) + "%" : "—";
    const earned = PATCHES.filter((b) => p.badges[b.id]).length;
    view(`${topbar(p)}
      ${pageHead("Service record", "Logbook")}
      <section style="margin-top:18px">
        <div class="section-head"><h2>Last 12 months</h2><span class="label">${learnDays(p)} days learned</span></div>
        ${activityCard(p, 53, true)}
      </section>
      <div style="height:14px"></div>
      ${hudPanel(p)}
      <div style="height:14px"></div>
      <section class="panel"><div class="statrow four" style="margin-top:0">
        <div class="statcell"><span class="label">Total XP</span><b class="accent">${p.xp}</b></div>
        <div class="statcell"><span class="label">Streak</span><b>${streakNow(p)}<small class="dim">/ ${p.streak.best} best</small></b></div>
        <div class="statcell"><span class="label">Lessons</span><b>${p.stats.lessons}<small class="dim">/${TOTAL_LESSONS}</small></b></div>
        <div class="statcell"><span class="label">Accuracy</span><b>${acc}</b></div>
      </div></section>
      <section class="section">
        <div class="section-head"><h2>Patches</h2><span class="label">${earned}/${PATCHES.length}</span></div>
        <div class="patches">${PATCHES.map((b) => `<div class="patch ${p.badges[b.id] ? "" : "locked"}"><div class="p-ico">${patchIcon(b.id, !!p.badges[b.id])}</div><b>${b.name}</b><small>${b.desc}</small></div>`).join("")}</div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Rank ladder</h2></div>
        <div class="panel"><ul class="ladder">${RANKS.map((x, i) => `<li class="${i === r.i ? "cur" : i < r.i ? "past" : "future"}"><span>${i === r.i ? "▸ " : ""}${x.name}</span><span class="mono-num">${x.xp} XP</span></li>`).join("")}</ul></div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Recent activity</h2></div>
        <div class="panel">${p.log.length ? `<ul class="log">${p.log.slice(0, 15).map((e) => `<li><span><span class="tiny muted">${e.d.slice(5)}</span>&nbsp; ${esc(e.t)}</span><span class="xp">+${e.xp}</span></li>`).join("")}</ul>` : `<p class="muted small">No activity yet. Complete today's mission to start your log.</p>`}</div>
      </section>`, "logbook");
    bindGrid($("#app"));
  }

  /* ---------------------------------------------------------
     View: Profile & settings
     --------------------------------------------------------- */
  function vProfile() {
    const p = P();
    const r = rankFor(p.xp);
    view(`${topbar(p)}
      ${pageHead("Pilot profile", p.callsign)}
      <section class="panel brackets" style="display:flex;gap:16px;align-items:center">
        <span class="insignia lg">${INSIGNIA[p.insignia]}</span>
        <div><div class="label">Callsign</div><div class="hud-title">${esc(p.callsign)}</div><div class="small muted">${r.cur.name} · since ${p.created}</div></div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Personalise</h2></div>
        <div class="panel">
          <div class="label">Interests</div>
          <div class="meta-row" style="margin-top:8px">${p.interests.map((id) => `<span class="tag hud">${esc(TOPIC_BY_ID[id].name)}</span>`).join("")}</div>
          <div class="label" style="margin-top:16px">Preferred drill</div><div style="margin-top:4px">${DRILLS[p.drill].name}</div>
          <div style="margin-top:16px"><a class="btn block" href="#/edit/1">Edit profile &amp; interests</a></div>
        </div>
        <div class="panel">
          <div class="label" style="margin-bottom:8px">Display</div>
          <div class="seg"><button data-mode-theme="dark" aria-pressed="${p.theme === "dark"}">Dark</button><button data-mode-theme="light" aria-pressed="${p.theme === "light"}">Light</button></div>
        </div>
      </section>
      ${Speech.ok ? `<section class="section">
        <div class="section-head"><h2>Audio</h2></div>
        <div class="panel">
          <p class="muted small" style="margin-bottom:12px">Every lesson has a Listen button. Text always stays on screen, so you can read, listen, or both.</p>
          <div class="label" style="margin-bottom:8px">Reading speed</div>
          <div class="seg">${[0.9, 1, 1.15, 1.3, 1.5].map((r) => `<button data-rate="${r}" aria-pressed="${p.audio.rate === r}">${r}×</button>`).join("")}</div>
          <label class="label" for="voice" style="display:block;margin:16px 0 8px">Voice</label>
          <select class="input" id="voice"><option value="">Automatic (best available)</option></select>
          <div class="toggle-row"><span><b>Read quiz questions aloud</b><small>Questions, answers and feedback</small></span>
            <div class="seg sm"><button data-auto="1" aria-pressed="${!!p.audio.auto}">On</button><button data-auto="0" aria-pressed="${!p.audio.auto}">Off</button></div></div>
          <div class="toggle-row"><span><b>Narrate animations</b><small>When you press Play on an animated figure</small></span>
            <div class="seg sm"><button data-narr="1" aria-pressed="${!!p.audio.narrate}">On</button><button data-narr="0" aria-pressed="${!p.audio.narrate}">Off</button></div></div>
          <button class="btn ghost" id="voice-test" style="margin-top:14px">${I.speaker} Test voice</button>
        </div>
      </section>` : ""}
      <section class="section">
        <div class="section-head"><h2>Profiles</h2></div>
        <div class="btn-row"><a class="btn" href="#/pilots">Switch profile</a><a class="btn" href="#/setup">${I.plus} New</a></div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Backup</h2></div>
        <p class="muted small" style="margin-bottom:12px">Progress is stored in this browser. Export a backup file to move it to another device.</p>
        <div class="btn-row"><button class="btn" id="export">Export</button><button class="btn" id="import">Import</button></div>
        <input type="file" id="file" accept="application/json,.json" hidden>
      </section>
      <section class="section">
        <div class="section-head"><h2>Danger zone</h2></div>
        <button class="btn danger block" id="delete">Delete this profile</button>
      </section>
      <p class="footer-note">Waypoint · ${TOPICS.length} topics · ${TOTAL_LESSONS} lessons</p>`, "profile");

    $$("[data-mode-theme]").forEach((b) => (b.onclick = () => { p.theme = b.dataset.modeTheme; save(); applyTheme(); vProfile(); }));
    $$("[data-rate]").forEach((b) => (b.onclick = () => { p.audio.rate = +b.dataset.rate; save(); $$("[data-rate]").forEach((x) => x.setAttribute("aria-pressed", x === b)); }));
    $$("[data-auto]").forEach((b) => (b.onclick = () => { p.audio.auto = b.dataset.auto === "1"; save(); $$("[data-auto]").forEach((x) => x.setAttribute("aria-pressed", x === b)); }));
    $$("[data-narr]").forEach((b) => (b.onclick = () => { p.audio.narrate = b.dataset.narr === "1"; WPV.narrate = p.audio.narrate; save(); $$("[data-narr]").forEach((x) => x.setAttribute("aria-pressed", x === b)); }));
    const vs = $("#voice");
    if (vs) {
      // Voices load asynchronously in some browsers.
      const fill = () => {
        vs.innerHTML = `<option value="">Automatic (best available)</option>` + Speech.voices().map((v) => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === p.audio.voice ? "selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("");
      };
      fill();
      if (!Speech.voices().length) setTimeout(fill, 600);
      vs.onchange = () => { p.audio.voice = vs.value; save(); };
      $("#voice-test").onclick = () => Speech.say("Learn something new every day. One percent better, compounding.");
    }
    $("#export").onclick = () => {
      const blob = new Blob([JSON.stringify({ app: "waypoint", version: 1, profile: p }, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `waypoint-${p.callsign.toLowerCase().replace(/\s+/g, "-")}-${today()}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    };
    $("#import").onclick = () => $("#file").click();
    $("#file").onchange = async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        const imp = data && data.app === "waypoint" && data.profile;
        if (!imp || !imp.callsign) throw new Error("bad file");
        const np = normalise(imp);
        if (!np.id) np.id = uid();
        else if (db.profiles[np.id] && !confirm(`Replace existing profile "${db.profiles[np.id].callsign}" with this backup?`)) np.id = uid();
        db.profiles[np.id] = np;
        db.active = np.id;
        save();
        applyTheme();
        toast("Backup imported");
        go("#/");
      } catch (err) {
        toast("That file isn't a Waypoint backup");
      }
    };
    $("#delete").onclick = () => {
      if (!confirm(`Delete profile "${p.callsign}" and all its progress? This can't be undone.`)) return;
      delete db.profiles[p.id];
      db.active = Object.keys(db.profiles)[0] || null;
      save();
      applyTheme();
      go(db.active ? "#/pilots" : "#/welcome");
    };
  }

  /* ---------------------------------------------------------
     Router
     --------------------------------------------------------- */
  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }
  function route() {
    cleanupRunner();
    Reader.close();
    WPV.stopAll();
    Speech.stop();
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    const [r, a, b] = parts;
    const p = P();
    applyTheme();
    WPV.narrate = !!(p && p.audio.narrate);
    if (r !== "setup" && r !== "edit") draft = null;
    if (!p) {
      if (r === "setup") return vSetup(a, false);
      if (r === "pilots" && Object.keys(db.profiles).length) return vPilots();
      return vWelcome();
    }
    switch (r) {
      case "": return vHome();
      case "lesson": return vLesson(a);
      case "drill": return vDrill(a);
      case "run": return vRun(a, b);
      case "review": return vReview(a);
      case "library": return vLibrary();
      case "logbook": return vLogbook();
      case "profile": return vProfile();
      case "edit": return vSetup(a, true);
      case "setup": return vSetup(a, false);
      case "pilots": return vPilots();
      case "welcome": return vWelcome();
      default: return vHome();
    }
  }
  window.addEventListener("hashchange", route);
  // Lets iOS apply :active styles on touch-down (instant press feedback).
  document.addEventListener("touchstart", () => {}, { passive: true });
  route();

  // Offline support (only when served over http/https).
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
