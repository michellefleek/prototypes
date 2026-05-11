// Variant 5 — By Theme / Aesthetic
// Cards group themes by aesthetic family. Each item is a themed drop.

function HomeThemes() {
  const I = window.IMG_BANK;
  const carousel = (
    <ProductCarousel
      title="Drops in Your Style"
      subtitle="Inspired by your favourite brands"
      cards={[
        {
          title: 'Vintage',
          items: [
            { title: 'Y2K Revival',     sub: 'Juicy · BCBG · Bebe',        images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: '90s Vintage',     sub: 'Tommy · Polo · Reebok',      images: [I.rec4, I.rec2, I.rec4, I.rec2] },
            { title: 'Streetwear Edit', sub: 'Stüssy · Supreme · Nike',    images: [I.rec3, I.rec4, I.rec3, I.rec4] },
            { title: 'Workwear Restock',sub: 'Carhartt · Dickies · Levi’s', images: [I.tile, I.tile, I.jeans, I.tile] },
          ],
        },
        {
          title: 'Soft & Elevated',
          items: [
            { title: 'Coastal Grandma', sub: 'Ralph Lauren · J.Crew',      images: [I.rec1, I.rec4, I.rec1, I.rec4] },
            { title: 'Soft Girl',       sub: 'Aritzia · Brandy · Free P.', images: [I.rec1, I.rec2, I.rec1, I.rec2] },
            { title: 'Old Money',       sub: 'Polo · Burberry · Lacoste',  images: [I.rec4, I.rec1, I.rec4, I.rec1] },
            { title: 'Quiet Luxury',    sub: 'Theory · Vince · COS',       images: [I.rec1, I.rec3, I.rec1, I.rec3] },
          ],
        },
        {
          title: 'Statement',
          items: [
            { title: 'Maximalist',  sub: 'Bold prints, layered looks',     images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: 'Goth Glam',   sub: 'All black, edgy details',        images: [I.rec3, I.rec4, I.rec3, I.rec4] },
            { title: 'Y2K Glam',    sub: 'Rhinestones, velour, pink',      images: [I.rec2, I.rec2, I.rec2, I.rec2] },
            { title: 'Cottagecore', sub: 'Florals, lace, linen',           images: [I.rec1, I.rec2, I.rec1, I.rec2] },
          ],
        },
      ]}
    />
  );
  return <HomeCore carousel={carousel} />;
}

(window.__homeScreens ||= []).push({ name: 'Themes', Component: HomeThemes });
