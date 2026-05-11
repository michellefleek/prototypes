// _shared.jsx — flat product card carousel (Latest-Drops styling).
// Flattens `cards[].items` into a single horizontal row of compact cards
// (one per brand), sized so 3+ fit on screen.

function ProductCarousel({ title, subtitle, cards }) {
  const items = cards.flatMap(c => c.items);

  return (
    <div style={{
      background: '#F2F4F7',
      padding: 16,
      marginTop: 14,
    }}>
      <div style={{
        marginBottom: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: '#000',
          }}>{title}</div>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 14, fontWeight: 500, lineHeight: 1.5, color: '#667085',
          }}>{subtitle}</div>
        </div>
        <button style={{
          width: 32, height: 32,
          borderRadius: 999,
          background: '#fff',
          border: '1px solid #EAECF0',
          cursor: 'pointer',
          padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }} aria-label={`See all in ${title}`}>
          <i className="ph ph-arrow-right" style={{ fontSize: 16, color: '#222832' }} />
        </button>
      </div>
      <div style={{
        display: 'flex', gap: 10,
        overflowX: 'auto', scrollbarWidth: 'none',
        margin: '0 -16px', padding: '0 16px',
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            flexShrink: 0,
            width: 165,
            background: '#fff',
            border: '0.77px solid #EAECF0',
            borderRadius: 4,
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Image area — 175px tall (Figma 3329:1627) */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: 175,
              background: '#F2F4F7',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <img src={it.images[0]} alt="" style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
              }} />
              {/* Favourite icon — top right (Figma 3329:1893) */}
              <button style={{
                position: 'absolute',
                top: 7.23, right: 7.23,
                background: '#fff',
                border: '1px solid #EAECF0',
                borderRadius: 999,
                padding: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                lineHeight: 0,
              }} aria-label="Save">
                <i className="ph ph-heart" style={{ fontSize: 14, color: '#222832' }} />
              </button>
              {/* Ribbon badges — bottom left (Figma 3329:1629, 3329:1632) */}
              {it.discount && (
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0,
                  background: '#F04438', color: '#fff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 10, fontWeight: 700, lineHeight: 1,
                  letterSpacing: '-0.1px',
                  padding: '4px 18px 4px 8px',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
                  whiteSpace: 'nowrap',
                }}>{it.discount}</div>
              )}
              {it.bulk && (
                <div style={{
                  position: 'absolute',
                  bottom: it.discount ? 18 : 0,
                  left: 0,
                  background: '#12B76A', color: '#fff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 10, fontWeight: 700, lineHeight: 1,
                  letterSpacing: '-0.1px',
                  padding: '4px 18px 4px 8px',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
                  whiteSpace: 'nowrap',
                }}>Bulk available</div>
              )}
            </div>
            {/* Info — Figma 3329:1635 */}
            <div style={{
              background: '#fff',
              padding: '6px 8px 8px',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 14, fontWeight: 400, lineHeight: 'normal', color: '#1D2939',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>{it.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {it.price && (
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 14, fontWeight: 700, lineHeight: 'normal', color: '#000',
                    letterSpacing: '-0.14px',
                  }}>{it.price}</div>
                )}
                {it.sub && (
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12, fontWeight: 500, lineHeight: 'normal', color: '#667085',
                    letterSpacing: '-0.12px',
                    whiteSpace: 'nowrap',
                  }}>{it.sub}</div>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* See-all CTA tile — takes user to the full collection */}
        <button style={{
          flexShrink: 0,
          width: 165,
          background: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: 0,
          cursor: 'pointer',
          display: 'flex', flexDirection: 'column',
          alignItems: 'stretch',
        }} aria-label="See all">
          <div style={{
            flex: 1,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12,
            padding: 16,
          }}>
            <div style={{
              width: 36, height: 36,
              borderRadius: 999,
              background: '#222832',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i className="ph ph-arrow-right" style={{ fontSize: 16, color: '#fff' }} />
            </div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 13, fontWeight: 700, lineHeight: 1.2,
              color: '#222832', textAlign: 'center',
            }}>See all</div>
          </div>
        </button>
      </div>
    </div>
  );
}

// Image bank for variants
window.IMG_BANK = {
  rec1: 'assets/rec-img1.png',
  rec2: 'assets/rec-img2.png',
  rec3: 'assets/rec-img3.png',
  rec4: 'assets/rec-img4.png',
  tile: 'assets/tile-2.png',
  jeans: 'assets/quick-flips.png',
};

window.ProductCarousel = ProductCarousel;
