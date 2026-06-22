// shell.jsx — top-level theme switcher for the supplier-storefront explorations.
// Renders a sticky theme nav (one tab per research theme) + the active theme's
// Component. Themes register themselves into window.__themes (see integrated.jsx
// and themes-upcoming.jsx). Unbuilt themes show a placeholder.

(() => {
  const F = (window.SS && window.SS.F) || 'Montserrat, sans-serif';
  const C = { text: '#000', muted: '#667085', grey200: '#F2F4F7', grey300: '#EAECF0', sunflower: '#F8C642', white: '#fff' };

  function Placeholder({ label }) {
    return (
      <div style={{
        width: 360, padding: '90px 24px', border: `2px dashed ${C.grey300}`, borderRadius: 16,
        textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.white,
      }}>
        <div style={{ fontSize: 34 }}>🚧</div>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text }}>{label}</div>
        <div style={{ fontFamily: F, fontWeight: 500, fontSize: 14, color: C.muted, maxWidth: 240 }}>Not prototyped yet — we'll build this theme next.</div>
      </div>
    );
  }

  function ThemeNav({ themes, active, onChange }) {
    return (
      <div style={{
        position: 'sticky', top: -48, zIndex: 50, alignSelf: 'stretch',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        padding: '20px 0 16px', margin: '-48px -48px 0', background: 'rgba(249,250,251,0.92)',
        backdropFilter: 'blur(10px)', borderBottom: `1px solid ${C.grey300}`,
      }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: 1.2, color: C.muted, textTransform: 'uppercase' }}>Supplier storefront · themes</div>
        <div style={{ display: 'inline-flex', gap: 6, background: C.grey200, borderRadius: 999, padding: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
          {themes.map(t => {
            const on = t.key === active;
            return (
              <button key={t.key} onClick={() => onChange(t.key)} style={{
                border: 'none', cursor: 'pointer', borderRadius: 999, padding: '9px 16px',
                fontFamily: F, fontWeight: on ? 700 : 600, fontSize: 14,
                background: on ? C.white : 'transparent', color: on ? C.text : C.muted,
                boxShadow: on ? '0 1px 3px rgba(0,0,0,0.14)' : 'none',
                display: 'flex', alignItems: 'center', gap: 7, transition: 'all 120ms',
              }}>
                {t.label}
                {!t.built && (
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 9, letterSpacing: 0.4, color: '#B54708', background: '#FEF0C7', padding: '2px 6px', borderRadius: 999, textTransform: 'uppercase' }}>soon</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function ThemeShell() {
    const themes = window.__themes || [];
    const [active, setActive] = React.useState(themes[0] ? themes[0].key : null);
    const current = themes.find(t => t.key === active) || themes[0];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <ThemeNav themes={themes} active={active} onChange={setActive} />
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
          {current && current.baseline && (
            <div style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: C.muted }}>
              Baseline · <span style={{ fontWeight: 700, color: C.text }}>{current.label}</span> explorations coming next
            </div>
          )}
          {current && current.built && current.Component
            ? <current.Component />
            : <Placeholder label={current ? current.label : 'No theme'} />}
        </div>
      </div>
    );
  }

  window.ThemeShell = ThemeShell;
})();
