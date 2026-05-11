// "Recommended for you" variant — product-focused.
// Cards group items by category; each item is a product listing.
// Photos pulled from joinfleek.com/home for accuracy.

function HomeByStage() {
  const A = 'assets/';
  const carousel = (
    <ProductCarousel
      title="Recommended for you"
      subtitle="Based on your preferences"
      cards={[
        {
          title: 'Denim',
          items: [
            { title: "Levi's Vintage Storm", price: '£182.50', sub: '£15.21/pc · 12pcs',
              likes: '1.2K', bulk: true, discount: 'Up to 14% off*',
              images: [A + 'denim-frost.jpg'] },
            { title: 'Wrangler Flared Mix',  price: '£164.00', sub: '£13.67/pc · 12pcs',
              likes: '845', bulk: true,
              images: [A + 'denim-collection.jpg'] },
            { title: 'True Religion Bundle', price: '£312.75', sub: '£15.64/pc · 20pcs',
              likes: '1K+', discount: 'Up to 18% off*',
              images: [A + 'denim-embroidered.jpg'] },
            { title: 'Lucky Brand Baggy',    price: '£94.80',  sub: '£47.40/pc · 2pcs',
              likes: '76',
              images: [A + 'denim-baggy.jpg'] },
          ],
        },
        {
          title: 'Outerwear',
          items: [
            { title: 'TNF Nuptse Puffers',    price: '£268.00', sub: '£33.50/pc · 8pcs',
              likes: '540', discount: 'Up to 12% off*',
              images: [A + 'outer-northface.jpg'] },
            { title: 'Carhartt Work Jackets', price: '£198.40', sub: '£24.80/pc · 8pcs',
              likes: '320', bulk: true,
              images: [A + 'outer-carhartt.jpg'] },
            { title: 'Nike Jacket Bundle',    price: '£152.00', sub: '£12.67/pc · 12pcs',
              likes: '180',
              images: [A + 'outer-nike.jpg'] },
            { title: 'Y2K Cowgirl Jackets',   price: '£88.00',  sub: '£11.00/pc · 8pcs',
              likes: '95', discount: 'Up to 20% off*',
              images: [A + 'outer-cowgirl.jpg'] },
          ],
        },
        {
          title: 'Polos & Knits',
          items: [
            { title: 'Polo RL Tees',          price: '£126.00', sub: '£7.00/pc · 18pcs',
              likes: '410', bulk: true,
              images: [A + 'polo-rl-tees.jpg'] },
            { title: 'Lacoste Sweater',       price: '£42.00',  sub: '1pc',
              likes: '12',
              images: [A + 'polo-lacoste.jpg'] },
            { title: 'Ralph Lauren Knits',    price: '£196.00', sub: '£14.00/pc · 14pcs',
              likes: '230',
              images: [A + 'knit-rl-sweater.jpg'] },
            { title: 'Polo Special Ed.',      price: '£148.00', sub: '£18.50/pc · 8pcs',
              likes: '67', discount: 'Up to 10% off*',
              images: [A + 'polo-rl-special.jpg'] },
          ],
        },
      ]}
    />
  );
  return <HomeCore carousel={carousel} />;
}

(window.__homeScreens ||= []).push({ name: 'Recommended for you', Component: HomeByStage });
