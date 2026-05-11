// Variant 4 — Smart Mix
// Cards group recommendations by which signal combination drove them.
// Each item has a "why" sub line explaining the match.

function HomeSmartMix() {
  const I = window.IMG_BANK;
  const carousel = (
    <ProductCarousel
      title="Picked For You"
      subtitle="Curated from your full profile"
      cards={[
        {
          title: 'Brand × Stage',
          items: [
            { title: "Levi's easy flips",   sub: 'Top brand · low risk',  images: [I.tile, I.jeans, I.tile, I.jeans] },
            { title: 'Coach margin pick',   sub: 'Top brand · high £',     images: [I.rec3, I.rec3, I.rec3, I.rec3] },
            { title: 'Juicy quick wins',    sub: 'Top brand · fast sell',  images: [I.rec2, I.rec2, I.rec2, I.rec2] },
            { title: 'Carhartt bulk lot',   sub: 'Top brand · volume',     images: [I.tile, I.tile, I.tile, I.jeans] },
          ],
        },
        {
          title: 'Trending in Your Style',
          items: [
            { title: 'Y2K tees',         sub: 'Style cluster · hot now',   images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: 'Vintage outerwear',sub: 'Top category · restocked',  images: [I.rec4, I.rec4, I.rec4, I.rec4] },
            { title: 'Cargo pants',      sub: 'Trending up · matches you', images: [I.tile, I.jeans, I.tile, I.jeans] },
            { title: 'Statement bags',   sub: 'Style + your range',        images: [I.rec3, I.rec3, I.rec3, I.rec3] },
          ],
        },
        {
          title: 'Restock Top Categories',
          items: [
            { title: 'Denim restock',    sub: 'Your top category',         images: [I.tile, I.jeans, I.tile, I.jeans] },
            { title: 'Blouse restock',   sub: 'Your top category',         images: [I.rec2, I.rec1, I.rec2, I.rec1] },
            { title: 'Tee restock',      sub: 'Your top category',         images: [I.rec1, I.rec2, I.rec1, I.rec2] },
            { title: 'Outerwear restock',sub: 'Your top category',         images: [I.rec4, I.rec4, I.rec4, I.rec4] },
          ],
        },
      ]}
    />
  );
  return <HomeCore carousel={carousel} />;
}

(window.__homeScreens ||= []).push({ name: 'Smart Mix', Component: HomeSmartMix });
