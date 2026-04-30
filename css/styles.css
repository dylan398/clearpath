@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400;1,9..40,300&display=swap');

/* ═══════════════════════════════════════════════════════════════
   RESET
═══════════════════════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--t1);
  font-family: var(--font-b);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }
button { cursor: pointer; font-family: inherit; border: none; background: none; }

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════════ */
:root {
  /* Backgrounds */
  --bg:          #090c14;
  --bg-2:        #0e1220;
  --bg-3:        #141929;
  --bg-card:     #1a2135;
  --bg-card-2:   #1f2840;
  --bg-hover:    #222d46;

  /* Borders */
  --border:      #1c2540;
  --border-hi:   #28335a;
  --border-accent: rgba(223, 124, 56, 0.25);

  /* Brand */
  --orange:      #e07c38;
  --orange-dim:  #b8621e;
  --orange-lt:   rgba(224, 124, 56, 0.1);
  --orange-glow: rgba(224, 124, 56, 0.06);
  --orange-2:    #f09040;
  --gold:        #c9a84c;

  /* Semantic */
  --green:  #3ecf8e;
  --red:    #e05252;
  --blue:   #4a9eff;
  --warn:   #f0b429;

  /* Text */
  --t1: #edf0fa;
  --t2: #8494b4;
  --t3: #48576e;
  --t4: #2d3a52;

  /* Typography */
  --font-d: 'Syne', sans-serif;
  --font-b: 'DM Sans', sans-serif;

  /* Layout */
  --nav-h:    70px;
  --topbar-h: 36px;
  --max:      1200px;
  --max-wide: 1400px;

  /* Effects */
  --shadow-card: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-lift: 0 12px 40px rgba(0,0,0,0.5);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.22, 1.2, 0.36, 1);
}

/* ═══════════════════════════════════════════════════════════════
   SCROLLBAR
═══════════════════════════════════════════════════════════════ */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border-hi); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--t3); }

/* ═══════════════════════════════════════════════════════════════
   TOP BAR
═══════════════════════════════════════════════════════════════ */
.topbar {
  height: var(--topbar-h);
  background: var(--bg-2);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 200;
}
.topbar-inner {
  max-width: var(--max);
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topbar-left {
  display: flex;
  align-items: center;
  gap: 24px;
}
.topbar-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  color: var(--t3);
  letter-spacing: 0.04em;
  transition: color 200ms;
}
.topbar-item:hover { color: var(--t2); }
.topbar-item svg { flex-shrink: 0; }
.topbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.topbar-assoc {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t4);
  display: flex;
  align-items: center;
  gap: 16px;
}
.topbar-assoc span {
  padding: 3px 8px;
  border: 1px solid var(--border-hi);
  color: var(--t3);
  transition: border-color 200ms, color 200ms;
}
.topbar-assoc span:hover { border-color: var(--border-accent); color: var(--t2); }

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════════ */
.nav {
  position: sticky;
  top: var(--topbar-h);
  z-index: 190;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: rgba(9, 12, 20, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 300ms;
}
.nav.elevated { box-shadow: 0 4px 32px rgba(0,0,0,0.4); }

.nav-inner {
  max-width: var(--max);
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
  flex-shrink: 0;
}
.nav-logo-mark { width: 34px; height: 34px; flex-shrink: 0; }
.nav-logo-name {
  font-family: var(--font-d);
  font-weight: 800;
  font-size: 19px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--t1);
  line-height: 1;
}
.nav-logo-sub {
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--t3);
  margin-top: 3px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-links a {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--t2);
  padding: 8px 14px;
  border-radius: 2px;
  transition: color 200ms, background 200ms;
}
.nav-links a:hover { color: var(--t1); background: var(--bg-card); }
.nav-links a.active { color: var(--t1); }

.btn-nav {
  background: var(--orange) !important;
  color: #fff !important;
  padding: 9px 20px !important;
  font-weight: 700 !important;
  letter-spacing: 0.06em !important;
  transition: background 200ms, transform 200ms !important;
  margin-left: 8px;
}
.btn-nav:hover {
  background: var(--orange-dim) !important;
  transform: translateY(-1px) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  background: none;
  border: none;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--t2);
  transition: all 220ms;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.nav-drawer {
  display: none;
  position: fixed;
  top: calc(var(--topbar-h) + var(--nav-h));
  left: 0; right: 0;
  background: var(--bg-2);
  border-bottom: 1px solid var(--border);
  padding: 8px 20px 20px;
  z-index: 188;
  animation: drawerSlide 220ms var(--ease-out);
}
@keyframes drawerSlide {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.nav-drawer.open { display: block; }
.nav-drawer a {
  display: block;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
  font-weight: 500;
  color: var(--t2);
  letter-spacing: 0.04em;
  transition: color 150ms;
}
.nav-drawer a:hover { color: var(--t1); }
.nav-drawer a.cta-drawer { color: var(--orange); font-weight: 700; border-bottom: none; }

/* ═══════════════════════════════════════════════════════════════
   BUTTONS
═══════════════════════════════════════════════════════════════ */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--orange);
  color: #fff;
  padding: 15px 30px;
  font-family: var(--font-b);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  transition: background 200ms, transform 200ms, box-shadow 200ms;
  flex-shrink: 0;
}
.btn-primary:hover {
  background: var(--orange-dim);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(224, 124, 56, 0.3);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--t2);
  padding: 15px 0;
  font-family: var(--font-b);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid var(--border-hi);
  transition: color 200ms, border-color 200ms;
}
.btn-secondary:hover { color: var(--t1); border-color: var(--t2); }
.btn-secondary .arrow { transition: transform 200ms; }
.btn-secondary:hover .arrow { transform: translateX(4px); }

.btn-white {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: var(--orange);
  padding: 15px 30px;
  font-family: var(--font-b);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform 200ms, box-shadow 200ms;
}
.btn-white:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(0,0,0,0.25); }

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #fff;
  padding: 14px 28px;
  font-family: var(--font-b);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.4);
  transition: background 200ms, border-color 200ms;
}
.btn-outline:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }

/* ═══════════════════════════════════════════════════════════════
   HERO — HOMEPAGE (SPLIT LAYOUT)
═══════════════════════════════════════════════════════════════ */
.hero {
  min-height: calc(100vh - var(--topbar-h) - var(--nav-h));
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: var(--bg);
}

/* Animated grid background */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(224, 124, 56, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(224, 124, 56, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  animation: gridDrift 80s linear infinite;
  pointer-events: none;
}
@keyframes gridDrift {
  from { background-position: 0 0; }
  to   { background-position: 72px 72px; }
}

/* Radial glow */
.hero::after {
  content: '';
  position: absolute;
  top: -20%; left: -10%;
  width: 70%;
  height: 140%;
  background: radial-gradient(ellipse at center,
    rgba(224, 124, 56, 0.05) 0%,
    transparent 65%);
  pointer-events: none;
  animation: glowBreath 10s ease-in-out infinite alternate;
}
@keyframes glowBreath {
  from { opacity: 0.5; }
  to   { opacity: 1; }
}

.hero-left {
  padding: 80px 64px 80px 40px;
  max-width: 680px;
  margin-left: auto;
  position: relative;
  z-index: 1;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeUp 700ms 150ms var(--ease-out) forwards;
}
.hero-eyebrow::before {
  content: '';
  display: block;
  width: 32px;
  height: 1px;
  background: var(--orange);
}

.hero-title {
  font-family: var(--font-d);
  font-weight: 800;
  font-size: clamp(44px, 5.5vw, 80px);
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--t1);
  margin-bottom: 28px;
  opacity: 0;
  animation: fadeUp 700ms 280ms var(--ease-out) forwards;
}
.hero-title em {
  font-style: normal;
  color: var(--orange);
  display: block;
}

.hero-body {
  font-size: 17px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeUp 700ms 420ms var(--ease-out) forwards;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 700ms 550ms var(--ease-out) forwards;
}

.hero-proof {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 56px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 700ms 680ms var(--ease-out) forwards;
}
.hero-proof-item {}
.hero-proof-val {
  font-family: var(--font-d);
  font-size: 26px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1;
  margin-bottom: 3px;
}
.hero-proof-label {
  font-size: 11px;
  color: var(--t3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Right side — demo panel */
.hero-right {
  position: relative;
  z-index: 1;
  padding: 60px 40px 60px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  animation: fadeLeft 800ms 400ms var(--ease-out) forwards;
}

@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* The actual demo bid-leveling panel */
.demo-panel {
  background: var(--bg-card);
  border: 1px solid var(--border-hi);
  width: 100%;
  max-width: 560px;
  box-shadow: var(--shadow-lift);
  position: relative;
  overflow: hidden;
}
.demo-panel::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--orange), var(--orange-2));
}

.demo-panel-header {
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.demo-panel-project {
  font-family: var(--font-d);
  font-size: 14px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 4px;
  line-height: 1.2;
}
.demo-panel-meta {
  font-size: 11px;
  color: var(--t3);
  letter-spacing: 0.04em;
}
.demo-status-badge {
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  background: rgba(62, 207, 142, 0.12);
  border: 1px solid rgba(62, 207, 142, 0.3);
  color: var(--green);
}

.demo-table-wrap {
  overflow-x: auto;
}
.demo-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}
.demo-table th {
  background: var(--bg-3);
  padding: 10px 14px;
  text-align: right;
  font-family: var(--font-d);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t3);
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.demo-table th:first-child { text-align: left; width: 38%; }
.demo-table td {
  padding: 10px 14px;
  text-align: right;
  font-family: var(--font-b);
  font-size: 12px;
  font-weight: 400;
  color: var(--t2);
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.demo-table td:first-child { text-align: left; color: var(--t1); font-weight: 500; }
.demo-table tr:last-child td { border-bottom: none; }
.demo-table tr:hover td { background: rgba(255,255,255,0.02); }

.demo-val-good { color: var(--green) !important; font-weight: 600 !important; }
.demo-val-warn { color: var(--warn) !important; }
.demo-val-miss {
  color: var(--red) !important;
  font-style: italic;
  font-size: 11px !important;
}

.demo-table-total td {
  border-top: 2px solid var(--border-hi);
  font-family: var(--font-d) !important;
  font-weight: 700 !important;
  font-size: 13px !important;
  color: var(--t1) !important;
  padding-top: 13px !important;
  background: var(--bg-3);
}
.demo-table-total td:first-child { text-transform: uppercase; letter-spacing: 0.06em; }

.demo-flag {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(224, 82, 82, 0.06);
  border-top: 1px solid rgba(224, 82, 82, 0.2);
  font-size: 11px;
  color: var(--t2);
  line-height: 1.5;
}
.demo-flag-icon { color: var(--red); font-size: 13px; flex-shrink: 0; margin-top: 1px; }

.demo-recommend {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(62, 207, 142, 0.06);
  border-top: 1px solid rgba(62, 207, 142, 0.15);
  font-size: 11px;
  color: var(--t2);
  line-height: 1.5;
}
.demo-recommend-icon { color: var(--green); flex-shrink: 0; margin-top: 1px; }
.demo-recommend strong { color: var(--green); }

.demo-label {
  position: absolute;
  bottom: -1px;
  right: -1px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-right: none;
  border-bottom: none;
  padding: 5px 12px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--t3);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ═══════════════════════════════════════════════════════════════
   STATS STRIP
═══════════════════════════════════════════════════════════════ */
.stats-strip {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 0 40px;
}
.stats-strip-inner {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.stat-item {
  padding: 32px 24px;
  border-right: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 18px;
  transition: background 200ms;
}
.stat-item:last-child { border-right: none; }
.stat-item:hover { background: rgba(255,255,255,0.02); }
.stat-icon { color: var(--orange); flex-shrink: 0; }
.stat-content {}
.stat-val {
  font-family: var(--font-d);
  font-size: 28px;
  font-weight: 800;
  color: var(--t1);
  line-height: 1;
  margin-bottom: 4px;
}
.stat-desc {
  font-size: 12px;
  color: var(--t3);
  letter-spacing: 0.04em;
  line-height: 1.4;
}

/* ═══════════════════════════════════════════════════════════════
   LAYOUT UTILITIES
═══════════════════════════════════════════════════════════════ */
section { padding: 96px 40px; }
.section-inner { max-width: var(--max); margin: 0 auto; }
.section-inner-wide { max-width: var(--max-wide); margin: 0 auto; }

.eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 14px;
}
.eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--orange);
  flex-shrink: 0;
}

.section-title {
  font-family: var(--font-d);
  font-weight: 700;
  font-size: clamp(28px, 4vw, 50px);
  line-height: 1.05;
  color: var(--t1);
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}
.section-body {
  font-size: 16px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.75;
  max-width: 560px;
}
.section-header { margin-bottom: 56px; }

/* ═══════════════════════════════════════════════════════════════
   PROBLEM SECTION
═══════════════════════════════════════════════════════════════ */
.problem-section { background: var(--bg); }
.problem-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.problem-statement {
  font-family: var(--font-d);
  font-size: clamp(22px, 2.8vw, 32px);
  font-weight: 600;
  color: var(--t1);
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin-bottom: 28px;
}
.problem-statement em { font-style: normal; color: var(--orange); }
.problem-body {
  font-size: 15px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.8;
  margin-bottom: 20px;
}
.problem-cards { display: flex; flex-direction: column; gap: 2px; }
.problem-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--border);
  padding: 24px 24px 24px 20px;
  transition: border-left-color 300ms, background 300ms;
}
.problem-card:hover { border-left-color: var(--orange); background: var(--bg-card-2); }
.problem-card-title {
  font-family: var(--font-d);
  font-size: 15px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 6px;
}
.problem-card-body {
  font-size: 13px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.65;
}
.problem-fix {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 10px;
  font-size: 12px;
  color: var(--green);
  font-weight: 500;
}
.problem-fix::before { content: '→'; flex-shrink: 0; }

/* ═══════════════════════════════════════════════════════════════
   SERVICES SECTION
═══════════════════════════════════════════════════════════════ */
.services-section { background: var(--bg-2); }
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: var(--border);
  border: 2px solid var(--border);
}
.service-card {
  background: var(--bg-card);
  padding: 40px 32px 36px;
  position: relative;
  overflow: hidden;
  transition: background 300ms;
}
.service-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--orange);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 400ms var(--ease-out);
}
.service-card:hover::after { transform: scaleX(1); }
.service-card:hover { background: var(--bg-card-2); }

.service-num {
  font-family: var(--font-d);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--t4);
  margin-bottom: 18px;
  text-transform: uppercase;
}
.service-icon {
  color: var(--orange);
  margin-bottom: 20px;
  transition: transform 300ms var(--ease-spring);
}
.service-card:hover .service-icon { transform: translateY(-4px); }
.service-title {
  font-family: var(--font-d);
  font-size: 20px;
  font-weight: 700;
  color: var(--t1);
  line-height: 1.2;
  margin-bottom: 12px;
}
.service-body {
  font-size: 14px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.7;
  margin-bottom: 24px;
}
.service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--orange);
  text-decoration: none;
  transition: gap 200ms;
}
.service-card:hover .service-link { gap: 12px; }

/* ═══════════════════════════════════════════════════════════════
   PROJECT TYPES
═══════════════════════════════════════════════════════════════ */
.project-types-section { background: var(--bg); }
.project-types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 56px;
}
.project-type-card {
  background: var(--bg-3);
  border: 1px solid var(--border);
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  transition: border-color 300ms, transform 300ms;
}
.project-type-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
}
.pt-icon {
  width: 48px;
  height: 48px;
  background: var(--orange-lt);
  border: 1px solid var(--border-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange);
  margin-bottom: 20px;
  transition: background 300ms;
}
.project-type-card:hover .pt-icon { background: rgba(224, 124, 56, 0.15); }
.pt-title {
  font-family: var(--font-d);
  font-size: 17px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 8px;
}
.pt-body {
  font-size: 13px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.65;
}

/* ═══════════════════════════════════════════════════════════════
   PROCESS
═══════════════════════════════════════════════════════════════ */
.process-section { background: var(--bg-2); }
.process-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
  margin-top: 64px;
  gap: 2px;
  background: var(--border);
  border: 1px solid var(--border);
}
.process-step {
  background: var(--bg-card);
  padding: 32px 24px;
  transition: background 300ms;
}
.process-step:hover { background: var(--bg-card-2); }
.step-num {
  font-family: var(--font-d);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--orange);
  margin-bottom: 20px;
}
.step-title {
  font-family: var(--font-d);
  font-size: 16px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 10px;
  line-height: 1.2;
}
.step-body {
  font-size: 13px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.65;
}
.step-timing {
  display: inline-block;
  margin-top: 14px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t3);
  padding: 3px 8px;
  background: var(--bg-3);
  border: 1px solid var(--border-hi);
}

/* ═══════════════════════════════════════════════════════════════
   DIFFERENTIATORS / WHY CLEARPATH
═══════════════════════════════════════════════════════════════ */
.why-section { background: var(--bg); }
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: var(--border);
  border: 1px solid var(--border);
  margin-top: 56px;
}
.why-card {
  background: var(--bg-3);
  padding: 40px 32px;
  position: relative;
  overflow: hidden;
}
.why-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--orange), transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms var(--ease-out);
}
.why-card:hover::before { transform: scaleX(1); }
.why-bg-num {
  position: absolute;
  bottom: -10px; right: 12px;
  font-family: var(--font-d);
  font-weight: 800;
  font-size: 110px;
  color: var(--bg-card);
  line-height: 1;
  pointer-events: none;
  user-select: none;
  transition: color 300ms;
}
.why-card:hover .why-bg-num { color: var(--border-hi); }
.why-icon { color: var(--orange); margin-bottom: 20px; position: relative; z-index: 1; }
.why-title {
  font-family: var(--font-d);
  font-size: 21px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}
.why-body {
  font-size: 14px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════════ */
.testimonials-section { background: var(--bg-2); }
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 56px;
}
.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 36px 32px;
  position: relative;
  transition: border-color 300ms, transform 300ms;
}
.testimonial-card:hover { border-color: var(--border-accent); transform: translateY(-3px); }
.testimonial-quote {
  font-size: 36px;
  line-height: 1;
  color: var(--orange);
  font-family: Georgia, serif;
  margin-bottom: 16px;
  opacity: 0.6;
}
.testimonial-body {
  font-size: 15px;
  font-weight: 300;
  color: var(--t1);
  line-height: 1.75;
  margin-bottom: 28px;
  font-style: italic;
}
.testimonial-divider {
  width: 32px;
  height: 2px;
  background: var(--orange);
  margin-bottom: 16px;
}
.testimonial-author {
  font-family: var(--font-d);
  font-size: 13px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 2px;
}
.testimonial-role {
  font-size: 12px;
  color: var(--t3);
  letter-spacing: 0.04em;
}
.testimonial-stars {
  position: absolute;
  top: 28px;
  right: 28px;
  display: flex;
  gap: 3px;
  color: var(--gold);
  font-size: 11px;
}

/* ═══════════════════════════════════════════════════════════════
   SERVICE AREA
═══════════════════════════════════════════════════════════════ */
.area-section { background: var(--bg); }
.area-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.county-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: var(--border);
  border: 1px solid var(--border);
  margin-top: 32px;
}
.county-cell {
  background: var(--bg-card);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background 200ms;
  cursor: default;
}
.county-cell:hover { background: var(--bg-hover); }
.county-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }
.county-name { font-size: 13px; font-weight: 600; color: var(--t1); line-height: 1.2; }
.county-sub { font-size: 11px; color: var(--t3); margin-top: 2px; }
.area-note {
  margin-top: 20px;
  padding: 16px 20px;
  border-left: 3px solid var(--orange);
  background: var(--orange-lt);
  font-size: 13px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.65;
}
.area-panel {
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-top: 3px solid var(--orange);
  position: sticky;
  top: calc(var(--topbar-h) + var(--nav-h) + 24px);
}
.area-panel-title {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-d);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--t3);
}
.area-panel-body { padding: 24px; }

/* ═══════════════════════════════════════════════════════════════
   CTA SECTION
═══════════════════════════════════════════════════════════════ */
.cta-section {
  background: var(--orange);
  padding: 88px 40px;
  position: relative;
  overflow: hidden;
}
.cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  pointer-events: none;
}
.cta-section::after {
  content: '';
  position: absolute;
  top: -200px; right: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%);
  pointer-events: none;
}
.cta-inner {
  max-width: var(--max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.cta-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin-bottom: 10px;
}
.cta-title {
  font-family: var(--font-d);
  font-weight: 800;
  font-size: clamp(24px, 3.5vw, 46px);
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════ */
footer {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  padding: 72px 40px 0;
}
.footer-inner { max-width: var(--max); margin: 0 auto; }
.footer-top {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 0;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
  margin-bottom: 16px;
}
.footer-logo-name {
  font-family: var(--font-d);
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--t1);
}
.footer-logo-sub {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--t3);
  margin-top: 3px;
}
.footer-tagline {
  font-size: 13px;
  font-weight: 300;
  color: var(--t3);
  line-height: 1.65;
  max-width: 300px;
  margin-bottom: 20px;
}
.footer-assoc {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4px;
}
.footer-assoc-badge {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t3);
  padding: 4px 9px;
  border: 1px solid var(--border-hi);
  transition: border-color 200ms, color 200ms;
}
.footer-assoc-badge:hover { border-color: var(--border-accent); color: var(--t2); }
.footer-col-title {
  font-family: var(--font-d);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--t3);
  margin-bottom: 16px;
}
.footer-col a, .footer-col p {
  display: block;
  font-size: 13px;
  font-weight: 300;
  color: var(--t2);
  margin-bottom: 10px;
  transition: color 200ms;
  line-height: 1.4;
}
.footer-col a:hover { color: var(--orange); }
.footer-bottom {
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: var(--t3);
  flex-wrap: wrap;
  gap: 12px;
  border-top: 1px solid var(--border);
}

/* ═══════════════════════════════════════════════════════════════
   PAGE HERO — INNER PAGES
═══════════════════════════════════════════════════════════════ */
.page-hero {
  padding: 72px 40px;
  background: var(--bg-2);
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(224, 124, 56, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(224, 124, 56, 0.025) 1px, transparent 1px);
  background-size: 56px 56px;
}
.page-hero::after {
  content: '';
  position: absolute;
  top: -150px; right: -150px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(224, 124, 56, 0.05) 0%, transparent 65%);
}
.page-hero-inner { max-width: var(--max); margin: 0 auto; position: relative; z-index: 1; }
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t3);
  margin-bottom: 20px;
}
.breadcrumb a:hover { color: var(--orange); }
.page-hero-title {
  font-family: var(--font-d);
  font-weight: 800;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.0;
  color: var(--t1);
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}
.page-hero-body {
  font-size: 17px;
  font-weight: 300;
  color: var(--t2);
  max-width: 560px;
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES DETAIL PAGE
═══════════════════════════════════════════════════════════════ */
.services-detail-wrap { padding: 0 40px 96px; }
.services-detail-inner { max-width: var(--max); margin: 0 auto; }
.service-detail-item {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 72px;
  align-items: start;
  padding: 72px 0;
  border-bottom: 1px solid var(--border);
}
.service-detail-item:first-child { padding-top: 80px; }
.service-detail-item:last-child { border-bottom: none; }
.sdl-num {
  font-family: var(--font-d);
  font-weight: 800;
  font-size: 96px;
  color: var(--bg-3);
  line-height: 1;
  transition: color 300ms;
}
.service-detail-item:hover .sdl-num { color: var(--border-hi); }
.sdl-tag {
  display: inline-flex;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--orange);
  border: 1px solid var(--orange);
  padding: 4px 10px;
  margin-top: 8px;
}
.sdr-title {
  font-family: var(--font-d);
  font-size: 32px;
  font-weight: 700;
  color: var(--t1);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 20px;
}
.sdr-body {
  font-size: 15px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.8;
  margin-bottom: 20px;
}
.includes-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--t3);
  margin-bottom: 14px;
  margin-top: 12px;
}
.includes-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.5;
}
.includes-list li:last-child { border-bottom: none; }
.includes-list li::before { content: '→'; color: var(--orange); font-size: 12px; flex-shrink: 0; font-weight: 700; margin-top: 2px; }

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════════════════ */
.about-section { background: var(--bg); }
.about-section.alt { background: var(--bg-2); }
.about-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.about-statement {
  font-family: var(--font-d);
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 600;
  color: var(--t1);
  line-height: 1.4;
  letter-spacing: -0.01em;
  margin-bottom: 24px;
}
.about-statement em { font-style: normal; color: var(--orange); }
.about-body { font-size: 15px; font-weight: 300; color: var(--t2); line-height: 1.8; margin-bottom: 20px; }
.about-principles { border: 1px solid var(--border); background: var(--bg-3); margin-top: 40px; }
.principle-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 22px 24px;
  border-bottom: 1px solid var(--border);
  transition: background 200ms;
}
.principle-row:last-child { border-bottom: none; }
.principle-row:hover { background: var(--bg-card); }
.principle-marker {
  width: 32px; height: 32px;
  background: var(--orange-lt);
  border: 1px solid var(--border-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange);
  font-family: var(--font-d);
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}
.principle-title { font-family: var(--font-d); font-size: 15px; font-weight: 700; color: var(--t1); margin-bottom: 4px; }
.principle-body { font-size: 13px; font-weight: 300; color: var(--t2); line-height: 1.6; }
.about-visual { position: sticky; top: calc(var(--topbar-h) + var(--nav-h) + 24px); }
.about-stat-card {
  background: var(--bg-3);
  border: 1px solid var(--border);
  padding: 28px 32px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: background 200ms;
}
.about-stat-card:hover { background: var(--bg-card); }
.about-stat-label { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--t3); margin-bottom: 6px; }
.about-stat-val { font-family: var(--font-d); font-size: 24px; font-weight: 700; color: var(--t1); line-height: 1; }
.about-stat-note { font-size: 12px; font-weight: 300; color: var(--t3); margin-top: 3px; }
.about-stat-icon { color: var(--orange); flex-shrink: 0; }

/* ═══════════════════════════════════════════════════════════════
   CONTACT PAGE
═══════════════════════════════════════════════════════════════ */
.contact-section { background: var(--bg); }
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.7fr;
  gap: 72px;
  align-items: start;
}
.contact-card {
  background: var(--bg-3);
  border: 1px solid var(--border);
  padding: 28px 32px;
  margin-bottom: 2px;
  transition: border-color 200ms;
}
.contact-card:hover { border-color: var(--border-accent); }
.contact-card-label { font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--t3); margin-bottom: 6px; }
.contact-card-value { font-family: var(--font-d); font-size: 17px; font-weight: 700; color: var(--t1); }
.contact-card-sub { font-size: 12px; font-weight: 300; color: var(--t3); margin-top: 3px; }
.contact-next {
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-left: 3px solid var(--orange);
  padding: 24px;
  margin-top: 24px;
}
.contact-next-title { font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--t3); margin-bottom: 14px; }
.contact-next-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 9px 0;
  font-size: 13px;
  font-weight: 300;
  color: var(--t2);
  line-height: 1.5;
  border-bottom: 1px solid var(--border);
}
.contact-next-step:last-child { border-bottom: none; }
.contact-next-num { font-family: var(--font-d); font-size: 11px; font-weight: 700; color: var(--orange); min-width: 20px; flex-shrink: 0; margin-top: 1px; }
.form-title { font-family: var(--font-d); font-size: 22px; font-weight: 700; color: var(--t1); margin-bottom: 28px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group { margin-bottom: 16px; }
.form-label { display: block; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--t3); margin-bottom: 8px; }
.form-label span { color: var(--orange); }
.form-control {
  width: 100%;
  background: var(--bg-3);
  border: 1px solid var(--border-hi);
  color: var(--t1);
  padding: 13px 16px;
  font-family: var(--font-b);
  font-size: 15px;
  font-weight: 300;
  outline: none;
  transition: border-color 200ms, background 200ms;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
}
.form-control::placeholder { color: var(--t3); }
.form-control:focus { border-color: var(--orange); background: var(--bg-card); }
.form-control.error { border-color: var(--red); }
textarea.form-control { resize: vertical; min-height: 130px; line-height: 1.6; }
select.form-control {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2348576e' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  cursor: pointer;
}
select.form-control option { background: var(--bg-3); }
.form-submit {
  width: 100%;
  background: var(--orange);
  color: #fff;
  border: none;
  padding: 16px 28px;
  font-family: var(--font-b);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 200ms, transform 200ms, box-shadow 200ms;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.form-submit:hover { background: var(--orange-dim); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(224,124,56,0.3); }
.form-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
.form-message { display: none; padding: 20px; margin-top: 16px; font-size: 14px; line-height: 1.6; border-left: 3px solid; }
.form-message.success { display: block; background: rgba(62,207,142,0.08); border-color: var(--green); color: var(--green); }
.form-message.error { display: block; background: rgba(224,82,82,0.08); border-color: var(--red); color: var(--red); }

/* ═══════════════════════════════════════════════════════════════
   404 PAGE
═══════════════════════════════════════════════════════════════ */
.not-found-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
}
.not-found-code { font-family: var(--font-d); font-weight: 800; font-size: clamp(100px, 20vw, 180px); color: var(--bg-3); line-height: 0.85; margin-bottom: 8px; }
.not-found-title { font-family: var(--font-d); font-size: 28px; font-weight: 700; color: var(--t1); margin-bottom: 12px; }
.not-found-body { font-size: 16px; font-weight: 300; color: var(--t2); margin-bottom: 36px; max-width: 400px; margin-left: auto; margin-right: auto; }

/* ═══════════════════════════════════════════════════════════════
   REVEAL ANIMATIONS
═══════════════════════════════════════════════════════════════ */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 650ms ease, transform 650ms ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
.reveal-delay-5 { transition-delay: 500ms; }

/* ═══════════════════════════════════════════════════════════════
   SERVICE AREA JUMP NAV (services page)
═══════════════════════════════════════════════════════════════ */
.jump-nav {
  background: var(--bg-2);
  border-bottom: 1px solid var(--border);
  padding: 0 40px;
  position: sticky;
  top: calc(var(--topbar-h) + var(--nav-h));
  z-index: 90;
  overflow-x: auto;
}
.jump-nav-inner { max-width: var(--max); margin: 0 auto; display: flex; white-space: nowrap; }
.jump-nav a {
  display: inline-block;
  padding: 16px 18px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t3);
  border-bottom: 2px solid transparent;
  transition: color 200ms, border-color 200ms;
  text-decoration: none;
}
.jump-nav a:hover { color: var(--orange); border-bottom-color: var(--orange); }

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════════════════════ */
@media (max-width: 1100px) {
  .hero { grid-template-columns: 1fr; }
  .hero-left { padding: 80px 40px; max-width: 100%; margin: 0; }
  .hero-right { display: none; }
  .footer-top { grid-template-columns: 1fr 1fr; gap: 36px; }
  .process-steps { grid-template-columns: repeat(3, 1fr); }
  .area-layout { grid-template-columns: 1fr; }
  .area-panel { display: none; }
  .about-layout { grid-template-columns: 1fr; gap: 48px; }
  .about-visual { position: relative; top: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
  .service-detail-item { grid-template-columns: 1fr; gap: 24px; }
  .sdl-num { font-size: 56px; }
  .problem-layout { grid-template-columns: 1fr; gap: 48px; }
}

@media (max-width: 768px) {
  section { padding: 64px 20px; }
  .hero-left { padding: 60px 20px 72px; }
  .nav { padding: 0 20px; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .topbar { padding: 0 20px; }
  .topbar-right { display: none; }
  .page-hero { padding: 56px 20px; }
  .services-grid { grid-template-columns: 1fr; }
  .project-types-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .why-grid { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
  .contact-layout { grid-template-columns: 1fr; gap: 40px; }
  .form-row { grid-template-columns: 1fr; }
  .cta-inner { flex-direction: column; text-align: center; }
  .footer-top { grid-template-columns: 1fr; gap: 28px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
  .process-steps { grid-template-columns: 1fr 1fr; }
  .stats-strip-inner { grid-template-columns: 1fr 1fr; }
  .stat-item:nth-child(2) { border-right: none; }
  .jump-nav { padding: 0 20px; }
  .services-detail-wrap { padding: 0 20px 64px; }
  footer { padding: 48px 20px 0; }
  .about-visual { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .project-types-grid { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
  .stats-strip-inner { grid-template-columns: 1fr 1fr; }
  .hero-proof { flex-wrap: wrap; gap: 20px; }
  .hero-title { font-size: 42px; }
  .topbar-left { gap: 14px; }
  .topbar-item:not(:first-child) { display: none; }
}

/* ═══════════════════════════════════════════════════════════════
   DEMO PANEL — PROJECT STATUS (updated for full-service model)
═══════════════════════════════════════════════════════════════ */
.demo-phase-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
}
.demo-phase-row:last-child { border-bottom: none; }
.demo-phase-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--t2);
  flex: 1;
}
.demo-phase-bar {
  flex: 1;
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}
.demo-phase-fill {
  height: 100%;
  background: var(--orange);
  border-radius: 2px;
}
.demo-phase-status {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
  min-width: 60px;
  text-align: right;
}

.demo-divider {
  padding: 8px 16px;
  background: var(--bg-3);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--t3);
}

.demo-package-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  transition: background 200ms;
}
.demo-package-row:hover { background: rgba(255,255,255,0.02); }
.demo-package-row:last-child { border-bottom: none; }
.demo-package-name {
  font-size: 12px;
  font-weight: 500;
  color: var(--t2);
}
.demo-package-name.recommended { color: var(--t1); font-weight: 600; }
.demo-package-amt {
  font-family: var(--font-d);
  font-size: 13px;
  font-weight: 700;
  color: var(--t1);
}
.demo-recommended-tag {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 7px;
  background: rgba(62,207,142,0.12);
  border: 1px solid rgba(62,207,142,0.3);
  color: var(--green);
  white-space: nowrap;
}

.demo-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  gap: 8px;
}
.demo-footer-item {
  font-size: 10px;
  color: var(--t3);
  display: flex;
  align-items: center;
  gap: 5px;
}
.demo-footer-item strong { color: var(--t2); font-weight: 600; }
