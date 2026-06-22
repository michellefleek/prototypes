// visual-led.jsx — 8 "visual-led hero" explorations for the supplier page.
// Each keeps the baseline lower half (metrics, tabs, filter, feed, nav) and
// only reshapes the HERO region, so they're directly comparable.
// Grounded in Mobbin refs: Whatnot/Etsy (cover + overlap avatar), Shop/Evertone
// & Nike (full-bleed video), Depop/Instagram (mosaic), Instagram (story rings).

(() => {
  const { C, F, img, TopAppBar, SupplierAvatar, SupplierMeta, MetricsRow, Tabs, FilterBar, Feed, BottomNav } = window.SS;

  // 50px clear for the iOS status bar / dynamic island (kept on all variants
  // so the kit's dark status text stays legible on a white strip).
  const StatusSpacer = ({ h = 50 }) => <div style={{ height: h, flexShrink: 0 }} />;

  // The scrollable lower half shared by every variant.
  const Body = () => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <FilterBar />
      <Feed />
    </div>
  );

  // Standard frame: white status strip + app bar + [hero] + metrics + tabs + body + nav.
  const Screen = ({ children, withMetrics = true }) => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: C.white }}>
      {children}
      {withMetrics && <MetricsRow />}
      <Tabs />
      <Body />
      <BottomNav />
    </div>
  );

  // Local same-origin placeholder photos. The headless preview screenshot does
  // not paint cross-origin background images, so we ship a small pool in assets/
  // and map each seed deterministically to one. (Swap for real supplier shots later.)
  const hash = (s) => { let n = 0; for (let i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) % 100000; return n; };
  const photoUrl = (seed) => `assets/pool${hash(seed) % 10}.jpg`;
  const Photo = ({ seed, w, h, topic, style = {} }) => (
    <div style={{
      backgroundImage: `url(${photoUrl(seed)})`, backgroundSize: 'cover',
      backgroundPosition: 'center', backgroundColor: '#CBD2DD', ...style,
    }} />
  );

  // Overlaid transparent app bar (white glyphs) for immersive heroes.
  const OverlayBar = ({ tint = 'rgba(255,255,255,0.18)' }) => (
    <div style={{
      position: 'absolute', top: 50, left: 0, right: 0, height: 44, zIndex: 3,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px',
    }}>
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
  );

  const scrim = 'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.78) 100%)';

  // ════════════════════════════════════════════════════════════════
  // 1. COVER BANNER — cover photo + avatar overlapping its bottom edge.
  //    (Whatnot "About the Seller", Etsy shop)
  // ════════════════════════════════════════════════════════════════
  function V1_CoverBanner() {
    return (
      <Screen>
        <StatusSpacer />
        <TopAppBar />
        <Photo seed="creed-cover" w={800} h={300} style={{ height: 116, width: '100%' }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, padding: '0 12px', marginTop: -28 }}>
          <div style={{ borderRadius: 999, padding: 3, background: C.white, flexShrink: 0 }}>
            <SupplierAvatar size={64} />
          </div>
          <div style={{ paddingBottom: 4, minWidth: 0 }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</div>
            <div style={{ marginTop: 4 }}><SupplierMeta /></div>
          </div>
        </div>
      </Screen>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 2. FULL-BLEED VIDEO HERO — immersive image/video, overlaid identity.
  //    (Shop "Evertone", Nike Training Club, Hollister)
  // ════════════════════════════════════════════════════════════════
  function V2_VideoHero() {
    return (
      <Screen>
        <div style={{ position: 'relative', height: 340, flexShrink: 0 }}>
          <Photo seed="creed-video" w={800} h={1000} style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: scrim }} />
          <StatusSpacer />
          <OverlayBar />
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: '#fff', lineHeight: '26px' }}>Creed Vintage</span>
              </div>
              <div style={{ marginTop: 2 }}><SupplierMeta color="rgba(255,255,255,0.92)" /></div>
            </div>
          </div>
        </div>
      </Screen>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 3. FACILITY-FIRST — the operation is the first thing you see.
  //    ("Ability to show facility as the first thing" + size-of-operation)
  // ════════════════════════════════════════════════════════════════
  function V3_FacilityFirst() {
    const chip = (icon, label) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, height: 28, padding: '0 10px', borderRadius: 999, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
        <i className={`ph-fill ${icon}`} style={{ fontSize: 13, color: '#fff' }} />
        <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: '#fff' }}>{label}</span>
      </div>
    );
    return (
      <Screen>
        <StatusSpacer />
        <TopAppBar />
        <div style={{ position: 'relative', height: 196, margin: '4px 12px 0', borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
          <Photo seed="creed-factory" w={900} h={600} topic="warehouse,factory,clothing" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: scrim }} />
          <div style={{ position: 'absolute', top: 10, left: 10, fontFamily: F, fontWeight: 700, fontSize: 10, letterSpacing: 0.6, color: '#fff', textTransform: 'uppercase', background: 'rgba(0,0,0,0.4)', padding: '4px 8px', borderRadius: 6 }}>Our facility · Karachi</div>
          <div style={{ position: 'absolute', bottom: 10, left: 10, display: 'flex', gap: 8 }}>
            {chip('ph-buildings', '12,000 sq ft')}
            {chip('ph-users-three', '40+ staff')}
          </div>
        </div>
        <div style={{ padding: '12px 12px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
          <SupplierAvatar size={48} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</div>
            <div style={{ marginTop: 3 }}><SupplierMeta /></div>
          </div>
        </div>
      </Screen>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 4. SWIPEABLE GALLERY — edge-to-edge carousel of creative shots.
  //    ("Image gallery", "High quality images, creatives")
  // ════════════════════════════════════════════════════════════════
  function V4_GalleryCarousel() {
    const seeds = ['creed-g1', 'creed-g2', 'creed-g3', 'creed-g4'];
    return (
      <Screen>
        <StatusSpacer />
        <TopAppBar />
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {seeds.map((s, i) => (
              <div key={s} style={{ position: 'relative', flex: '0 0 88%', scrollSnapAlign: 'start', height: 248, paddingLeft: i === 0 ? 12 : 6, paddingRight: i === seeds.length - 1 ? 12 : 6, boxSizing: 'border-box' }}>
                <Photo seed={s} w={700} h={800} style={{ height: '100%', width: '100%', borderRadius: 12 }} />
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
        <div style={{ padding: '10px 12px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
          <SupplierAvatar size={48} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</div>
            <div style={{ marginTop: 3 }}><SupplierMeta /></div>
          </div>
        </div>
      </Screen>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 5. MOSAIC GRID — brand-at-a-glance feature + grid under identity.
  //    (Depop STAX product grid, Instagram grid)
  // ════════════════════════════════════════════════════════════════
  function V5_Mosaic() {
    return (
      <Screen>
        <StatusSpacer />
        <TopAppBar />
        <div style={{ padding: '4px 12px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
          <SupplierAvatar size={48} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</div>
            <div style={{ marginTop: 3 }}><SupplierMeta /></div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '92px 92px', gap: 4, padding: '12px 12px 0', flexShrink: 0 }}>
          <Photo seed="creed-m1" w={600} h={600} style={{ gridRow: '1 / span 2', borderRadius: 10 }} />
          <Photo seed="creed-m2" w={400} h={400} style={{ borderRadius: 10 }} />
          <Photo seed="creed-m3" w={400} h={400} style={{ borderRadius: 10 }} />
          <Photo seed="creed-m4" w={400} h={400} style={{ borderRadius: 10 }} />
          <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden' }}>
            <Photo seed="creed-m5" w={400} h={400} style={{ position: 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>+24</div>
          </div>
        </div>
      </Screen>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 6. STORY HIGHLIGHTS — tappable circular stories under identity.
  //    (Instagram story highlights · "Behind the scenes / How it works")
  // ════════════════════════════════════════════════════════════════
  function V6_StoryHighlights() {
    const stories = [
      { seed: 'creed-s1', label: 'Behind\nthe scenes', live: true, topic: 'clothing,workshop' },
      { seed: 'creed-s2', label: 'How it\nworks', topic: 'sewing,textile' },
      { seed: 'creed-s3', label: 'Factory', topic: 'warehouse,factory' },
      { seed: 'creed-s4', label: 'New drop', topic: 'fashion,clothing' },
      { seed: 'creed-s5', label: 'The team', topic: 'fashion,people' },
    ];
    return (
      <Screen>
        <StatusSpacer />
        <TopAppBar />
        <div style={{ padding: '4px 12px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
          <SupplierAvatar size={56} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</div>
            <div style={{ marginTop: 3 }}><SupplierMeta /></div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, padding: '14px 12px 4px', overflowX: 'auto', flexShrink: 0 }}>
          {stories.map(st => (
            <div key={st.seed} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flexShrink: 0, width: 62 }}>
              <div style={{ width: 62, height: 62, borderRadius: 999, padding: 2, background: st.live ? `conic-gradient(${C.sunflower}, #E88239, ${C.sunflower})` : C.grey300, position: 'relative' }}>
                <Photo seed={st.seed} w={200} h={200} topic={st.topic} style={{ width: '100%', height: '100%', borderRadius: 999, border: `2px solid ${C.white}`, boxSizing: 'border-box' }} />
                {st.live && <span style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)', background: '#E1306C', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 8, padding: '1px 5px', borderRadius: 4, letterSpacing: 0.3 }}>LIVE</span>}
              </div>
              <span style={{ fontFamily: F, fontWeight: 500, fontSize: 10, color: C.text, textAlign: 'center', lineHeight: '12px', whiteSpace: 'pre-line' }}>{st.label}</span>
            </div>
          ))}
        </div>
      </Screen>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 7. SPLIT HERO — 1 large + 2 stacked, magazine layout, name overlaid.
  //    ("Visuals of the operations" alongside product creatives)
  // ════════════════════════════════════════════════════════════════
  function V7_SplitHero() {
    return (
      <Screen>
        <StatusSpacer />
        <TopAppBar />
        <div style={{ display: 'flex', gap: 4, height: 214, padding: '4px 12px 0', flexShrink: 0 }}>
          <div style={{ position: 'relative', flex: '1.5', borderRadius: 12, overflow: 'hidden' }}>
            <Photo seed="creed-sp1" w={600} h={800} style={{ position: 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: scrim }} />
            <div style={{ position: 'absolute', left: 12, bottom: 12, right: 12 }}>
              <div style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: '#fff', lineHeight: '23px' }}>Creed Vintage</div>
              <div style={{ marginTop: 3 }}><SupplierMeta color="rgba(255,255,255,0.92)" /></div>
            </div>
          </div>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Photo seed="creed-sp2" w={400} h={400} style={{ flex: 1, borderRadius: 12 }} />
            <div style={{ position: 'relative', flex: 1, borderRadius: 12, overflow: 'hidden' }}>
              <Photo seed="creed-sp3" w={400} h={400} style={{ position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontFamily: F, fontWeight: 700, fontSize: 12, color: '#fff' }}>
                <i className="ph-fill ph-images" style={{ fontSize: 13 }} />See all
              </div>
            </div>
          </div>
        </div>
      </Screen>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 8. EDITORIAL / LOOKBOOK — big image + value-prop headline overlay.
  //    ("Space for unique value prop", brand-forward storytelling)
  // ════════════════════════════════════════════════════════════════
  function V8_Editorial() {
    return (
      <Screen>
        <div style={{ position: 'relative', height: 300, flexShrink: 0 }}>
          <Photo seed="creed-edi" w={800} h={1000} style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.82) 100%)' }} />
          <StatusSpacer />
          <OverlayBar />
          {/* top-left identity */}
          <div style={{ position: 'absolute', top: 106, left: 16, display: 'flex', alignItems: 'center', gap: 8, zIndex: 3 }}>
            <SupplierAvatar size={32} />
            <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff' }}>Creed Vintage</span>
          </div>
          {/* headline value prop */}
          <div style={{ position: 'absolute', left: 16, right: 16, bottom: 18, zIndex: 3 }}>
            <div style={{ fontFamily: F, fontWeight: 800, fontSize: 26, color: '#fff', lineHeight: '30px', letterSpacing: -0.3 }}>Vintage denim,<br />sourced in Karachi since 2014</div>
            <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6, fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>
              <i className="ph-fill ph-play-circle" style={{ fontSize: 18 }} />
              <span style={{ borderBottom: '1.5px solid #fff', paddingBottom: 1 }}>Watch our story</span>
            </div>
          </div>
        </div>
      </Screen>
    );
  }

  window.__supplierScreens = (window.__supplierScreens || []).concat([
    { name: '1 · Cover banner', Component: V1_CoverBanner },
    { name: '2 · Full-bleed video', Component: V2_VideoHero },
    { name: '3 · Facility-first', Component: V3_FacilityFirst },
    { name: '4 · Swipe gallery', Component: V4_GalleryCarousel },
    { name: '5 · Mosaic grid', Component: V5_Mosaic },
    { name: '6 · Story highlights', Component: V6_StoryHighlights },
    { name: '7 · Split hero', Component: V7_SplitHero },
    { name: '8 · Editorial', Component: V8_Editorial },
  ]);
})();
