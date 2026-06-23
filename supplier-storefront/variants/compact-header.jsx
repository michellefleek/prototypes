// compact-header.jsx — Faire-style header for the small-operation gallery hero.
// Faire pattern: small logo + name › , then tightly-stacked 13px lines with
// small inline icons (Top Shop badge · ★rating(count) / $min · location /
// delivery · details). No big-number metric block. Shown as a comparison.
// Refs: Faire brand storefront + product-page brand header (Mobbin).

(() => {
  const SS = window.SS;
  const { C, F, TopAppBar, SupplierAvatar, Tabs, FilterBar, Feed, BottomNav } = SS;
  const FramedPhone = window.FramedPhone;

  // ── shared bits ───────────────────────────────────────────────────
  const hash = (s) => { let n = 0; for (let i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) % 100000; return n; };
  const photoUrl = (seed) => `assets/pool${hash(seed) % 10}.jpg`;
  const Photo = ({ seed, style = {} }) => (
    <div style={{ backgroundImage: `url(${photoUrl(seed)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#CBD2DD', ...style }} />
  );
  const VideoSlide = ({ style = {} }) => (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#000', ...style }}>
      <video src="assets/hero-clip.mp4" poster="assets/pool2.jpg" autoPlay muted loop playsInline
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
  const Star = ({ size = 13 }) => <i className="ph-fill ph-star" style={{ fontSize: size, color: C.sunflower }} />;
  const Mid = () => <span style={{ color: C.borderStrong }}>·</span>;
  const bold = { color: C.text, fontWeight: 700 };

  const NameRow = ({ size = 18 }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <span style={{ fontFamily: F, fontWeight: 700, fontSize: size, color: C.text, lineHeight: `${size + 4}px` }}>Creed Vintage</span>
      <i className="ph ph-caret-right" style={{ fontSize: 13, color: C.muted }} />
    </div>
  );
  const Badge = () => (
    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: F, fontWeight: 600, fontSize: 13, color: C.text }}>
      <i className="ph-fill ph-seal-check" style={{ fontSize: 14 }} />Top supplier
    </span>
  );
  const Rating = ({ muted = true }) => (
    <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontFamily: F, fontSize: 13, color: muted ? C.muted : C.text }}>
      <Star /><b style={bold}>4.4</b> <span>(123)</span>
    </span>
  );

  function GalleryVisual() {
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

  // ════════ Faire-style header variants ══════════════════════════════

  // F1 · Compact line — name › , then one scannable meta line (Faire product header).
  function F1() {
    return (
      <div style={{ padding: '12px 12px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <SupplierAvatar size={48} />
        <div style={{ minWidth: 0 }}>
          <NameRow />
          <div style={{ marginTop: 5, display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', fontFamily: F, fontSize: 13, color: C.muted }}>
            <Rating />
            <Mid /><span><b style={bold}>£50</b> min</span>
            <Mid /><span>🇵🇰 Pakistan</span>
          </div>
        </div>
      </div>
    );
  }

  // F2 · Storefront — Faire brand page: badge+rating, then min·location, then delivery·details.
  function F2() {
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <SupplierAvatar size={48} />
          <div style={{ minWidth: 0 }}>
            <NameRow />
            <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Badge /><Mid /><Rating />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 9, display: 'flex', flexDirection: 'column', gap: 4, fontFamily: F, fontSize: 13, color: C.muted }}>
          <div><b style={bold}>£50 min</b> · 🇵🇰 Pakistan</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <i className="ph ph-truck" style={{ fontSize: 15, color: C.text }} />
            <span><b style={bold}>Dispatches in 8 days</b></span>
            <Mid />
            <span style={{ color: C.text, textDecoration: 'underline' }}>Shipping details</span>
          </div>
        </div>
      </div>
    );
  }

  // F3 · Badge pill — Top-supplier as a subtle pill, then one combined info line.
  function F3() {
    const pill = (content) => (
      <span style={{ display: 'flex', alignItems: 'center', gap: 4, height: 24, padding: '0 9px', borderRadius: 999, background: C.grey200, fontFamily: F, fontWeight: 600, fontSize: 12, color: C.text }}>{content}</span>
    );
    return (
      <div style={{ padding: '12px 12px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <SupplierAvatar size={48} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <NameRow />
            <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
              {pill(<><i className="ph-fill ph-seal-check" style={{ fontSize: 13 }} />Top supplier</>)}
              <Rating />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 9, display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', fontFamily: F, fontSize: 13, color: C.muted }}>
          <span><b style={bold}>£50 min</b></span><Mid />
          <span>🇵🇰 Pakistan</span><Mid />
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><i className="ph ph-truck" style={{ fontSize: 14 }} />8-day dispatch</span>
        </div>
      </div>
    );
  }

  // ── full screen = gallery visual + variant header + baseline body ──
  const Screen = ({ Header }) => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: C.white }}>
      <GalleryVisual />
      <Header />
      <Tabs />
      <div style={{ flex: 1, overflowY: 'auto' }}><FilterBar /><Feed /></div>
      <BottomNav />
    </div>
  );

  function HeaderCompare() {
    const variants = [
      { name: 'F1 · Compact line', Header: F1 },
      { name: 'F2 · Storefront', Header: F2 },
      { name: 'F3 · Badge pill', Header: F3 },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '100%' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 13, letterSpacing: 1, color: C.muted, textTransform: 'uppercase' }}>Faire-style header · 3 variants</div>
        <div style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: C.muted, marginBottom: 8 }}>Name › + tightly-stacked B2B lines, no big-number block</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', alignItems: 'flex-start' }}>
          {variants.map(v => (
            <div key={v.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: C.text }}>{v.name}</div>
              <FramedPhone scale={0.78}><Screen Header={v.Header} /></FramedPhone>
            </div>
          ))}
        </div>
      </div>
    );
  }

  window.HeaderCompare = HeaderCompare;
})();
