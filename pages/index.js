import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'

const products = [
  { name: 'Resistance Bands', price: 1261, description: 'Set of 5 resistance bands for strength training.', image: 'https://m.media-amazon.com/images/I/71g+f6aFJwL.AC_SL1500.jpg' },
  { name: 'Smart Water Bottle', price: 1195, description: 'Glows to remind you to hydrate.', image: 'https://m.media-amazon.com/images/I/61Nw8p6WlSL.AC_SL1500.jpg' },
  { name: 'Massage Gun', price: 7648, description: 'Deep tissue massage gun with attachments.', image: 'https://m.media-amazon.com/images/I/61v5Z1+H4FL.AC_SL1500.jpg' },
  { name: 'Waist Trimmer Belt', price: 245, description: 'Enhances sweat during workouts.', image: 'https://m.media-amazon.com/images/I/71H0Z7e1x+L.AC_SL1500.jpg' },
  { name: 'Adjustable Dumbbells', price: 4979, description: 'Customizable weight dumbbells for home workouts.', image: 'https://example.com/dumbbells.jpg' },
  { name: 'Resistance Bands Set', price: 2034, description: 'High-quality resistance bands for full-body training.', image: 'https://example.com/bands.jpg' },
  { name: 'Yoga Mat - Eco Friendly', price: 2656, description: 'Eco-conscious non-slip yoga mat for all levels.', image: 'https://example.com/yogamat.jpg' }
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </main>
    </>
  )
}
