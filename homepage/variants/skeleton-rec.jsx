// skeleton-rec.jsx — annotated layout spec for the Recommended for you
// product card, using Figma-style dimension lines (red rules + red badges).

function HomeRecSkeleton() {
  const R = '#F25C2A';

  // Red number badge
  const Badge = ({ value, x, y }) => (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: 'translate(-50%, -50%)',
      background: R, color: '#fff',
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      fontSize: 11, fontWeight: 700,
      minWidth: 18, height: 18,
      padding: '0 4px',
      borderRadius: 3,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 10,
      boxSizing: 'border-box',
    }}>{value}</div>
  );

  // Vertical dim line with arrows at both ends + badge in the middle
  const DimV = ({ top, height, x, value }) => (
    <>
      <div style={{
        position: 'absolute', left: x, top, height,
        borderLeft: `1px solid ${R}`, pointerEvents: 'none',
      }} />
      {/* Top tick */}
      <div style={{ position: 'absolute', left: x - 4, top, width: 9, height: 1, background: R }} />
      {/* Top arrowhead */}
      <div style={{ position: 'absolute', left: x - 3, top: top - 3, width: 7, height: 7, borderLeft: `1px solid ${R}`, borderTop: `1px solid ${R}`, transform: 'rotate(45deg)', transformOrigin: 'top left' }} />
      {/* Bottom tick */}
      <div style={{ position: 'absolute', left: x - 4, top: top + height - 1, width: 9, height: 1, background: R }} />
      <Badge value={value} x={x} y={top + height / 2} />
    </>
  );

  // Horizontal dim line
  const DimH = ({ left, width, y, value }) => (
    <>
      <div style={{
        position: 'absolute', top: y, left, width,
        borderTop: `1px solid ${R}`, pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', top: y - 4, left, width: 1, height: 9, background: R }} />
      <div style={{ position: 'absolute', top: y - 4, left: left + width - 1, width: 1, height: 9, background: R }} />
      <Badge value={value} x={left + width / 2} y={y} />
    </>
  );

  const A = window.IMG_BANK || {};
  const heroImg = A.rec1 || 'assets/denim-frost.jpg';

  return (
    <div style={{
      height: '100%',
      background: '#FBF8F2',
      overflow: 'auto',
      fontFamily: 'Montserrat, sans-serif',
      paddingTop: 56,
      paddingBottom: 40,
    }}>
      <div style={{
        padding: '0 16px 18px',
        fontFamily: 'ui-monospace, monospace', fontSize: 10, color: '#475467',
        letterSpacing: 0.5,
      }}>
        SPECS · Recommended for you · Figma 3329:1626
      </div>

      {/* ─────────── Card spec — single card with dim lines ─────────── */}
      <div style={{
        position: 'relative',
        margin: '40px auto 24px',
        width: 165 + 80, // 40px gutter on each side for dim labels
        height: 175 + 110, // image + info area + room for bottom labels
        boxSizing: 'content-box',
        padding: '0 40px 60px',
      }}>
        {/* The real card */}
        <div style={{
          position: 'absolute',
          left: 40, top: 0,
          width: 165,
          background: '#fff',
          border: '0.77px solid #EAECF0',
          borderRadius: 4,
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 175,
            background: '#F2F4F7',
            overflow: 'hidden',
          }}>
            <img src={heroImg} alt="" style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
            }} />
            {/* Heart */}
            <button style={{
              position: 'absolute',
              top: 7.23, right: 7.23,
              background: '#fff',
              border: '1px solid #EAECF0',
              borderRadius: 999,
              padding: 8, lineHeight: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }} aria-label="Save">
              <i className="ph ph-heart" style={{ fontSize: 14, color: '#222832' }} />
            </button>
            {/* Ribbons */}
            <div style={{
              position: 'absolute', bottom: 18, left: 0,
              background: '#12B76A', color: '#fff',
              fontSize: 10, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.1px',
              padding: '4px 18px 4px 8px',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
              whiteSpace: 'nowrap',
            }}>Bulk available</div>
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              background: '#F04438', color: '#fff',
              fontSize: 10, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.1px',
              padding: '4px 18px 4px 8px',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
              whiteSpace: 'nowrap',
            }}>Up to 14% off</div>
          </div>
          <div style={{
            background: '#fff',
            padding: '6px 8px 8px',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            <div style={{
              fontSize: 14, fontWeight: 400, lineHeight: 'normal', color: '#1D2939',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>Levi's Vintage Storm</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#000', letterSpacing: '-0.14px' }}>£182.50</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: '#667085', letterSpacing: '-0.12px' }}>£15.21/pc · 12pcs</div>
            </div>
          </div>
        </div>

        {/* ── Dimension lines ──
            Card occupies left 40 → 205, top 0 → ~285
            Image area: top 0 → 175  */}

        {/* Heart top offset (8) — vertical dim between card top (y=0) and heart top (y=7.23) */}
        <DimV top={0} height={7.23} x={210} value={8} />
        {/* Heart right offset (8) — horizontal dim between heart right (x=205-7.23=197.77) and card right (205) */}
        <DimH left={197.77} width={7.23} y={-12} value={8} />

        {/* Card width (165) */}
        <DimH left={40} width={165} y={290} value={165} />

        {/* Image height (175) */}
        <DimV top={0} height={175} x={26} value={175} />

        {/* Card label */}
        <div style={{
          position: 'absolute', top: -30, left: 40,
          fontFamily: 'ui-monospace, monospace', fontSize: 10, color: R,
        }}>card · 165w · radius 4 · border 0.77 #EAECF0</div>
        <div style={{
          position: 'absolute', top: 305, left: 40,
          fontFamily: 'ui-monospace, monospace', fontSize: 10, color: R,
        }}>image 175 tall · info pad 6/8/8 · info gap 8 · details gap 2</div>
      </div>

      {/* ─────────── Section spec — abstract layout ─────────── */}
      <div style={{
        position: 'relative',
        margin: '24px 16px',
        padding: '16px 16px 24px',
        background: '#F2F4F7',
        border: `1px dashed ${R}`,
      }}>
        <div style={{
          position: 'absolute', top: -14, left: 12,
          background: '#FBF8F2', padding: '0 6px',
          fontFamily: 'ui-monospace, monospace', fontSize: 10, color: R,
        }}>section · bg #F2F4F7 · padding 16/16/24</div>

        <div style={{
          marginBottom: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: '#000' }}>Recommended for you</div>
            <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5, color: '#667085' }}>Based on your preferences</div>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: 999,
            border: '1px solid #EAECF0', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <i className="ph ph-arrow-right" style={{ fontSize: 16, color: '#222832' }} />
          </div>
        </div>

        {/* Gap callout */}
        <div style={{ position: 'relative', height: 12, marginBottom: 8 }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 5, borderTop: `1px dashed ${R}` }} />
          <Badge value={12} x={50} y={6} />
          <div style={{
            position: 'absolute', left: 70, top: 0,
            fontFamily: 'ui-monospace, monospace', fontSize: 10, color: R,
          }}>margin-bottom between header & cards</div>
        </div>

        {/* Card row placeholders */}
        <div style={{ display: 'flex', gap: 10, position: 'relative' }}>
          <div style={{ width: 165, height: 80, background: '#fff', border: '0.77px solid #EAECF0', borderRadius: 4, flexShrink: 0 }} />
          <div style={{ width: 165, height: 80, background: '#fff', border: '0.77px solid #EAECF0', borderRadius: 4, flexShrink: 0 }} />
          {/* Gap dim between cards */}
          <Badge value={10} x={170} y={40} />
        </div>
      </div>
    </div>
  );
}

(window.__homeScreens ||= []).push({ name: 'Specs · Rec', Component: HomeRecSkeleton });
