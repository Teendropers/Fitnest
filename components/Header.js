export default function Header() {
  return (
    <header className="bg-[#0a1f3c] text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">FitNest</div>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/products" className="hover:underline">Shop</a>
        <a href="/cart" className="hover:underline">Cart</a>
      </nav>
    </header>
  )
}
