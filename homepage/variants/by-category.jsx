// Variant 2 — By Category
// Cards group categories by relationship to the seller's existing range.

function HomeByCategory() {
  const I = window.IMG_BANK;
  const carousel = (
    <ProductCarousel
      title="Categories You Love"
      subtitle="Fresh stock in shapes you reach for"
      cards={[
        {
          title: 'Your Best Sellers',
          items: [
            { title: 'Denim',     sub: '248 pcs · £6-22/pc', images: [I.tile, I.jeans, I.tile, I.jeans] },
            { title: 'Blouses',   sub: '112 pcs · £4-12/pc', images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: 'Tees',      sub: '360 pcs · £3-8/pc',  images: [I.rec1, I.rec2, I.rec1, I.rec2] },
            { title: 'Outerwear', sub: '74 pcs · £12-40/pc', images: [I.rec4, I.rec4, I.rec4, I.rec4] },
          ],
        },
        {
          title: 'Restock Now',
          items: [
            { title: 'Sweaters',     sub: 'Low stock · 42 pcs', images: [I.rec4, I.rec1, I.rec4, I.rec1] },
            { title: 'Dresses',      sub: 'Low stock · 28 pcs', images: [I.rec1, I.rec2, I.rec1, I.rec2] },
            { title: 'Skirts',       sub: 'Low stock · 35 pcs', images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: 'Bags',         sub: 'Low stock · 18 pcs', images: [I.rec3, I.rec3, I.rec3, I.rec3] },
          ],
        },
        {
          title: 'Expand Your Range',
          items: [
            { title: 'Activewear', sub: 'Trending up',   images: [I.rec1, I.rec4, I.rec1, I.rec4] },
            { title: 'Loungewear', sub: 'New segment',   images: [I.rec1, I.rec2, I.rec1, I.rec2] },
            { title: 'Footwear',   sub: 'Try a lot',     images: [I.rec4, I.rec3, I.rec4, I.rec3] },
            { title: 'Accessories', sub: 'Add to bundles', images: [I.rec3, I.rec3, I.rec3, I.rec3] },
          ],
        },
      ]}
    />
  );
  return <HomeCore carousel={carousel} />;
}

(window.__homeScreens ||= []).push({ name: 'By Category', Component: HomeByCategory });
