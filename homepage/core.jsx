// core.jsx — Fleek consumer homepage (Feed tab) — baseline.
// Variants in variants/ follow the same registration pattern.

function HomeCore(props) {
  const carousel = props && props.carousel;
  const filters = [
    { label: 'BETA', selected: true },
    { label: 'Build a Bundle' },
    { label: 'Womenswear' },
    { label: 'Menswear' },
  ];

  // Catalogue tiles — Figma 132:712 (Personalisation / Homepage Catalogue)
  const recImages = [
    'assets/rec-img1.png',
    'assets/rec-img2.png',
    'assets/rec-img3.png',
    'assets/rec-img4.png',
  ];
  const tile = 'assets/tile-2.png';
  const tiles = [
    { title: 'Fall Drop',                  img: tile },
    { title: 'Trending Bundles',           img: tile },
    { title: 'Fleece Drop',                img: tile },
    { title: 'Denim Drop',                 img: tile },
    { title: 'Huge Ralph Lauren Restock',  img: tile },
    { title: 'Jackets',                    img: tile },
    { title: 'Summer Drop',                img: tile },
    { title: 'Collection Title',           img: tile },
  ];
  const tileColumns = [];
  for (let i = 0; i < tiles.length; i += 2) tileColumns.push(tiles.slice(i, i + 2));

  // Latest Drops cards
  const products = [
    {
      img: 'assets/rec-img1.png',
      title: 'Branded sweatshirt',
      price: '£252.03',
      sub: '£18.00/pc • 14pcs',
    },
    {
      img: 'assets/rec-img2.png',
      title: 'Juicy t shirts',
      price: '£70.06 - £7.06/pc',
      sub: '10 - 25 pcs',
    },
    {
      img: 'assets/rec-img3.png',
      title: 'Coach Bags',
      price: '£263.74',
      sub: '£21.98/pc • 12pcs',
    },
    {
      img: 'assets/rec-img4.png',
      title: 'Vintage tees',
      price: '£189.50',
      sub: '£15.79/pc • 12pcs',
    },
  ];

  // Phosphor icons — fill weight for selected, regular for unselected
  const phIcon = (name, filled = false) => (
    <i className={`${filled ? 'ph-fill' : 'ph'} ph-${name}`} style={{ fontSize: 24, lineHeight: 1 }} />
  );
  const tabs = [
    { label: 'Feed',      selected: true, icon: phIcon('squares-four', true) },
    { label: 'Search',                    icon: phIcon('magnifying-glass') },
    { label: 'Suppliers',                 icon: phIcon('storefront') },
    { label: 'Cart',      badge: 25,      icon: phIcon('shopping-cart-simple') },
    { label: 'Account',                   icon: phIcon('user') },
  ];

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      fontFamily: 'Montserrat, -apple-system, system-ui, sans-serif',
    }}>
      {/* Override iOS status bar to white-on-black */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 11 }}>
        <IOSStatusBar dark={true} />
      </div>

      {/* Black header */}
      <div style={{ background: '#000', color: '#fff', padding: '60px 16px 14px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 36 }}>
          {/* Logo — full Fleek mark with white wordmark for dark header */}
          <img
            src="assets/fleek-logo-white.png"
            alt="Fleek"
            style={{ height: 32, width: 'auto', display: 'block' }}
          />
          {/* Right cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              background: 'var(--color-sunflower)', color: '#000',
              padding: '6px 11px', borderRadius: 8,
              fontWeight: 700, fontSize: 13,
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="9" width="18" height="11" rx="1" stroke="#000" strokeWidth="1.8"/>
                <path d="M3 13h18" stroke="#000" strokeWidth="1.8"/>
                <path d="M12 9v11" stroke="#000" strokeWidth="1.8"/>
                <path d="M8 6c0-1.5 1.2-2.5 2.5-2.5C12 3.5 12 6 12 9c0-3 0-5.5 1.5-5.5C14.8 3.5 16 4.5 16 6c0 2-2 3-4 3s-4-1-4-3z" stroke="#000" strokeWidth="1.6" fill="none"/>
              </svg>
              <span>£25</span>
            </div>
            <div style={{ position: 'relative', padding: 2 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{
                position: 'absolute', top: -2, right: -4,
                background: '#F04438', color: '#fff',
                fontSize: 10, fontWeight: 700,
                borderRadius: 999, minWidth: 16, height: 16,
                padding: '0 4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>8</div>
            </div>
          </div>
        </div>
        {/* Search — Figma 1813:25037 */}
        <div style={{
          marginTop: 14,
          background: '#fff',
          border: '2px solid #EAECF0',
          borderRadius: 4,
          height: 40,
          padding: '0 14px',
          boxSizing: 'border-box',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#98A2B3" strokeWidth="1.5"/>
            <path d="M14 14l-3-3" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '16px',
            color: '#98A2B3',
            whiteSpace: 'nowrap',
          }}>
            Search “<span style={{ color: '#000' }}>Carhartt</span>”
          </span>
        </div>
      </div>

      {/* Scrollable body */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Filter chips — Figma 99:929 (Button Rail) sizing */}
        <div style={{
          display: 'flex', gap: 4,
          padding: 12,
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}>
          {filters.map((f, i) => (
            <div key={i} style={{
              padding: '8px 12px',
              borderRadius: 999,
              background: f.selected ? 'var(--color-electric-blue-700)' : '#EEF0F4',
              color: f.selected ? '#fff' : '#000',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: f.selected ? 800 : 600,
              fontSize: 12,
              lineHeight: 1.5,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>{f.label}</div>
          ))}
        </div>

        {/* Quick Flips Collection banner — Figma 131:277 */}
        <div style={{
          margin: '4px 16px 0',
          height: 160,
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          color: '#fff',
        }}>
          <img
            src="assets/quick-flips.png"
            alt=""
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
          {/* Text + badge column (221x160, pl-16, py-16) */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 221, height: 160,
            padding: '16px 0 16px 16px',
            boxSizing: 'border-box',
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
              <div style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800, fontSize: 16, lineHeight: 'normal',
                color: '#fff',
              }}>
                Quick Flips Collection
              </div>
              <div style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500, fontSize: 12, lineHeight: 'normal',
                color: '#fff',
              }}>
                New inventory - carefully selected for quick flips and strong profit margins
              </div>
            </div>
            <div style={{
              background: '#F04438',
              borderRadius: 4,
              padding: '4px 8px',
              filter: 'drop-shadow(4px 4px 0 #000)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800, fontSize: 12, lineHeight: '16px',
                color: '#fff', whiteSpace: 'nowrap',
              }}>
                LIMITED STOCK
              </span>
            </div>
          </div>
        </div>

        {/* Carousel slot — defaults to Supplier Carousel, can be overridden via prop */}
        {carousel || <DefaultSupplierCarousel />}

        {/* Catalogue — Figma 132:712 */}
        <div style={{
          display: 'flex',
          gap: 8,
          padding: '14px 16px 4px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}>
          {/* Stacked columns of 2 small tiles each (140x100) */}
          {tileColumns.map((col, ci) => (
            <div key={ci} style={{
              display: 'flex', flexDirection: 'column', gap: 8,
              flexShrink: 0,
            }}>
              {col.map((t, ti) => (
                <div key={ti} style={{
                  position: 'relative',
                  width: 140, height: 100,
                  borderRadius: 8,
                  overflow: 'hidden',
                }}>
                  <img src={t.img} alt="" style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 34%, #353535 100%)',
                  }} />
                  <div style={{
                    position: 'absolute', left: 12, right: 12, bottom: 8,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700, fontSize: 12, lineHeight: 1.2,
                    color: '#fff',
                  }}>
                    {t.title}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Latest Drops */}
        <div style={{ padding: '14px 0 0' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0 16px', marginBottom: 10,
          }}>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 16, fontWeight: 800, color: '#000',
            }}>Latest Drops</div>
            <span style={{
              color: 'var(--color-bluebell)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 14, fontWeight: 600,
              textDecoration: 'underline',
              display: 'inline-flex', alignItems: 'center', gap: 4,
            }}>
              View all
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          <div style={{
            display: 'flex', gap: 10,
            overflowX: 'auto',
            padding: '0 16px 12px',
            scrollbarWidth: 'none',
          }}>
            {products.map((p, i) => (
              <div key={i} style={{
                flexShrink: 0,
                width: 180,
                background: '#fff',
                border: '1px solid #EAECF0',
                borderRadius: 12,
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                {/* Photo */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                  background: '#E5E7EB',
                  overflow: 'hidden',
                }}>
                  <img src={p.img} alt="" style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                  }} />
                </div>
                {/* Card body */}
                <div style={{
                  padding: '12px 14px 14px',
                  display: 'flex', flexDirection: 'column', gap: 8,
                }}>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 14, fontWeight: 500,
                    color: '#222832',
                    lineHeight: 1.2,
                    minHeight: 34, // reserves 2 lines
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>{p.title}</div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 14, fontWeight: 800,
                    color: '#000',
                    lineHeight: 1.2,
                  }}>{p.price}</div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 13, fontWeight: 500,
                    color: '#98A2B3',
                    lineHeight: 1.3,
                  }}>{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tab bar */}
      <div style={{
        flexShrink: 0,
        background: '#fff',
        borderTop: '0.5px solid rgba(0,0,0,0.08)',
        padding: '8px 0 30px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
      }}>
        {tabs.map((t, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: t.selected ? '#000' : '#9CA3AF',
            minWidth: 56,
          }}>
            <div style={{ position: 'relative', height: 24, display: 'flex', alignItems: 'center' }}>
              {t.icon}
              {t.badge && (
                <div style={{
                  position: 'absolute', top: -6, right: -10,
                  background: '#F04438', color: '#fff',
                  fontSize: 10, fontWeight: 700,
                  borderRadius: 999, minWidth: 18, height: 16,
                  padding: '0 4px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{t.badge}</div>
              )}
            </div>
            <div style={{ fontSize: 11, fontWeight: t.selected ? 700 : 500 }}>{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Default supplier carousel — used when no `carousel` prop is provided.
// Figma 132:1182.
function DefaultSupplierCarousel() {
  return (
    <div style={{
      background: '#F2F4F7',
      padding: '16px 16px 24px',
      marginTop: 14,
    }}>
      <div style={{ marginBottom: 12 }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: '#000',
        }}>Title</div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 14, fontWeight: 500, lineHeight: 1.5, color: '#667085',
        }}>Subtitle</div>
      </div>
      <div style={{
        display: 'flex', gap: 12,
        overflowX: 'auto', scrollbarWidth: 'none',
        margin: '0 -16px', padding: '0 16px',
      }}>
        {[0, 1, 2].map(c => (
          <div key={c} style={{
            background: '#fff',
            padding: '12px 16px',
            borderRadius: 8,
            display: 'flex', flexDirection: 'column', gap: 12,
            flexShrink: 0,
          }}>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 14, fontWeight: 700, lineHeight: 1.5, color: '#000',
            }}>Title</div>
            {[0, 1].map(r => (
              <div key={r} style={{ display: 'flex', gap: 12 }}>
                {[0, 1].map(s => (
                  <div key={s} style={{ width: 150, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{
                      width: 150, height: 142,
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gridTemplateRows: '1fr 1fr',
                      gap: 1.62,
                      borderRadius: 8,
                      overflow: 'hidden',
                    }}>
                      {[0, 1, 2, 3].map(k => (
                        <div key={k} style={{
                          position: 'relative',
                          border: '1px solid #EAECF0',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/supplier-tile.png" alt="" style={{
                            position: 'absolute', inset: 0,
                            width: '100%', height: '100%',
                            objectFit: 'cover',
                          }} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 12, fontWeight: 700, lineHeight: 1.5, color: '#000',
                      }}>Supplier Name</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <span style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 12, fontWeight: 500, lineHeight: 1.5, color: '#667085',
                          }}>X.X</span>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 1.5l1.65 3.34 3.7.54-2.67 2.6.63 3.69L7 9.93l-3.31 1.74.63-3.69-2.67-2.6 3.7-.54L7 1.5z" fill="#F8C642"/>
                          </svg>
                        </div>
                        <span style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: 12, fontWeight: 500, lineHeight: 1.5, color: '#667085',
                        }}>(XXX)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Expose so variants in variants/*.jsx can wrap HomeCore with a custom carousel.
window.HomeCore = HomeCore;
