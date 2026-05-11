// skeleton.jsx — layout spec variant.
// Each section of Core is drawn as a labeled box with its dimensions,
// padding, gap, and any other relevant size annotation. Useful as a
// living blueprint of the design.

function HomeSkeleton() {
  const C = {
    bg: '#FBF8F2',          // page bg (cream)
    boxBg: '#fff',
    boxBorder: '1.5px dashed #98A2B3',
    accent: '#F25C2A',      // measurement accent
    labelColor: '#222832',
    dimColor: '#475467',
    mono: 'ui-monospace, "SF Mono", Menlo, monospace',
  };

  const Box = ({ children, h, bg, border, label, dim, dark, full, style = {} }) => (
    <div style={{
      border: border ?? C.boxBorder,
      borderRadius: 6,
      background: bg ?? C.boxBg,
      padding: 10,
      height: h,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      color: dark ? '#fff' : C.dimColor,
      margin: full ? 0 : '0 16px',
      ...style,
    }}>
      {label && (
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800, fontSize: 11, letterSpacing: 0.5,
          textTransform: 'uppercase',
          color: dark ? '#fff' : C.labelColor,
        }}>{label}</div>
      )}
      {dim && (
        <div style={{ fontFamily: C.mono, fontSize: 10, lineHeight: 1.45 }}>{dim}</div>
      )}
      {children}
    </div>
  );

  // Vertical gap annotation between sections
  const Gap = ({ size }) => (
    <div style={{
      height: size,
      margin: '0 16px',
      position: 'relative',
      borderLeft: `1px dashed ${C.accent}`,
      marginLeft: 32,
    }}>
      <div style={{
        position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
        fontFamily: C.mono, fontSize: 10, color: C.accent,
        background: C.bg, padding: '0 4px',
      }}>gap {size}</div>
    </div>
  );

  // Small inner sub-box
  const Sub = ({ label, dim, h, dark, style = {} }) => (
    <div style={{
      border: '1px dashed #B0B7C3',
      borderRadius: 4,
      padding: '6px 8px',
      height: h,
      boxSizing: 'border-box',
      fontFamily: C.mono, fontSize: 10, lineHeight: 1.35,
      color: dark ? 'rgba(255,255,255,0.85)' : C.dimColor,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      ...style,
    }}>
      {label && (
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700, fontSize: 10, letterSpacing: 0.4,
          textTransform: 'uppercase',
          color: dark ? '#fff' : C.labelColor,
        }}>{label}</div>
      )}
      {dim && <div>{dim}</div>}
    </div>
  );

  return (
    <div style={{
      height: '100%',
      display: 'flex', flexDirection: 'column',
      background: C.bg,
      paddingTop: 50, // clears the iOS dynamic island / status bar
    }}>
      <div style={{ flex: 1, overflow: 'auto', paddingBottom: 12 }}>
        {/* HEADER */}
        <Box
          label="Header"
          dim="402 × 152  ·  bg #000  ·  padding 60/16/14"
          bg="#222832"
          dark
          full
          style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', margin: 0 }}
        >
          <Sub label="Logo + £25 + Notif" dim="h: 36" dark />
          <div style={{ fontFamily: C.mono, fontSize: 10, color: 'rgba(255,255,255,0.7)' }}>↕ gap 14</div>
          <Sub label="Search Bar" dim="h: 40  ·  r: 4  ·  border: 2 #EAECF0" dark />
        </Box>

        <Gap size={14} />

        {/* FILTER CHIPS */}
        <Box
          label="Filter Chips"
          dim="padding 12 (all)  ·  gap 4  ·  scroll-x  ·  each chip: h 30 · pad 8/12 · r 999 · 12/600"
        >
          <div style={{
            display: 'flex', gap: 4, overflow: 'hidden',
            alignItems: 'center',
          }}>
            {[
              { l: 'BETA', selected: true, w: 56 },
              { l: 'Build a Bundle',    w: 110 },
              { l: 'Womenswear',        w: 92 },
              { l: 'Menswear',          w: 78 },
              { l: '…',                 w: 24 },
            ].map((c, i) => (
              <div key={i} style={{
                height: 30,
                width: c.w,
                borderRadius: 999,
                border: '1px dashed #B0B7C3',
                background: c.selected ? '#4D63FF' : '#EEF0F4',
                color: c.selected ? '#fff' : '#222832',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: c.selected ? 800 : 600, fontSize: 11,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                opacity: c.l === '…' ? 0.5 : 1,
              }}>{c.l}</div>
            ))}
          </div>
        </Box>

        <Gap size={4} />

        {/* QUICK FLIPS BANNER */}
        <Box
          label="Quick Flips Banner"
          dim="369 × 160  ·  margin 0/16  ·  radius 4  ·  bg: photo + overlay"
          h={70}
        />

        <Gap size={14} />

        {/* SUPPLIER CAROUSEL */}
        <Box
          label="Supplier Carousel"
          dim="full-bleed  ·  bg #F2F4F7  ·  padding 16/16/24"
          bg="#F2F4F7"
          full
          style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', margin: 0 }}
        >
          <Sub label="Title" dim="16/700  ·  1 line" />
          <Sub label="Subtitle" dim="14/500 #667085  ·  1 line" />
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.accent }}>↕ gap 12</div>
          <div style={{ display: 'flex', gap: 8, overflow: 'hidden' }}>
            <Sub
              label="Supplier Card"
              dim={'344w  ·  pad 16/12  ·  r:8  ·  bg #fff\n2×2 grid of 150×142 supplier blocks'}
              style={{ flex: 1, whiteSpace: 'pre-line' }}
            />
            <Sub label="↻ scroll-x" dim="gap 12" style={{ width: 80, fontStyle: 'italic' }} />
          </div>
        </Box>

        <Gap size={14} />

        {/* CATALOGUE */}
        <Box
          label="Catalogue Tiles"
          dim="padding 14/16/4  ·  gap 8  ·  scroll-x"
        >
          <div style={{ display: 'flex', gap: 6 }}>
            <Sub
              label="Recommended For You"
              dim={'140 × 208\nbg #282828\n2×2 product images'}
              style={{ flex: 1, whiteSpace: 'pre-line' }}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Sub label="Tile" dim="140 × 100  ·  r:8" />
              <Sub label="Tile" dim="140 × 100  ·  r:8" />
            </div>
            <Sub
              label="…"
              dim="scroll-x"
              style={{ width: 50, fontStyle: 'italic' }}
            />
          </div>
        </Box>

        <Gap size={14} />

        {/* LATEST DROPS */}
        <Box
          label="Latest Drops"
          dim="padding 14/0/0  ·  header padding 0/16  ·  scroll-x"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Sub label="Latest Drops" dim="16/800" style={{ flex: 1 }} />
            <Sub label="View all ›" dim="14/600 bluebell" style={{ width: 90 }} />
          </div>
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.accent }}>↕ margin-bottom 10</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Sub
              label="Card"
              dim={'180w  ·  r:12 #EAECF0\nimg 180×180\nbody pad 12/14/14\ntitle 14/500 · price 14/800 · sub 13/500 #98A2B3'}
              style={{ flex: 1, whiteSpace: 'pre-line' }}
            />
            <Sub label="Card" dim="180w · gap 10" style={{ width: 70, fontStyle: 'italic' }} />
          </div>
        </Box>
      </div>

      {/* TAB BAR */}
      <div style={{
        flexShrink: 0,
        borderTop: C.boxBorder,
        background: '#fff',
        padding: '10px 16px 28px',
      }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800, fontSize: 11, letterSpacing: 0.5,
          textTransform: 'uppercase',
          color: C.labelColor,
          marginBottom: 6,
        }}>Tab Bar</div>
        <div style={{
          fontFamily: C.mono, fontSize: 10, color: C.dimColor,
          marginBottom: 8,
        }}>padding 8/0/30  ·  flex space-around  ·  Phosphor icons 24px</div>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: 4 }}>
          {['Feed', 'Search', 'Suppliers', 'Cart', 'Account'].map((l, i) => (
            <Sub key={i} label={l} dim="" style={{ flex: 1, textAlign: 'center', padding: 4 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

(window.__homeScreens ||= []).push({ name: 'Skeleton', Component: HomeSkeleton });
