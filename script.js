
/* ============================================================
   ConstructPro — style.css
   Professional Construction Project Management Platform
   ============================================================ */

/* ── CSS VARIABLES / DESIGN TOKENS ── */
:root {
  --bg-primary:      #0d0f14;
  --bg-secondary:    #141720;
  --bg-card:         #1a1e2b;
  --bg-card-hover:   #1f2435;
  --bg-input:        #111420;
  --border:          rgba(255,255,255,0.07);
  --border-strong:   rgba(255,255,255,0.14);
  --text-primary:    #f0f2f8;
  --text-secondary:  #8b91a8;
  --text-muted:      #555d78;
  --accent:          #4f7cff;
  --accent-glow:     rgba(79,124,255,0.15);
  --accent-hover:    #6b91ff;
  --green:           #22c55e;
  --green-dim:       rgba(34,197,94,0.12);
  --amber:           #f59e0b;
  --amber-dim:       rgba(245,158,11,0.12);
  --red:             #ef4444;
  --red-dim:         rgba(239,68,68,0.12);
  --purple:          #a855f7;
  --purple-dim:      rgba(168,85,247,0.12);
  --teal:            #14b8a6;
  --sidebar-w:       260px;
  --radius:          10px;
  --radius-lg:       16px;
  --shadow:          0 4px 24px rgba(0,0,0,0.4);
}

/* ── LIGHT THEME OVERRIDES ── */
[data-theme="light"] {
  --bg-primary:     #f5f6fa;
  --bg-secondary:   #ffffff;
  --bg-card:        #ffffff;
  --bg-card-hover:  #f8f9fd;
  --bg-input:       #f0f2f8;
  --border:         rgba(0,0,0,0.08);
  --border-strong:  rgba(0,0,0,0.14);
  --text-primary:   #0d0f14;
  --text-secondary: #5a6180;
  --text-muted:     #9ba3c4;
  --accent-glow:    rgba(79,124,255,0.08);
  --shadow:         0 4px 24px rgba(0,0,0,0.08);
}

/* ── RESET & BASE ── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html { scroll-behavior: smooth; }
body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  transition: background 0.3s, color 0.3s;
}
a { color: inherit; text-decoration: none; }
button { font-family: 'DM Sans', sans-serif; cursor: pointer; border: none; outline: none; }
input, select, textarea { font-family: 'DM Sans', sans-serif; outline: none; }

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 99px; }

/* ============================================================
   AUTH SCREEN
   ============================================================ */
#auth-screen {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth-box {
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  padding: 48px;
  width: 440px;
  max-width: 90vw;
}
.auth-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}
.auth-logo .logo-icon {
  width: 38px;
  height: 38px;
  background: var(--accent);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
.auth-logo span {
  font-family: 'Fraunces', serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.5px;
}
.auth-box h1 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}
.auth-box p {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 32px;
}
.auth-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  color: var(--text-muted);
  font-size: 12px;
}
.auth-divider::before,
.auth-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}
.auth-toggle {
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: var(--text-secondary);
}
.auth-toggle button {
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  font-size: 13px;
}
.google-btn {
  width: 100%;
  padding: 13px;
  background: var(--bg-input);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.google-btn:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent);
}

/* ============================================================
   FORM ELEMENTS
   ============================================================ */
.form-group { margin-bottom: 16px; }
.form-group label {
  display: block;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
  font-weight: 500;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: var(--bg-input);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  padding: 10px 14px;
  color: var(--text-primary);
  font-size: 14px;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--accent); }
.form-group select option { background: var(--bg-secondary); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

/* ============================================================
   BUTTONS
   ============================================================ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
}
.btn-primary  { background: var(--accent); color: #fff; }
.btn-primary:hover  { background: var(--accent-hover); transform: translateY(-1px); }
.btn-secondary { background: transparent; border: 1px solid var(--border-strong); color: var(--text-primary); }
.btn-secondary:hover { background: var(--bg-card-hover); }
.btn-danger   { background: var(--red-dim); color: var(--red); border: 1px solid rgba(239,68,68,0.2); }
.btn-danger:hover   { background: var(--red); color: #fff; }
.btn-success  { background: var(--green-dim); color: var(--green); border: 1px solid rgba(34,197,94,0.2); }
.btn-success:hover  { background: var(--green); color: #fff; }
.btn-full { width: 100%; }
.btn-lg   { padding: 13px 24px; font-size: 15px; }
.btn-sm   { padding: 7px 14px;  font-size: 13px; }

/* ============================================================
   APP LAYOUT
   ============================================================ */
#app { display: none; min-height: 100vh; }

/* ── Sidebar ── */
.sidebar {
  position: fixed;
  top: 0; left: 0; bottom: 0;
  width: var(--sidebar-w);
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: transform 0.3s;
}
.sidebar-logo {
  padding: 20px 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar-logo .logo-icon {
  width: 32px; height: 32px;
  background: var(--accent);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0;
}
.sidebar-logo span {
  font-family: 'Fraunces', serif;
  font-size: 19px;
  font-weight: 600;
}
.sidebar-nav { flex: 1; overflow-y: auto; padding: 20px 12px; }
.nav-section-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--text-muted);
  padding: 0 10px;
  margin: 16px 0 6px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  margin-bottom: 2px;
  border: 1px solid transparent;
}
.nav-item svg { width: 18px; height: 18px; flex-shrink: 0; opacity: 0.7; }
.nav-item:hover { background: var(--bg-card); color: var(--text-primary); }
.nav-item:hover svg { opacity: 1; }
.nav-item.active {
  background: var(--accent-glow);
  color: var(--accent);
  border-color: rgba(79,124,255,0.15);
}
.nav-item.active svg { opacity: 1; color: var(--accent); }

.sidebar-user {
  padding: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 600;
  flex-shrink: 0; overflow: hidden;
}
.user-avatar img { width: 100%; height: 100%; object-fit: cover; }
.user-info { flex: 1; min-width: 0; }
.user-name { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.user-role { font-size: 11px; color: var(--text-muted); text-transform: capitalize; }

/* ── Sidebar overlay (mobile) ── */
.sidebar-overlay {
  display: none;
  position: fixed; inset: 0; z-index: 99;
  background: rgba(0,0,0,0.5);
}

/* ── Main area ── */
.main { margin-left: var(--sidebar-w); min-height: 100vh; transition: margin-left 0.3s; }

/* ── Top bar ── */
.topbar {
  position: sticky; top: 0; z-index: 50;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  padding: 0 28px; height: 60px;
  display: flex; align-items: center; justify-content: space-between;
  backdrop-filter: blur(12px);
}
.topbar-left  { display: flex; align-items: center; gap: 16px; }
.topbar h2    { font-size: 17px; font-weight: 600; letter-spacing: -0.3px; }
.topbar-right { display: flex; align-items: center; gap: 12px; }

.search-box {
  display: flex; align-items: center; gap: 8px;
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 7px 12px;
  transition: border-color 0.2s;
}
.search-box:focus-within { border-color: var(--accent); }
.search-box svg { width: 15px; height: 15px; color: var(--text-muted); flex-shrink: 0; }
.search-box input { background: none; border: none; color: var(--text-primary); font-size: 13px; width: 200px; }

.icon-btn {
  width: 36px; height: 36px;
  border-radius: 8px;
  background: var(--bg-input);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-secondary);
}
.icon-btn:hover { background: var(--bg-card-hover); border-color: var(--border-strong); color: var(--text-primary); }
.icon-btn svg { width: 17px; height: 17px; }

.menu-toggle {
  display: none;
  width: 36px; height: 36px;
  align-items: center; justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  background: var(--bg-input);
  border: 1px solid var(--border);
  color: var(--text-secondary);
}
.menu-toggle svg { width: 20px; height: 20px; }

/* ── Content area ── */
.content { padding: 28px; max-width: 1400px; }
.page { display: none; }
.page.active { display: block; }

/* ============================================================
   KPI CARDS
   ============================================================ */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}
.kpi-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px 22px;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
}
.kpi-card::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 80px; height: 80px;
  border-radius: 50%;
  opacity: 0.06;
  transform: translate(20px, -20px);
}
.kpi-card.accent::before { background: var(--accent); }
.kpi-card.green::before  { background: var(--green); }
.kpi-card.amber::before  { background: var(--amber); }
.kpi-card.red::before    { background: var(--red); }
.kpi-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.kpi-label {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}
.kpi-value {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 4px;
}
.kpi-sub   { font-size: 12px; color: var(--text-secondary); }
.kpi-icon  {
  position: absolute; top: 18px; right: 18px;
  width: 36px; height: 36px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.kpi-icon svg { width: 20px; height: 20px; }
.kpi-card.accent .kpi-icon { background: var(--accent-glow); color: var(--accent); }
.kpi-card.green  .kpi-icon { background: var(--green-dim);   color: var(--green); }
.kpi-card.amber  .kpi-icon { background: var(--amber-dim);   color: var(--amber); }
.kpi-card.red    .kpi-icon { background: var(--red-dim);     color: var(--red); }

/* ============================================================
   LAYOUT GRIDS & CARDS
   ============================================================ */
.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 20px; margin-bottom: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 20px; }

.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 22px;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.card-title { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.card-sub   { font-size: 12px; color: var(--text-muted); }

.chart-wrap { position: relative; height: 220px; }
.chart-wrap canvas { width: 100% !important; }

/* ============================================================
   TABLES
   ============================================================ */
.table-wrap { overflow-x: auto; margin-top: 8px; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
th {
  text-align: left;
  padding: 10px 14px;
  color: var(--text-muted);
  font-weight: 500;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}
tr:last-child td { border-bottom: none; }
tbody tr { transition: background 0.15s; }
tbody tr:hover { background: var(--bg-card-hover); }

/* ============================================================
   STATUS BADGES
   ============================================================ */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 600;
}
.badge-green  { background: var(--green-dim);   color: var(--green);   border: 1px solid rgba(34,197,94,0.2); }
.badge-amber  { background: var(--amber-dim);   color: var(--amber);   border: 1px solid rgba(245,158,11,0.2); }
.badge-red    { background: var(--red-dim);     color: var(--red);     border: 1px solid rgba(239,68,68,0.2); }
.badge-blue   { background: var(--accent-glow); color: var(--accent);  border: 1px solid rgba(79,124,255,0.2); }
.badge-gray   { background: rgba(139,145,168,0.1); color: var(--text-secondary); border: 1px solid var(--border); }
.badge-purple { background: var(--purple-dim);  color: var(--purple);  border: 1px solid rgba(168,85,247,0.2); }

/* ============================================================
   PROGRESS BAR
   ============================================================ */
.progress-bar {
  height: 6px;
  background: var(--border);
  border-radius: 99px;
  overflow: hidden;
  flex: 1;
  min-width: 60px;
}
.progress-fill {
  height: 100%;
  border-radius: 99px;
  transition: width 0.5s ease;
  background: var(--accent);
}
.progress-fill.green { background: var(--green); }
.progress-fill.amber { background: var(--amber); }
.progress-fill.red   { background: var(--red); }

/* ============================================================
   MODALS
   ============================================================ */
.modal-overlay {
  position: fixed; inset: 0; z-index: 500;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  padding: 28px;
  width: 100%; max-width: 580px;
  max-height: 90vh; overflow-y: auto;
  box-shadow: 0 24px 64px rgba(0,0,0,0.6);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.modal-title { font-size: 18px; font-weight: 600; letter-spacing: -0.3px; }
.modal-close { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; }
.modal-close svg { width: 20px; height: 20px; display: block; }
.modal-footer {
  display: flex; gap: 10px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
#toast-container {
  position: fixed; top: 20px; right: 20px; z-index: 9999;
  display: flex; flex-direction: column; gap: 8px;
}
.toast {
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  padding: 12px 16px;
  font-size: 13px;
  display: flex; align-items: center; gap: 10px;
  box-shadow: var(--shadow);
  animation: slideIn 0.3s ease;
  max-width: 320px;
}
.toast.success { border-left: 3px solid var(--green); color: var(--green); }
.toast.error   { border-left: 3px solid var(--red);   color: var(--red); }
.toast.info    { border-left: 3px solid var(--accent); color: var(--accent); }
.toast.warning { border-left: 3px solid var(--amber);  color: var(--amber); }
.toast span    { color: var(--text-primary); flex: 1; }
@keyframes slideIn  { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes fadeOut  { to   { opacity: 0; transform: translateX(20px); } }

/* ============================================================
   PROJECT CARDS
   ============================================================ */
.project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 18px; }
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px; cursor: pointer;
  transition: all 0.2s;
}
.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(79,124,255,0.1);
}
.project-card-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; }
.project-name { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
.project-loc  { font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 4px; }
.project-loc svg { width: 12px; height: 12px; }

.project-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin: 14px 0; }
.project-stat  { background: var(--bg-input); border-radius: 8px; padding: 8px 10px; text-align: center; }
.project-stat .val { font-size: 14px; font-weight: 600; font-family: 'DM Mono', monospace; }
.project-stat .lbl { font-size: 10px; color: var(--text-muted); margin-top: 2px; }

.project-progress-row { display: flex; align-items: center; gap: 10px; margin-top: 12px; }
.project-progress-row .pct { font-size: 13px; font-weight: 600; color: var(--accent); min-width: 32px; }

/* ============================================================
   FILTER BAR
   ============================================================ */
.filters-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
.filter-btn {
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 13px; font-weight: 500;
  cursor: pointer;
  background: var(--bg-input);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  transition: all 0.15s;
}
.filter-btn.active { background: var(--accent-glow); border-color: rgba(79,124,255,0.3); color: var(--accent); }
.filter-btn:hover:not(.active) { border-color: var(--border-strong); color: var(--text-primary); }

/* ============================================================
   FILE UPLOAD
   ============================================================ */
.upload-zone {
  border: 2px dashed var(--border-strong);
  border-radius: var(--radius-lg);
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-secondary);
}
.upload-zone:hover,
.upload-zone.dragging {
  border-color: var(--accent);
  background: var(--accent-glow);
  color: var(--accent);
}
.upload-zone svg { width: 40px; height: 40px; margin: 0 auto 12px; display: block; opacity: 0.5; }

/* ============================================================
   EMPTY STATE
   ============================================================ */
.empty-state { text-align: center; padding: 60px 20px; color: var(--text-muted); }
.empty-state svg { width: 56px; height: 56px; margin: 0 auto 16px; display: block; opacity: 0.3; }
.empty-state h3 { font-size: 16px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; }
.empty-state p  { font-size: 13px; }

/* ============================================================
   DETAIL VIEW
   ============================================================ */
.detail-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; }
.detail-back {
  background: none; border: none;
  color: var(--text-secondary); cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  font-size: 14px; padding: 0;
  transition: color 0.2s;
}
.detail-back:hover { color: var(--text-primary); }
.detail-back svg  { width: 16px; height: 16px; }
.detail-actions   { display: flex; gap: 8px; margin-left: auto; }

/* ── Tab bar ── */
.tab-bar {
  display: flex; gap: 2px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 24px;
  overflow-x: auto;
}
.tab {
  padding: 10px 18px;
  font-size: 13px; font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
  white-space: nowrap;
}
.tab.active { color: var(--accent); border-bottom-color: var(--accent); }
.tab:hover:not(.active) { color: var(--text-primary); }
.tab-panel { display: none; }
.tab-panel.active { display: block; }

/* ============================================================
   BUDGET
   ============================================================ */
.budget-bar  { height: 10px; border-radius: 99px; overflow: hidden; background: var(--border); margin: 6px 0; }
.budget-fill { height: 100%; border-radius: 99px; background: var(--accent); transition: width 0.5s; }

/* ============================================================
   GANTT CHART
   ============================================================ */
.gantt-container { overflow-x: auto; margin-top: 16px; }
.gantt-bar-wrap  { min-width: 700px; }
.gantt-row { display: flex; align-items: center; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--border); }
.gantt-label { width: 160px; font-size: 13px; flex-shrink: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.gantt-track { flex: 1; height: 28px; background: var(--bg-input); border-radius: 6px; position: relative; overflow: visible; }
.gantt-fill {
  height: 100%; border-radius: 6px;
  display: flex; align-items: center;
  padding: 0 8px; font-size: 11px; font-weight: 500;
  white-space: nowrap; overflow: hidden;
  position: absolute; top: 0;
}

/* ============================================================
   REPORTS
   ============================================================ */
.report-section {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 22px;
  margin-bottom: 20px;
}
.report-section h3 { font-size: 14px; font-weight: 600; margin-bottom: 16px; color: var(--text-primary); }

/* ============================================================
   USER MANAGEMENT
   ============================================================ */
.user-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border); }
.user-row:last-child { border-bottom: none; }
.role-select {
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px 8px;
  color: var(--text-primary);
  font-size: 12px;
}

/* ============================================================
   LOADING SPINNER
   ============================================================ */
.loading { display: flex; align-items: center; justify-content: center; padding: 60px; color: var(--text-muted); gap: 10px; }
.spinner {
  width: 20px; height: 20px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ============================================================
   MISC HELPERS
   ============================================================ */
.notif-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--red);
  display: inline-block;
  margin-left: 4px;
}

/* ============================================================
   RESPONSIVE — TABLET (≤ 900px)
   ============================================================ */
@media (max-width: 900px) {
  .sidebar { transform: translateX(-100%); z-index: 200; }
  .sidebar.open { transform: none; }
  .sidebar-overlay.open { display: block; }
  .main { margin-left: 0; }
  .menu-toggle { display: flex; }
  .form-row { grid-template-columns: 1fr; }
  .content { padding: 16px; }
  .search-box input { width: 140px; }
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .kpi-grid { grid-template-columns: repeat(2, 1fr); }
  .project-grid { grid-template-columns: 1fr; }
}

/* ── MOBILE (≤ 480px) ── */
@media (max-width: 480px) {
  .kpi-grid { grid-template-columns: 1fr; }
  .auth-box { padding: 28px 20px; }
  .topbar   { padding: 0 16px; }
  .search-box { display: none; }
}
