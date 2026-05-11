// on-load.jsx — homepage on first load with a coachmark tooltip
// pointing at the Recommended for you section.
// Scrim: 60% black behind the section (dims everything else).
// Tooltip: Figma 3551:2403 (Molecules · Tooltip · Bottom · Center).

function HomeOnLoad() {
  const A = 'assets/';

  const cards = [
    {
      title: 'Denim',
      items: [
        { title: "Levi's Vintage Storm", price: '£182.50', sub: '£15.21/pc · 12pcs',
          bulk: true, discount: 'Up to 14% off*',
          images: [A + 'denim-frost.jpg'] },
        { title: 'Wrangler Flared Mix',  price: '£164.00', sub: '£13.67/pc · 12pcs',
          bulk: true,
          images: [A + 'denim-collection.jpg'] },
        { title: 'True Religion Bundle', price: '£312.75', sub: '£15.64/pc · 20pcs',
          discount: 'Up to 18% off*',
          images: [A + 'denim-embroidered.jpg'] },
        { title: 'Lucky Brand Baggy',    price: '£94.80',  sub: '£47.40/pc · 2pcs',
          images: [A + 'denim-baggy.jpg'] },
      ],
    },
    {
      title: 'Outerwear',
      items: [
        { title: 'TNF Nuptse Puffers',    price: '£268.00', sub: '£33.50/pc · 8pcs',
          discount: 'Up to 12% off*',
          images: [A + 'outer-northface.jpg'] },
        { title: 'Carhartt Work Jackets', price: '£198.40', sub: '£24.80/pc · 8pcs',
          bulk: true,
          images: [A + 'outer-carhartt.jpg'] },
        { title: 'Nike Jacket Bundle',    price: '£152.00', sub: '£12.67/pc · 12pcs',
          images: [A + 'outer-nike.jpg'] },
        { title: 'Y2K Cowgirl Jackets',   price: '£88.00',  sub: '£11.00/pc · 8pcs',
          discount: 'Up to 20% off*',
          images: [A + 'outer-cowgirl.jpg'] },
      ],
    },
    {
      title: 'Polos & Knits',
      items: [
        { title: 'Polo RL Tees',          price: '£126.00', sub: '£7.00/pc · 18pcs',
          bulk: true,
          images: [A + 'polo-rl-tees.jpg'] },
        { title: 'Lacoste Sweater',       price: '£42.00',  sub: '1pc',
          images: [A + 'polo-lacoste.jpg'] },
        { title: 'Ralph Lauren Knits',    price: '£196.00', sub: '£14.00/pc · 14pcs',
          images: [A + 'knit-rl-sweater.jpg'] },
        { title: 'Polo Special Ed.',      price: '£148.00', sub: '£18.50/pc · 8pcs',
          discount: 'Up to 10% off*',
          images: [A + 'polo-rl-special.jpg'] },
      ],
    },
  ];

  // Figma 3551:2087 — black tooltip card, 327 wide, padding 16, radius 8
  const Tooltip = () => (
    <div style={{
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 10.5,   // room for the downward indicator
      width: 327,
      zIndex: 30,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 8,
        padding: 16,
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        position: 'relative',
        boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
      }}>
        {/* Slot: gap 16 between text block and button row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Text block: title row + body, gap 8 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Title row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                flex: 1, minWidth: 0,
                fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: '#000',
              }}>
                New: tailored picks just for you
              </div>
              <button style={{
                width: 32, height: 32, borderRadius: 999,
                background: 'transparent', border: 'none',
                padding: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
              }} aria-label="Dismiss">
                <i className="ph ph-x" style={{ fontSize: 18, color: '#000' }} />
              </button>
            </div>
            {/* Body */}
            <div style={{
              fontSize: 14, fontWeight: 500, lineHeight: 1.4, color: '#000',
            }}>
              Products picked based on the brands and categories you set up during onboarding.
            </div>
          </div>
          {/* Button row: gap 4 */}
          <div style={{ display: 'flex', gap: 4 }}>
            <button style={{
              height: 32, padding: '0 24px',
              background: '#000', color: '#fff',
              border: 'none', borderRadius: 4,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 10, fontWeight: 700, lineHeight: 1.4,
              cursor: 'pointer',
            }}>Got it</button>
          </div>
        </div>
      </div>
      {/* Downward indicator — 24×10.5 triangle, centered, white */}
      <div style={{
        width: 0, height: 0,
        margin: '0 auto',
        borderLeft: '12px solid transparent',
        borderRight: '12px solid transparent',
        borderTop: '10.5px solid #fff',
        filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.08))',
      }} />
    </div>
  );

  // Wrap the section + scrim + tooltip so they share a relative origin.
  // The two scrim panels extend above and below the section to dim
  // everything else in the scrollable body.
  const SCRIM = 'rgba(0, 0, 0, 0.6)';
  const carousel = (
    <div style={{ position: 'relative', zIndex: 20 }}>
      {/* Top scrim — extends upward, dims content above */}
      <div style={{
        position: 'absolute',
        bottom: '100%', left: 0, right: 0,
        height: 9999,
        background: SCRIM,
        pointerEvents: 'none',
        zIndex: 5,
      }} />
      {/* Bottom scrim — extends downward, dims content below */}
      <div style={{
        position: 'absolute',
        top: '100%', left: 0, right: 0,
        height: 9999,
        background: SCRIM,
        pointerEvents: 'none',
        zIndex: 5,
      }} />

      <ProductCarousel
        title="Recommended for you"
        subtitle="Based on your preferences"
        cards={cards}
      />

      <Tooltip />
    </div>
  );

  return <HomeCore carousel={carousel} />;
}

(window.__homeScreens ||= []).push({ name: 'On Load', Component: HomeOnLoad });
