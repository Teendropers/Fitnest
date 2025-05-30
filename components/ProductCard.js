export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow-xl hover:shadow-2xl transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-2" />
      <h2 className="text-xl font-bold mb-1">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="font-semibold text-orange-600">₹{product.price}</p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2 w-full">Add to Cart</button>
    </div>
  )
}
