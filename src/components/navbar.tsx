
const Navbar = () => {
  return (
    <nav className="bg-transparent fixed z-50 top-0 left-0 w-full pt-4 px-8 flex justify-between text-neutral-200 mix-blend-difference">
      <a href="/" className="font-michroma text-xl">MX <span className="text-orange-600">-</span> bicycle</a>
      <div className="w-[30%] flex justify-between">
        <ul className="flex gap-4">
          <li><a href="#">Work</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div>
          <p><a href="#">Contact</a></p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
