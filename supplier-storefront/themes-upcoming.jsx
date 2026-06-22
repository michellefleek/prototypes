// themes-upcoming.jsx — themes queued for exploration. Each starts from the
// shared baseline (window.BaselineApp). As we build a theme, swap its Component
// for that theme's own file/explorations. Order here = tab order after "Visual-led hero".

(() => {
  window.__themes = window.__themes || [];
  const themes = [
    { key: 'trust', label: 'Trust signals' },   // ← up next
    { key: 'story', label: 'About & story' },
    { key: 'merch', label: 'Merchandising' },
    { key: 'find',  label: 'Findability' },
  ];
  // built:true, but Component is the plain baseline for now (starting point per theme).
  themes.forEach(t => window.__themes.push({ ...t, built: true, baseline: true, Component: window.BaselineApp }));
})();
