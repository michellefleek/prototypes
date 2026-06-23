// integrated.jsx — baseline supplier page with a hero that adapts to operation size.
//   Small operation → swipeable image gallery (was visual-led variant 4)
//   Large operation → full-bleed video hero  (was visual-led variant 2)
// A toggle on the preview page switches between them; everything below the hero
// is the shared baseline (metrics, tabs, filter, feed, nav).

(() => {
  const { C, F, TopAppBar, SupplierAvatar, SupplierMeta, MetricsRow, Tabs, FilterBar, Feed, BottomNav } = window.SS;

  // Local same-origin placeholder photos (see assets/pool*.jpg).
  const hash = (s) => { let n = 0; for (let i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) % 100000; return n; };
  const photoUrl = (seed) => `assets/pool${hash(seed) % 10}.jpg`;
  const Photo = ({ seed, style = {} }) => (
    <div style={{
      backgroundImage: `url(${photoUrl(seed)})`, backgroundSize: 'cover',
      backgroundPosition: 'center', backgroundColor: '#CBD2DD', ...style,
    }} />
  );

  // Autoplay/muted/looping video slide (used as the first slide of the gallery hero).
  const VideoSlide = ({ style = {} }) => (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#000', ...style }}>
      <video src="assets/hero-clip.mp4" autoPlay muted loop playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 10, display: 'flex', alignItems: 'center', gap: 6, height: 24, padding: '0 9px', borderRadius: 999, background: 'rgba(0,0,0,0.5)' }}>
        <i className="ph-fill ph-play" style={{ fontSize: 11, color: '#fff' }} />
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 10, color: '#fff', letterSpacing: 0.4 }}>VIDEO</span>
      </div>
      <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
        <i className="ph-fill ph-speaker-simple-slash" style={{ fontSize: 15, color: '#fff' }} />
      </div>
    </div>
  );

  const StatusSpacer = ({ h = 50 }) => <div style={{ height: h, flexShrink: 0 }} />;
  const scrim = 'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.78) 100%)';

  // Identity row used by the gallery hero (avatar + name + meta).
  const IdentityRow = ({ size = 48 }) => (
    <div style={{ padding: '10px 12px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
      <SupplierAvatar size={size} />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</div>
        <div style={{ marginTop: 3 }}><SupplierMeta /></div>
      </div>
    </div>
  );

  // ── Faire-style header (chosen: F2) — small-operation storefront ──
  const Star = ({ size = 13 }) => <i className="ph-fill ph-star" style={{ fontSize: size, color: C.sunflower }} />;
  const Mid = () => <span style={{ color: C.borderStrong }}>·</span>;
  const bld = { color: C.text, fontWeight: 700 };
  function FaireHeader() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <SupplierAvatar size={48} />
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</span>
              <i className="ph ph-caret-right" style={{ fontSize: 13, color: C.muted }} />
            </div>
            <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 8, fontFamily: F, fontSize: 13 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: C.text, fontWeight: 600 }}><i className="ph-fill ph-seal-check" style={{ fontSize: 14 }} />Top supplier</span>
              <Mid />
              <span style={{ display: 'flex', alignItems: 'center', gap: 3, color: C.muted }}><Star /><b style={bld}>4.4</b> (123)</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 9, display: 'flex', flexDirection: 'column', gap: 4, fontFamily: F, fontSize: 13, color: C.muted }}>
          <div><b style={bld}>£50 min</b> · 🇵🇰 Pakistan</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <i className="ph ph-truck" style={{ fontSize: 15, color: C.text }} />
            <span><b style={bld}>Dispatches in 8 days</b></span>
            <Mid />
            <span style={{ color: C.text, textDecoration: 'underline' }}>Shipping details</span>
          </div>
        </div>
      </div>
    );
  }

  // ── SMALL: swipeable image gallery hero ───────────────────────────
  function HeroGallery() {
    const seeds = ['creed-g1', 'creed-g2', 'creed-g3', 'creed-g4'];
    return (
      <React.Fragment>
        <StatusSpacer />
        <TopAppBar />
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {seeds.map((s, i) => (
              <div key={s} style={{ position: 'relative', flex: '0 0 88%', scrollSnapAlign: 'start', height: 248, paddingLeft: i === 0 ? 12 : 6, paddingRight: i === seeds.length - 1 ? 12 : 6, boxSizing: 'border-box' }}>
                {i === 0
                  ? <VideoSlide style={{ height: '100%', width: '100%', borderRadius: 12 }} />
                  : <Photo seed={s} style={{ height: '100%', width: '100%', borderRadius: 12 }} />}
              </div>
            ))}
          </div>
          <div style={{ position: 'absolute', top: 10, right: 22, display: 'flex', alignItems: 'center', gap: 5, height: 24, padding: '0 9px', borderRadius: 999, background: 'rgba(0,0,0,0.5)' }}>
            <i className="ph-fill ph-images" style={{ fontSize: 12, color: '#fff' }} />
            <span style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: '#fff' }}>1 / 4</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 10 }}>
            {seeds.map((s, i) => (
              <span key={s} style={{ width: i === 0 ? 16 : 5, height: 5, borderRadius: 999, background: i === 0 ? C.text : C.grey300 }} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  // ── LARGE: full-bleed video hero ──────────────────────────────────
  function HeroVideo() {
    const tint = 'rgba(255,255,255,0.18)';
    return (
      <div style={{ position: 'relative', height: 340, flexShrink: 0 }}>
        <Photo seed="creed-video" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: scrim }} />
        <StatusSpacer />
        {/* overlaid transparent app bar */}
        <div style={{ position: 'absolute', top: 50, left: 0, right: 0, height: 44, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px' }}>
          <button style={{ width: 36, height: 36, borderRadius: 999, border: 'none', background: tint, backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Back">
            <i className="ph ph-arrow-left" style={{ fontSize: 18, color: '#fff' }} />
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ height: 36, borderRadius: 999, border: 'none', background: tint, backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', cursor: 'pointer' }}>
              <i className="ph ph-bell" style={{ fontSize: 16, color: '#fff' }} />
              <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: '#fff' }}>Follow</span>
            </button>
            <button style={{ width: 36, height: 36, borderRadius: 999, border: 'none', background: tint, backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Share">
              <i className="ph ph-export" style={{ fontSize: 18, color: '#fff' }} />
            </button>
          </div>
        </div>
        {/* video affordances */}
        <div style={{ position: 'absolute', top: 106, left: 12, display: 'flex', alignItems: 'center', gap: 6, height: 26, padding: '0 10px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', zIndex: 3 }}>
          <i className="ph-fill ph-play" style={{ fontSize: 11, color: '#fff' }} />
          <span style={{ fontFamily: F, fontWeight: 700, fontSize: 10, color: '#fff', letterSpacing: 0.4 }}>BEHIND THE SCENES</span>
        </div>
        <button style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%,-50%)', width: 56, height: 56, borderRadius: 999, border: 'none', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3, cursor: 'pointer' }}>
          <i className="ph-fill ph-play" style={{ fontSize: 22, color: '#000', marginLeft: 3 }} />
        </button>
        <div style={{ position: 'absolute', top: 112, right: 12, display: 'flex', alignItems: 'center', gap: 8, zIndex: 3 }}>
          <i className="ph-fill ph-speaker-simple-slash" style={{ fontSize: 16, color: '#fff' }} />
          <span style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: '#fff' }}>0:42</span>
        </div>
        {/* overlaid identity */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 16, padding: '0 16px', zIndex: 3, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ borderRadius: 999, padding: 2, background: 'rgba(255,255,255,0.9)', flexShrink: 0 }}>
            <SupplierAvatar size={48} />
          </div>
          <div style={{ minWidth: 0 }}>
            <span style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#fff', lineHeight: '26px' }}>Creed Vintage</span>
            <div style={{ marginTop: 2 }}><SupplierMeta color="rgba(255,255,255,0.92)" /></div>
          </div>
        </div>
      </div>
    );
  }

  // ── Full screen: hero (by operation) + shared baseline body ───────
  function SupplierScreen({ operation }) {
    const large = operation === 'large';
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: C.white }}>
        {large ? <HeroVideo /> : <HeroGallery />}
        {/* small uses the compact Faire-style header; large keeps overlaid identity + metrics */}
        {large ? <MetricsRow /> : <FaireHeader />}
        <Tabs />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <FilterBar />
          <Feed />
        </div>
        <BottomNav />
      </div>
    );
  }

  // ── Preview-page toggle + framed phone ────────────────────────────
  function OperationToggle({ value, onChange }) {
    const opts = [
      { key: 'small', label: 'Small operation', hint: 'Hero: swipeable image gallery' },
      { key: 'large', label: 'Large operation', hint: 'Hero: full-bleed brand video' },
    ];
    const active = opts.find(o => o.key === value);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'inline-flex', background: '#EAECF0', borderRadius: 999, padding: 4, gap: 4 }}>
          {opts.map(o => {
            const on = o.key === value;
            return (
              <button key={o.key} onClick={() => onChange(o.key)} style={{
                border: 'none', cursor: 'pointer', borderRadius: 999, padding: '11px 26px',
                fontFamily: F, fontWeight: on ? 700 : 600, fontSize: 15,
                background: on ? '#fff' : 'transparent', color: on ? '#000' : '#667085',
                boxShadow: on ? '0 1px 3px rgba(0,0,0,0.14)' : 'none', transition: 'all 120ms',
              }}>{o.label}</button>
            );
          })}
        </div>
        <div style={{ fontFamily: F, fontSize: 13, fontWeight: 500, color: '#667085' }}>{active.hint}</div>
      </div>
    );
  }

  function IntegratedApp() {
    // Large operation parked — render the single (small) storefront.
    // The Small/Large toggle + HeroVideo are kept above for easy restore.
    const scale = 0.82;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 402 * scale, height: 874 * scale, position: 'relative' }}>
          <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
            <IOSDevice>
              <SupplierScreen operation="small" />
            </IOSDevice>
          </div>
        </div>
      </div>
    );
  }

  window.IntegratedApp = IntegratedApp;

  // Register as the "Visual-led hero" theme in the shell.
  window.__themes = window.__themes || [];
  window.__themes.push({ key: 'visual', label: 'Visual-led hero', built: true, Component: IntegratedApp });
})();
