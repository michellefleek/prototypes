// core.jsx — Fleek supplier storefront (Vendor Page) — baseline.
// Faithful rebuild of Figma "Vendor Page" 10782:179752 (Build-a-Bundle file).
// Component names mirror Figma layers so Code Connect maps 1:1 later.
// Tokens: sunflower #F8C642, text #000, muted #667085, border #D0D5DD,
//         grey-200 #F2F4F7, grey-300 #EAECF0, green #12B76A. Type: Montserrat.

const F = 'Montserrat, sans-serif';
const C = {
  text: '#000000',
  muted: '#667085',
  borderMuted: '#EAECF0',
  borderStrong: '#D0D5DD',
  grey200: '#F2F4F7',
  grey300: '#EAECF0',
  sunflower: '#F8C642',
  green: '#12B76A',
  white: '#FFFFFF',
};

// ── Supplier avatar (Creed Vintage logo approximation) ──────────────
function SupplierAvatar({ size = 56 }) {
  const letters = [
    ['C', '#3FC1C9'], ['R', '#5B6CF0'], ['E', '#F2C94C'], ['E', '#EB5757'], ['D', '#27AE60'],
  ];
  return (
    <div style={{
      width: size, height: size, borderRadius: 999, background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', letterSpacing: 0.5 }}>
        {letters.map(([ch, col], i) => (
          <span key={i} style={{ fontFamily: F, fontWeight: 800, fontSize: 11, color: col, lineHeight: 1 }}>{ch}</span>
        ))}
      </div>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 5, color: '#fff', letterSpacing: 1.5, marginTop: 2 }}>VINTAGE</div>
    </div>
  );
}

// ── Top App Bar ─────────────────────────────────────────────────────
function TopAppBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '6px 12px', height: 44, boxSizing: 'border-box',
    }}>
      <button style={{
        width: 32, height: 32, borderRadius: 999, border: `1px solid ${C.grey300}`,
        background: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 0, cursor: 'pointer',
      }} aria-label="Back">
        <i className="ph ph-arrow-left" style={{ fontSize: 18, color: C.text }} />
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{
          height: 32, borderRadius: 999, background: C.grey200, border: 'none',
          display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', cursor: 'pointer',
        }}>
          <i className="ph ph-bell" style={{ fontSize: 16, color: C.text }} />
          <span style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: C.text }}>Follow</span>
        </button>
        <button style={{
          width: 32, height: 32, borderRadius: 999, background: 'transparent', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, cursor: 'pointer',
        }} aria-label="Share">
          <i className="ph ph-export" style={{ fontSize: 20, color: C.text }} />
        </button>
      </div>
    </div>
  );
}

// ── Metric (value + label, used x3 in the trust row) ────────────────
function Metric({ value, sub, icon, underline }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: C.text, lineHeight: '20px' }}>{value}</span>
        {icon && <i className={`ph ${icon}`} style={{ fontSize: 14, color: C.text }} />}
      </div>
      <span style={{
        fontFamily: F, fontWeight: 500, fontSize: 12, color: C.muted, lineHeight: '18px',
        textDecoration: underline ? 'underline' : 'none',
      }}>{sub}</span>
    </div>
  );
}

// ── Supplier meta line (🇵🇰 Pakistan · £50 min · Online) ────────────
function SupplierMeta({ color = C.muted }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: F, fontWeight: 500, fontSize: 12, color, lineHeight: '16px' }}>
      <span>🇵🇰 Pakistan</span>
      <span style={{ width: 2, height: 2, borderRadius: 999, background: color }} />
      <span>£50 min</span>
      <span style={{ width: 2, height: 2, borderRadius: 999, background: color }} />
      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        Online
        <span style={{ width: 6, height: 6, borderRadius: 999, background: C.green }} />
      </span>
    </div>
  );
}

// ── Identity row (avatar + name + meta) ─────────────────────────────
function IdentityRow() {
  return (
    <div style={{ padding: '8px 12px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
      <SupplierAvatar />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: C.text, lineHeight: '24px' }}>Creed Vintage</div>
        <SupplierMeta />
      </div>
    </div>
  );
}

// ── Metrics row (reused across variants) ────────────────────────────
function MetricsRow() {
  const divider = (
    <div style={{ width: 1, height: 38, background: C.grey300, flexShrink: 0 }} />
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '12px 12px 4px' }}>
      <Metric value="4.4" sub="123 reviews" underline />
      {divider}
      <Metric value="8 days" sub="Dispatch Time" />
      {divider}
      <Metric value="5" sub="Repeat Buyers" icon="ph-arrows-clockwise" />
    </div>
  );
}

// ── Supplier header (identity + metrics) ────────────────────────────
function SupplierHeader() {
  return (
    <React.Fragment>
      <IdentityRow />
      <MetricsRow />
    </React.Fragment>
  );
}

// ── Tabs (Bundles | Pieces) ─────────────────────────────────────────
function Tabs({ active = 'Pieces' }) {
  const tab = (label) => {
    const on = label === active;
    return (
      <div style={{
        flex: 1, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', cursor: 'pointer',
      }}>
        <span style={{ fontFamily: F, fontWeight: on ? 700 : 600, fontSize: 14, color: on ? C.text : C.muted }}>{label}</span>
        {on && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: C.sunflower }} />}
      </div>
    );
  };
  return (
    <div style={{ display: 'flex', borderBottom: `1px solid ${C.grey300}`, marginTop: 4 }}>
      {tab('Bundles')}
      {tab('Pieces')}
    </div>
  );
}

// ── Filter bar (chips) ──────────────────────────────────────────────
function FilterBar() {
  const chip = (content, key) => (
    <div key={key} style={{
      display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 14px',
      borderRadius: 999, border: `1px solid ${C.borderStrong}`, background: C.white,
      whiteSpace: 'nowrap', flexShrink: 0, cursor: 'pointer',
      fontFamily: F, fontWeight: 600, fontSize: 14, color: C.text,
    }}>{content}</div>
  );
  return (
    <div style={{
      display: 'flex', gap: 8, padding: '12px 16px', overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
    }}>
      {chip(<><i className="ph ph-funnel" style={{ fontSize: 16 }} />Filter</>, 'filter')}
      {chip(<><i className="ph ph-arrows-down-up" style={{ fontSize: 16 }} />Sort</>, 'sort')}
      {chip(<><i className="ph ph-tag" style={{ fontSize: 16 }} />On sale</>, 'sale')}
      {chip(<>Price<i className="ph ph-caret-down" style={{ fontSize: 14 }} /></>, 'price')}
      {chip(<>Brand<i className="ph ph-caret-down" style={{ fontSize: 14 }} /></>, 'brand')}
    </div>
  );
}

// ── Product card (ListingThumb) ─────────────────────────────────────
function ProductCard({ added }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '142 / 160',
        background: C.grey300, borderRadius: 8, overflow: 'hidden',
      }}>
        {/* wishlist pill */}
        <div style={{
          position: 'absolute', top: 8, right: 8, height: 26, padding: '0 8px',
          borderRadius: 999, background: C.white, display: 'flex', alignItems: 'center', gap: 4,
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}>
          <i className="ph ph-heart" style={{ fontSize: 14, color: C.text }} />
          <span style={{ fontFamily: F, fontWeight: 600, fontSize: 12, color: C.text }}>XX</span>
        </div>
        {/* carousel dots */}
        <div style={{ position: 'absolute', bottom: 10, left: 10, display: 'flex', gap: 4 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 5, height: 5, borderRadius: 999,
              background: i === 0 ? C.text : 'rgba(0,0,0,0.25)',
            }} />
          ))}
        </div>
        {/* add / added button */}
        <button style={{
          position: 'absolute', bottom: 8, right: 8, width: 32, height: 32, borderRadius: 999,
          border: added ? 'none' : `1px solid ${C.grey300}`,
          background: added ? C.text : C.white, cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        }} aria-label={added ? 'Added' : 'Add'}>
          <i className={added ? 'ph ph-check' : 'ph ph-plus'} style={{ fontSize: 16, color: added ? C.white : C.text }} />
        </button>
      </div>
      {/* price + meta */}
      <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: C.text }}>£X.XX</span>
        <span style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: C.muted }}>· 1 pc</span>
      </div>
      <div style={{
        marginTop: 2, fontFamily: F, fontWeight: 500, fontSize: 13, color: C.text, lineHeight: '17px',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>Corem ipsum dolor sit amet consectetur adipiscing elit</div>
    </div>
  );
}

// ── Feed (2-col grid) ───────────────────────────────────────────────
function Feed() {
  const cards = [
    { added: true }, { added: false }, { added: false },
    { added: false }, { added: false }, { added: false },
  ];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '0 12px 16px',
    }}>
      {cards.map((c, i) => <ProductCard key={i} added={c.added} />)}
    </div>
  );
}

// ── Bottom nav (Tab bar) ────────────────────────────────────────────
function BottomNav() {
  const items = [
    { label: 'Feed', icon: 'ph-squares-four', active: true },
    { label: 'Search', icon: 'ph-magnifying-glass' },
    { label: 'Suppliers', icon: 'ph-users' },
    { label: 'Cart', icon: 'ph-shopping-cart-simple', badge: '2' },
    { label: 'Account', icon: 'ph-user' },
  ];
  return (
    <div style={{
      display: 'flex', borderTop: `1px solid ${C.grey300}`, background: C.white,
      paddingTop: 8, paddingBottom: 22, flexShrink: 0,
    }}>
      {items.map((it, i) => (
        <div key={i} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          color: it.active ? C.text : C.muted, cursor: 'pointer', position: 'relative',
        }}>
          <div style={{ position: 'relative' }}>
            <i className={`ph ${it.active ? 'ph-fill ' + it.icon : it.icon}`} style={{ fontSize: 22 }} />
            {it.badge && (
              <span style={{
                position: 'absolute', top: -4, right: -8, minWidth: 16, height: 16, padding: '0 4px',
                borderRadius: 999, background: C.sunflower, color: C.text,
                fontFamily: F, fontWeight: 700, fontSize: 10, lineHeight: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
              }}>{it.badge}</span>
            )}
          </div>
          <span style={{ fontFamily: F, fontWeight: it.active ? 600 : 500, fontSize: 10 }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Screen ──────────────────────────────────────────────────────────
function SupplierCore() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: C.white }}>
      {/* clear the iOS status bar / dynamic island */}
      <div style={{ height: 50, flexShrink: 0 }} />
      <TopAppBar />
      <SupplierHeader />
      <Tabs />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <FilterBar />
        <Feed />
      </div>
      <BottomNav />
    </div>
  );
}

// Expose building blocks so variants/*.jsx can compose new heroes while
// reusing the baseline's lower half (metrics, tabs, filter, feed, nav).
window.SS = {
  C, F,
  SupplierAvatar, TopAppBar, SupplierMeta, IdentityRow, Metric, MetricsRow,
  SupplierHeader, Tabs, FilterBar, ProductCard, Feed, BottomNav,
  // shared placeholder photo helper for visual-led variants
  img: (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`,
};

// Expose + register baseline in the gallery.
window.SupplierCore = SupplierCore;
window.__supplierScreens = (window.__supplierScreens || []).concat([
  { name: 'Baseline — Vendor Page', Component: SupplierCore },
]);

// Framed phone wrapper (scaled IOSDevice) reused as each theme's baseline.
function FramedPhone({ children, scale = 0.82 }) {
  return (
    <div style={{ width: 402 * scale, height: 874 * scale, position: 'relative' }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
        <IOSDevice>{children}</IOSDevice>
      </div>
    </div>
  );
}
function BaselineApp() { return <FramedPhone><SupplierCore /></FramedPhone>; }
window.FramedPhone = FramedPhone;
window.BaselineApp = BaselineApp;
window.SS.FramedPhone = FramedPhone;
