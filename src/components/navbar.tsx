
const Navbar = () => {
  return (
    <nav className="bg-transparent fixed z-50 top-0 left-0 w-full pt-4 px-8 flex justify-between text-neutral-200 mix-blend-difference">
      <a href="/" className="font-michroma text-xl">MX <span className="text-orange-600">-</span> bicycle</a>
      <div className="w-[40%] flex justify-between">
        <ul className="flex gap-4">
          <li><a href="#introduce">Introduce</a></li>
          <li><a href="#identity">Identity</a></li>
          <li><a href="#philosophy">Philoshopy</a></li>
          <li><a href="#testimony">Testimony</a></li>
        </ul>
        <div className="flex gap-4">
          <p><a href="#" className="underline">Shop</a></p>
          <p><a href="#" className="underline">Contact</a></p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
