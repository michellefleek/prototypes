// Variant 1 — By Brand
// Section is grouped into card "buckets". Each bucket holds 4 brand items.
// Item title = brand name, sub = inventory hint.

function HomeByBrand() {
  const I = window.IMG_BANK;
  const carousel = (
    <ProductCarousel
      title="Your Brand Mix"
      subtitle="From the labels you sell"
      cards={[
        {
          title: 'Restocked Favourites',
          items: [
            { title: "Levi's",        sub: '32 new pcs',  images: [I.tile, I.jeans, I.tile, I.jeans] },
            { title: 'Carhartt',      sub: '18 new pcs',  images: [I.tile, I.tile, I.jeans, I.tile] },
            { title: 'Juicy Couture', sub: '24 new pcs',  images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: 'Coach',         sub: '12 new pcs',  images: [I.rec3, I.rec3, I.rec3, I.rec3] },
          ],
        },
        {
          title: 'Brands You Sell',
          items: [
            { title: 'Reebok',        sub: '£5-12/pc',   images: [I.rec4, I.rec1, I.rec4, I.rec1] },
            { title: 'BCBG',          sub: '£9-18/pc',   images: [I.rec2, I.rec1, I.rec2, I.rec4] },
            { title: 'Tommy',         sub: '£8-22/pc',   images: [I.tile, I.rec3, I.tile, I.rec3] },
            { title: 'Polo',          sub: '£11-28/pc',  images: [I.rec1, I.rec4, I.rec1, I.rec4] },
          ],
        },
        {
          title: 'Discover',
          items: [
            { title: 'Free People',   sub: 'New on Fleek',  images: [I.rec1, I.rec2, I.rec1, I.rec2] },
            { title: 'Aritzia',       sub: 'New on Fleek',  images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: 'Stüssy',        sub: 'Trending',      images: [I.rec4, I.rec4, I.rec1, I.rec4] },
            { title: 'Brandy Melville', sub: 'Trending',    images: [I.rec1, I.rec2, I.rec1, I.rec2] },
          ],
        },
      ]}
    />
  );
  return <HomeCore carousel={carousel} />;
}

(window.__homeScreens ||= []).push({ name: 'By Brand', Component: HomeByBrand });
