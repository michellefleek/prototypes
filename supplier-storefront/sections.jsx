// sections.jsx — single supplier storefront, organised into three tappable
// sections. Tap a section to focus it (the rest dims) and a variant switcher
// appears in context — swap variants live without leaving the page.
//
//   1. Hero Assets        — video + image carousel
//   2. Supplier Details   — name, logo, £50 min, dispatch, trust
//   3. Product List        — tabs + filter + thumbnail grid
//
// Each section pulls from its own variant registry below. Variant 1 is the
// current design; add new entries to HERO_VARIANTS / DETAIL_VARIANTS /
// PRODUCT_VARIANTS to make them appear in the switcher.

(() => {
  const { C, F, TopAppBar, SupplierAvatar, SupplierMeta, Tabs, FilterBar, Feed, BottomNav } = window.SS;

  // ── shared media helpers (local same-origin pool, see assets/) ──────
  const hash = (s) => { let n = 0; for (let i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) % 100000; return n; };
  const photoUrl = (seed) => `assets/pool${hash(seed) % 10}.jpg`;
  const Photo = ({ seed, style = {} }) => (
    <div style={{ backgroundImage: `url(${photoUrl(seed)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#CBD2DD', ...style }} />
  );
  const VideoSlide = ({ style = {} }) => (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#000', ...style }}>
      <video src="assets/hero-clip.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 10, display: 'flex', alignItems: 'center', gap: 6, height: 24, padding: '0 9px', borderRadius: 999, background: 'rgba(0,0,0,0.5)' }}>
        <i className="ph-fill ph-play" style={{ fontSize: 11, color: '#fff' }} />
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 10, color: '#fff', letterSpacing: 0.4 }}>VIDEO</span>
      </div>
      <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
        <i className="ph-fill ph-speaker-simple-slash" style={{ fontSize: 15, color: '#fff' }} />
      </div>
    </div>
  );

  // ── placeholder for not-yet-designed variants ───────────────────────
  const SlotPlaceholder = ({ h, label }) => (
    <div style={{
      height: h, margin: '0 12px', border: `2px dashed ${C.grey300}`, borderRadius: 12,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
      background: C.grey200, boxSizing: 'border-box',
    }}>
      <i className="ph ph-plus-circle" style={{ fontSize: 26, color: C.muted }} />
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: C.muted }}>{label}</div>
      <div style={{ fontFamily: F, fontWeight: 500, fontSize: 11, color: C.muted }}>add design in sections.jsx</div>
    </div>
  );

  // ═══════════════ SECTION 1 — HERO ASSETS ════════════════════════════
  // A — full-bleed video, identity overlaid on a scrim (ref: Azar / Cameo storefront-profiles)
  function HeroFullBleed() {
    const scrim = 'linear-gradient(180deg, rgba(0,0,0,0) 38%, rgba(0,0,0,0.72) 100%)';
    return (
      <div style={{ position: 'relative', height: 300, overflow: 'hidden', background: '#000' }}>
        <video src="assets/hero-clip.mp4" autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: scrim }} />
        {/* media affordances */}
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 6, height: 26, padding: '0 10px', borderRadius: 999, background: 'rgba(0,0,0,0.45)' }}>
          <i className="ph-fill ph-play" style={{ fontSize: 11, color: '#fff' }} />
          <span style={{ fontFamily: F, fontWeight: 700, fontSize: 10, color: '#fff', letterSpacing: 0.4 }}>BEHIND THE SCENES</span>
        </div>
        <button style={{ position: 'absolute', top: '44%', left: '50%', transform: 'translate(-50%,-50%)', width: 54, height: 54, borderRadius: 999, border: 'none', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <i className="ph-fill ph-play" style={{ fontSize: 21, color: '#000', marginLeft: 3 }} />
        </button>
        <div style={{ position: 'absolute', top: 14, right: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="ph-fill ph-speaker-simple-slash" style={{ fontSize: 16, color: '#fff' }} />
          <span style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: '#fff' }}>0:42</span>
        </div>
      </div>
    );
  }

  // C — mosaic collage, several photos at once (ref: yope / amo storefront-profiles)
  function HeroMosaic() {
    const tile = (node, style) => (
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, ...style }}>{node}</div>
    );
    return (
      <div style={{ padding: '0 12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1fr 1fr', gap: 6, height: 248 }}>
          {tile(<VideoSlide style={{ height: '100%', width: '100%' }} />, { gridRow: '1 / 3' })}
          {tile(<Photo seed="creed-g2" style={{ height: '100%', width: '100%' }} />, {})}
          {tile(
            <React.Fragment>
              <Photo seed="creed-g3" style={{ height: '100%', width: '100%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
                <i className="ph-fill ph-images" style={{ fontSize: 18, color: '#fff' }} />
                <span style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff' }}>+6</span>
              </div>
            </React.Fragment>, {})}
        </div>
      </div>
    );
  }

  // D — story highlights, tappable brand reels (ref: Instagram / Telegram profiles)
  function HeroStoryHighlights() {
    const reels = [
      { label: 'Behind it', seed: 'creed-g1', video: true },
      { label: 'New in', seed: 'creed-g2' },
      { label: 'Denim', seed: 'creed-g3' },
      { label: 'Jackets', seed: 'creed-g4' },
      { label: 'Reviews', seed: 'creed-g2' },
    ];
    const ring = 'linear-gradient(135deg, #F8C642 0%, #FB7185 60%, #A24BFF 100%)';
    return (
      <div style={{ display: 'flex', gap: 14, overflowX: 'auto', padding: '6px 14px 10px', WebkitOverflowScrolling: 'touch' }}>
        {reels.map(r => (
          <div key={r.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, flexShrink: 0, width: 68 }}>
            <div style={{ width: 68, height: 68, borderRadius: 999, padding: 2.5, background: ring }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 999, overflow: 'hidden', border: '2px solid #fff', boxSizing: 'border-box' }}>
                <Photo seed={r.seed} style={{ width: '100%', height: '100%' }} />
                {r.video && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.22)' }}><i className="ph-fill ph-play" style={{ fontSize: 16, color: '#fff' }} /></div>}
              </div>
            </div>
            <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: C.text, whiteSpace: 'nowrap' }}>{r.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // E — single full image, ultra-compact cinematic strip (ref: Letterboxd backdrop / store banner)
  function HeroSingleImage() {
    return <Photo seed="creed-cover" style={{ width: '100%', height: 120 }} />;
  }

  const HERO_VARIANTS = [
    { name: 'Full-bleed video', render: () => <HeroFullBleed /> },
    { name: 'Mosaic collage', render: () => <HeroMosaic /> },
    { name: 'Story highlights', render: () => <HeroStoryHighlights /> },
    { name: 'Single image', render: () => <HeroSingleImage /> },
  ];

  // ═══════════════ SECTION 2 — SUPPLIER DETAILS ═══════════════════════
  const Star = ({ size = 13 }) => <i className="ph-fill ph-star" style={{ fontSize: size, color: C.sunflower }} />;
  const Mid = () => <span style={{ color: C.borderStrong }}>·</span>;
  const bld = { color: C.text, fontWeight: 700 };

  // V1 — profile card (ref: travel-profile screen). Compact centred logo
  // instead of a big photo, emoji info-rows with underlined facts, and a
  // dual action row (Message + Custom order).
  function ProfileCardHeader() {
    const link = { color: C.text, fontWeight: 700, textDecoration: 'underline' };
    const fact = (emoji, content) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: F, fontSize: 13, color: C.muted, lineHeight: '18px', minWidth: 0 }}>
        <span style={{ fontSize: 14 }}>{emoji}</span>
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{content}</span>
      </div>
    );
    return (
      <div style={{ padding: '10px 14px 12px' }}>
        {/* header: compact logo inline with name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <SupplierAvatar size={44} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: C.text, lineHeight: '22px' }}>Creed Vintage</span>
              <span style={{ fontSize: 15 }}>🇵🇰</span>
            </div>
            <div style={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 6, fontFamily: F, fontSize: 12.5 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 3, color: C.text, fontWeight: 600 }}><i className="ph-fill ph-seal-check" style={{ fontSize: 13 }} />Top supplier</span>
              <Mid />
              <span style={{ display: 'flex', alignItems: 'center', gap: 3, color: C.muted }}><Star size={12} /><b style={bld}>4.4</b> (123)</span>
            </div>
          </div>
        </div>
        {/* facts in a 2×2 grid (half the height of stacked rows) */}
        <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 12, rowGap: 6 }}>
          {fact('📍', <>Based in <span style={link}>Pakistan</span></>)}
          {fact('🚚', <>Ships in <span style={link}>8 days</span></>)}
          {fact('💷', <><span style={link}>£50</span> min order</>)}
          {fact('💬', <>Replies <span style={link}>~2h</span></>)}
        </div>
      </div>
    );
  }

  // ── shared bits for the rating-led explorations ────────────────────
  const OnlineFlag = () => (
    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: F, fontWeight: 600, fontSize: 12.5, color: C.green }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: C.green }} />Online now
    </span>
  );
  const VendorBadges = ({ wrap = true }) => {
    const badge = (icon, label, bg, fg, key) => (
      <span key={key} style={{ display: 'flex', alignItems: 'center', gap: 5, height: 24, padding: '0 10px', borderRadius: 999, background: bg, fontFamily: F, fontWeight: 700, fontSize: 11.5, color: fg, whiteSpace: 'nowrap', flexShrink: 0 }}>
        <i className={`ph-fill ${icon}`} style={{ fontSize: 13 }} />{label}
      </span>
    );
    return (
      <div style={{ display: 'flex', gap: 7, flexWrap: wrap ? 'wrap' : 'nowrap', overflowX: wrap ? 'visible' : 'auto' }}>
        {badge('ph-seal-check', 'Top supplier', '#EFF8FF', '#175CD3', 'top')}
        {badge('ph-medal', 'Best at handpicks', '#FEF7E6', '#B54708', 'hand')}
      </div>
    );
  };
  const IdentityWithOnline = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
      <SupplierAvatar size={44} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: C.text }}>Creed Vintage</span>
          <span style={{ fontSize: 15 }}>🇵🇰</span>
        </div>
        <div style={{ marginTop: 2 }}><OnlineFlag /></div>
      </div>
    </div>
  );
  // V2 — stats strip (option B): small-caps label on top, big value below.
  function DetailsStatsStrip() {
    const divider = <div style={{ width: 1, height: 34, background: C.grey300 }} />;
    const stat = (label, value, star) => (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 10, letterSpacing: 0.6, textTransform: 'uppercase', color: C.muted }}>{label}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: C.text }}>{value}</span>
          {star && <i className="ph-fill ph-star" style={{ fontSize: 15, color: C.sunflower }} />}
        </div>
      </div>
    );
    return (
      <div style={{ padding: '12px 14px 14px' }}>
        <IdentityWithOnline />
        <div style={{ marginTop: 10 }}><VendorBadges /></div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', border: `1px solid ${C.grey300}`, borderRadius: 12, padding: '12px 4px' }}>
          {stat('123 reviews', '4.4', true)}
          {divider}
          {stat('Dispatch', '8 days')}
          {divider}
          {stat('Repeat buyers', '5')}
        </div>
      </div>
    );
  }

  const DETAIL_VARIANTS = [
    { name: 'Profile card', render: () => <ProfileCardHeader /> },
    { name: 'Stats strip', render: () => <DetailsStatsStrip /> },
  ];

  // ═══════════════ SECTION 3 — PRODUCT LIST ═══════════════════════════
  // Compact Bundles|Pieces segmented toggle (ref: Hotels|Apartments pill) —
  // collapses the level-1 tabs into a single inline control.
  function SegmentedTabs({ options = ['Bundles', 'Pieces'], active = 'Pieces' }) {
    return (
      <div style={{ display: 'inline-flex', background: C.grey200, borderRadius: 999, padding: 3, flexShrink: 0 }}>
        {options.map(o => {
          const on = o === active;
          return (
            <div key={o} style={{
              height: 30, padding: '0 16px', borderRadius: 999, display: 'flex', alignItems: 'center',
              background: on ? C.text : 'transparent', color: on ? C.white : C.muted,
              boxShadow: on ? '0 1px 2px rgba(0,0,0,0.18)' : 'none',
              fontFamily: F, fontWeight: on ? 700 : 600, fontSize: 13.5, whiteSpace: 'nowrap',
            }}>{o}</div>
          );
        })}
      </div>
    );
  }

  // Single merged row: segmented toggle · divider · filter chips.
  function FilterRowMerged() {
    const chip = (content, key) => (
      <div key={key} style={{
        display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 14px',
        borderRadius: 999, border: `1px solid ${C.borderStrong}`, background: C.white,
        whiteSpace: 'nowrap', flexShrink: 0, fontFamily: F, fontWeight: 600, fontSize: 14, color: C.text,
      }}>{content}</div>
    );
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '12px 16px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <SegmentedTabs />
        <div style={{ width: 1, height: 24, background: C.grey300, flexShrink: 0, margin: '0 2px' }} />
        {chip(<><i className="ph ph-funnel" style={{ fontSize: 16 }} />Filter</>, 'filter')}
        {chip(<><i className="ph ph-arrows-down-up" style={{ fontSize: 16 }} />Sort</>, 'sort')}
        {chip(<><i className="ph ph-tag" style={{ fontSize: 16 }} />On sale</>, 'sale')}
        {chip(<>Price<i className="ph ph-caret-down" style={{ fontSize: 14 }} /></>, 'price')}
      </div>
    );
  }

  function ProductListMerged() {
    return (
      <React.Fragment>
        <FilterRowMerged />
        <Feed />
      </React.Fragment>
    );
  }

  const PRODUCT_VARIANTS = [
    { name: 'Inline toggle + filters', render: () => <ProductListMerged /> },
  ];

  // ═══════════════ NEW SECTION — CATEGORY INDEX ══════════════════════
  // Lets a buyer index through the supplier's catalogue (Uber-menu style)
  // instead of one long list. Four reference-backed treatments below.
  const CATS = [
    { label: 'Denim', count: 24, seed: 'cat-denim' },
    { label: 'Jackets', count: 18, seed: 'cat-jackets' },
    { label: 'Knitwear', count: 12, seed: 'cat-knit' },
    { label: 'Tees', count: 30, seed: 'cat-tees' },
    { label: 'Accessories', count: 9, seed: 'cat-acc' },
  ];

  // V1 — text tabs + counts (Uber Eats / TheFork). Sticky-rail look; the
  // active tab underlines, count sits inline. Pairs with grouped grid below.
  function CatTextTabs() {
    const active = 0;
    return (
      <div style={{ borderTop: `1px solid ${C.grey300}`, borderBottom: `1px solid ${C.grey300}` }}>
        <div style={{ display: 'flex', gap: 20, overflowX: 'auto', padding: '0 14px', WebkitOverflowScrolling: 'touch' }}>
          {CATS.map((c, i) => {
            const on = i === active;
            return (
              <div key={c.label} style={{ padding: '12px 0', position: 'relative', whiteSpace: 'nowrap', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: F, fontWeight: on ? 700 : 600, fontSize: 15, color: on ? C.text : C.muted }}>{c.label}</span>
                <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: on ? C.text : C.muted, opacity: 0.7 }}>{c.count}</span>
                {on && <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2.5, background: C.text, borderRadius: 2 }} />}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // V2 — round photo chips (SHEIN / Coupang). Most visual / on-brand for
  // vintage; each category gets a circular thumbnail with a label beneath.
  function CatPhotoChips() {
    const items = [{ label: 'All', all: true }, ...CATS];
    return (
      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '14px 14px 10px', WebkitOverflowScrolling: 'touch' }}>
        {items.map((c, i) => (
          <div key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, flexShrink: 0, width: 62 }}>
            <div style={{ width: 62, height: 62, borderRadius: 999, overflow: 'hidden', boxSizing: 'border-box', border: i === 0 ? `2px solid ${C.text}` : `1px solid ${C.grey300}`, background: C.grey200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {c.all ? <i className="ph ph-squares-four" style={{ fontSize: 24, color: C.text }} /> : <Photo seed={c.seed} style={{ width: '100%', height: '100%' }} />}
            </div>
            <span style={{ fontFamily: F, fontWeight: i === 0 ? 700 : 600, fontSize: 12, color: C.text, whiteSpace: 'nowrap' }}>{c.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // V3 — pill chips (Wish / Mercari). Lightest weight; reads as a filter.
  function CatPillChips() {
    const items = [{ label: 'All' }, ...CATS];
    const active = 0;
    return (
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '14px 14px', WebkitOverflowScrolling: 'touch' }}>
        {items.map((c, i) => {
          const on = i === active;
          return (
            <div key={c.label} style={{
              flexShrink: 0, height: 36, padding: '0 16px', borderRadius: 999, whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 6,
              border: on ? 'none' : `1px solid ${C.borderStrong}`, background: on ? C.text : C.white,
              fontFamily: F, fontWeight: on ? 700 : 600, fontSize: 14, color: on ? C.white : C.text,
            }}>
              {c.label}
              {c.count != null && <span style={{ fontWeight: 600, fontSize: 12, opacity: 0.65 }}>{c.count}</span>}
            </div>
          );
        })}
      </div>
    );
  }

  // V4 — collection cards with image + count (Etsy "Browse by section" /
  // Anthropologie). Editorial; each category is a tappable cover tile.
  function CatCollectionCards() {
    return (
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '14px 14px 16px', WebkitOverflowScrolling: 'touch' }}>
        {CATS.map(c => (
          <div key={c.label} style={{ flexShrink: 0, width: 124 }}>
            <div style={{ position: 'relative', width: 124, height: 124, borderRadius: 12, overflow: 'hidden', background: C.grey200 }}>
              <Photo seed={c.seed} style={{ width: '100%', height: '100%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 42%, rgba(0,0,0,0.62) 100%)' }} />
              <div style={{ position: 'absolute', left: 9, right: 9, bottom: 9 }}>
                <div style={{ fontFamily: F, fontWeight: 800, fontSize: 15, color: '#fff', lineHeight: '18px' }}>{c.label}</div>
                <div style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.9)', marginTop: 1 }}>{c.count} pieces</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const CATEGORY_VARIANTS = [
    { name: 'Text tabs + counts', render: () => <CatTextTabs /> },
    { name: 'Round photo chips', render: () => <CatPhotoChips /> },
    { name: 'Pill chips (filter)', render: () => <CatPillChips /> },
    { name: 'Collection cards', render: () => <CatCollectionCards /> },
  ];

  // ═══════════════ SECTION — ACTIONS ══════════════════════════════════
  // Standalone CTA row (pulled out of the supplier-details profile card).
  function ActionsRow() {
    const gradient = 'linear-gradient(135deg, #F8C642 0%, #FB7185 100%)';
    return (
      <div style={{ padding: '10px 14px', display: 'flex', gap: 9 }}>
        <button style={{ flex: 1, height: 44, borderRadius: 11, border: 'none', cursor: 'pointer', background: C.text, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontFamily: F, fontWeight: 700, fontSize: 14 }}>
          <i className="ph-fill ph-chat-circle" style={{ fontSize: 17 }} />Message
        </button>
        <button style={{ flex: 1, height: 44, borderRadius: 11, border: 'none', cursor: 'pointer', background: gradient, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontFamily: F, fontWeight: 700, fontSize: 14 }}>
          <i className="ph-fill ph-sparkle" style={{ fontSize: 17 }} />Custom order
        </button>
      </div>
    );
  }

  // V2 — search bar (ref: pill search with magnifying glass + placeholder).
  function ActionsSearch() {
    return (
      <div style={{ padding: '10px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 44, padding: '0 16px', borderRadius: 999, border: `1px solid ${C.borderStrong}`, background: C.white }}>
          <i className="ph ph-magnifying-glass" style={{ fontSize: 18, color: C.muted }} />
          <span style={{ fontFamily: F, fontWeight: 500, fontSize: 15, color: C.muted }}>Search for anything</span>
        </div>
      </div>
    );
  }

  // V3 — message prompt card (ref: "Add Friends Via Link" card) with a
  // "How can we help?" prompt + suggested quick-input chips.
  function ActionsHelpPrompt() {
    const chip = (icon, label, key) => (
      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 14px', borderRadius: 999, border: `1px solid ${C.borderStrong}`, background: C.white, whiteSpace: 'nowrap', flexShrink: 0, fontFamily: F, fontWeight: 600, fontSize: 13.5, color: C.text, cursor: 'pointer' }}>
        <i className={`ph ${icon}`} style={{ fontSize: 15 }} />{label}
      </div>
    );
    return (
      <div style={{ padding: '10px 14px' }}>
        <div style={{ border: `1px solid ${C.grey300}`, borderRadius: 14, padding: '13px 14px', background: C.white, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: C.text }}>How can we help?</div>
          {/* open message input with inline send */}
          <div style={{ position: 'relative', marginTop: 10 }}>
            <input placeholder="Type your message…" style={{ width: '100%', height: 46, boxSizing: 'border-box', borderRadius: 12, border: `1px solid ${C.borderStrong}`, padding: '0 52px 0 14px', fontFamily: F, fontSize: 14, color: C.text, background: C.white, outline: 'none' }} />
            <button style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', width: 34, height: 34, borderRadius: 9, border: 'none', background: C.text, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Send">
              <i className="ph-fill ph-paper-plane-tilt" style={{ fontSize: 16, color: '#fff' }} />
            </button>
          </div>
          {/* suggested quick inputs */}
          <div style={{ display: 'flex', gap: 8, marginTop: 10, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            {chip('ph-sparkle', 'Start a custom order', 'custom')}
            {chip('ph-magnifying-glass', "I'm looking for…", 'looking')}
          </div>
        </div>
      </div>
    );
  }

  const ACTION_VARIANTS = [
    { name: 'Message + Custom order', render: () => <ActionsRow /> },
    { name: 'Search', render: () => <ActionsSearch /> },
    { name: 'Help prompt', render: () => <ActionsHelpPrompt /> },
  ];

  // ═══════════════ SECTION — MAIN NAV ════════════════════════════════
  // Top-level storefront nav (ref: Summary | Plans | Recs underline tabs).
  // Clickable — switches the page rendered below it (see StorefrontScreen).
  const NAV_TABS = ['Home', 'Products', 'About'];
  function MainNav({ active = 'Products', onChange = () => {} }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 18px', borderBottom: `1px solid ${C.grey300}` }}>
        {NAV_TABS.map(t => {
          const on = t === active;
          return (
            <div key={t} onClick={(e) => { e.stopPropagation(); onChange(t); }} style={{ position: 'relative', padding: '13px 2px', cursor: 'pointer' }}>
              <span style={{ fontFamily: F, fontWeight: on ? 800 : 600, fontSize: 15, color: on ? C.text : C.muted }}>{t}</span>
              {on && <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2.5, background: C.text, borderRadius: 2 }} />}
            </div>
          );
        })}
      </div>
    );
  }

  const MAINNAV_VARIANTS = [
    { name: 'Underline tabs', render: () => <MainNav /> },
  ];

  // ── Page bodies for the non-Products nav tabs ───────────────────────
  function HomePage() {
    return (
      <div style={{ padding: '14px 14px 20px' }}>
        <div style={{ position: 'relative', height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
          <Photo seed="home-banner" style={{ width: '100%', height: '100%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)' }} />
          <div style={{ position: 'absolute', left: 14, bottom: 12 }}>
            <div style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#fff' }}>New season drop</div>
            <div style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.9)' }}>Fresh vintage, just landed</div>
          </div>
        </div>
        <div style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: C.text, marginBottom: 10 }}>Popular right now</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {['home-p1', 'home-p2'].map(s => (
            <div key={s}>
              <div style={{ aspectRatio: '142 / 160', borderRadius: 8, overflow: 'hidden', background: C.grey300 }}><Photo seed={s} style={{ width: '100%', height: '100%' }} /></div>
              <div style={{ marginTop: 6, fontFamily: F, fontWeight: 700, fontSize: 14, color: C.text }}>£X.XX <span style={{ fontWeight: 500, fontSize: 12, color: C.muted }}>· 1 pc</span></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function AboutPage() {
    const fact = (label, val) => (
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: `1px solid ${C.grey300}` }}>
        <span style={{ fontFamily: F, fontWeight: 500, fontSize: 14, color: C.muted }}>{label}</span>
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: C.text }}>{val}</span>
      </div>
    );
    return (
      <div style={{ padding: '16px 16px 20px' }}>
        <div style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: C.text, marginBottom: 8 }}>About Creed Vintage</div>
        <div style={{ fontFamily: F, fontWeight: 500, fontSize: 14, lineHeight: '21px', color: C.muted, marginBottom: 14 }}>
          Hand-picked vintage and reworked denim sourced across Pakistan. Family-run since 2014, shipping wholesale to 300+ stores worldwide.
        </div>
        {fact('Established', '2014')}
        {fact('Based in', '🇵🇰 Pakistan')}
        {fact('Specialty', 'Vintage denim')}
        {fact('Min order', '£50')}
        {fact('Dispatch', '8 days')}
      </div>
    );
  }

  // ── section registry ────────────────────────────────────────────────
  const SECTIONS = [
    { key: 'hero', label: 'Hero Assets', variants: HERO_VARIANTS },
    { key: 'details', label: 'Supplier Details', variants: DETAIL_VARIANTS },
    { key: 'actions', label: 'Actions', variants: ACTION_VARIANTS },
    { key: 'mainnav', label: 'Main Nav', variants: MAINNAV_VARIANTS },
    { key: 'category', label: 'Category Index', variants: CATEGORY_VARIANTS },
    { key: 'products', label: 'Product List', variants: PRODUCT_VARIANTS },
  ];

  // ── one focusable section wrapper ───────────────────────────────────
  function SectionWrap({ label, focused, anyFocused, onFocus, children, interactive = false }) {
    const [hover, setHover] = React.useState(false);
    const dimmed = anyFocused && !focused;
    return (
      <div
        onClick={onFocus}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'relative', cursor: 'pointer',
          opacity: dimmed ? 0.32 : 1,
          transition: 'opacity 160ms ease, box-shadow 160ms ease',
          boxShadow: focused
            ? `inset 0 0 0 2px ${C.sunflower}`
            : (hover && !anyFocused ? `inset 0 0 0 2px ${C.grey300}` : 'inset 0 0 0 0 transparent'),
          borderRadius: 10,
        }}
      >
        {/* label tag — on focus, or on hover when nothing is focused */}
        {(focused || (hover && !anyFocused)) && (
          <div style={{
            position: 'absolute', top: 6, left: 6, zIndex: 5,
            display: 'flex', alignItems: 'center', gap: 5, height: 22, padding: '0 9px', borderRadius: 999,
            background: focused ? C.sunflower : 'rgba(0,0,0,0.72)',
            fontFamily: F, fontWeight: 700, fontSize: 10, letterSpacing: 0.4, textTransform: 'uppercase',
            color: focused ? C.text : '#fff', pointerEvents: 'none',
          }}>
            {!focused && <i className="ph ph-cursor-click" style={{ fontSize: 12 }} />}
            {label}
          </div>
        )}
        {/* content is non-interactive so the whole section is one tap target (focus → switch
            variants); interactive sections (e.g. Main Nav) let their controls receive taps. */}
        <div style={{ pointerEvents: interactive ? 'auto' : 'none' }}>{children}</div>
      </div>
    );
  }

  // ── in-context variant switcher (pinned bottom sheet) ───────────────
  function VariantSwitcher({ section, index, onPrev, onNext, onDone }) {
    const total = section.variants.length;
    const current = section.variants[index];
    return (
      <div style={{
        position: 'absolute', left: 10, right: 10, bottom: 86, zIndex: 30,
        background: C.white, borderRadius: 16, padding: '12px 12px 14px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04)',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: 0.6, textTransform: 'uppercase', color: C.muted }}>{section.label}</div>
          <button onClick={onDone} style={{ border: 'none', background: C.text, color: '#fff', borderRadius: 999, padding: '6px 14px', fontFamily: F, fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>Done</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={onPrev} disabled={total < 2} style={arrowBtn(total < 2)} aria-label="Previous variant">
            <i className="ph ph-caret-left" style={{ fontSize: 18 }} />
          </button>
          <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: C.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{current.name}</div>
            <div style={{ fontFamily: F, fontWeight: 600, fontSize: 11, color: C.muted, marginTop: 1 }}>Variant {index + 1} of {total}</div>
          </div>
          <button onClick={onNext} disabled={total < 2} style={arrowBtn(total < 2)} aria-label="Next variant">
            <i className="ph ph-caret-right" style={{ fontSize: 18 }} />
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          {section.variants.map((_, i) => (
            <span key={i} style={{ width: i === index ? 18 : 6, height: 6, borderRadius: 999, background: i === index ? C.text : C.grey300, transition: 'all 140ms' }} />
          ))}
        </div>
      </div>
    );
  }
  const arrowBtn = (disabled) => ({
    width: 40, height: 40, borderRadius: 999, flexShrink: 0,
    border: `1px solid ${C.grey300}`, background: C.white,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.4 : 1,
    color: C.text,
  });

  // ── the storefront screen ───────────────────────────────────────────
  function StorefrontScreen() {
    const [focused, setFocused] = React.useState(null);
    const [idx, setIdx] = React.useState({ hero: 0, actions: 0, details: 0, mainnav: 0, category: 0, products: 0 });
    const [page, setPage] = React.useState('Products'); // active Main Nav tab
    const anyFocused = focused != null;
    const focusedSection = SECTIONS.find(s => s.key === focused);

    const step = (key, dir) => setIdx(prev => {
      const total = SECTIONS.find(s => s.key === key).variants.length;
      return { ...prev, [key]: (prev[key] + dir + total) % total };
    });

    // Switch nav page; drop any open variant-switcher so it can't dangle on a hidden section.
    const goToPage = (p) => { setPage(p); setFocused(null); };

    const byKey = (k) => SECTIONS.find(s => s.key === k);
    const renderSection = (s) => (
      <SectionWrap
        key={s.key}
        label={s.label}
        focused={focused === s.key}
        anyFocused={anyFocused}
        onFocus={() => setFocused(s.key)}
        interactive={s.key === 'mainnav'}
      >
        {s.key === 'mainnav'
          ? <MainNav active={page} onChange={goToPage} />
          : s.variants[idx[s.key]].render()}
      </SectionWrap>
    );

    const chromeStyle = { opacity: anyFocused ? 0.32 : 1, transition: 'opacity 160ms ease', pointerEvents: anyFocused ? 'none' : 'auto' };

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: C.white, position: 'relative' }}>
        {/* status bar spacer + app bar (fixed chrome) */}
        <div style={chromeStyle}>
          <div style={{ height: 50, flexShrink: 0 }} />
          <TopAppBar />
        </div>

        {/* scrollable body: persistent header (hero · details · actions · nav),
            then page-specific content driven by the active Main Nav tab */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['hero', 'details', 'actions', 'mainnav'].map(k => renderSection(byKey(k)))}
          {page === 'Products' && ['category', 'products'].map(k => renderSection(byKey(k)))}
          {page === 'Home' && <HomePage />}
          {page === 'About' && <AboutPage />}
        </div>

        {/* bottom nav (fixed chrome) */}
        <div style={chromeStyle}>
          <BottomNav />
        </div>

        {/* in-context switcher for the focused section */}
        {focusedSection && (
          <VariantSwitcher
            section={focusedSection}
            index={idx[focused]}
            onPrev={() => step(focused, -1)}
            onNext={() => step(focused, +1)}
            onDone={() => setFocused(null)}
          />
        )}
      </div>
    );
  }

  // ── framed + captioned page ─────────────────────────────────────────
  function StorefrontSections() {
    const scale = 0.86;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, paddingTop: 8 }}>
        <div style={{ textAlign: 'center', maxWidth: 440 }}>
          <div style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: C.text }}>Supplier storefront</div>
          <div style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: C.muted, marginTop: 4 }}>
            Tap a section to explore its variants — Hero Assets, Supplier Details, Product List.
          </div>
        </div>
        <div style={{ width: 402 * scale, height: 874 * scale, position: 'relative' }}>
          <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
            <IOSDevice>
              <StorefrontScreen />
            </IOSDevice>
          </div>
        </div>
      </div>
    );
  }

  window.StorefrontSections = StorefrontSections;
})();
