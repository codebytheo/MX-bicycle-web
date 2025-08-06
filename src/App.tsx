import { useEffect } from "react"
import Navbar from "./components/navbar"
import Contact from "./pages/contact"
import Footer from "./pages/footer"
import Home from "./pages/home"
import Introduce from "./pages/introduce"
import Philoshopy from "./pages/philoshopy"
import Picture from "./pages/picture"
import Product from "./pages/product"
import Sales from "./pages/sales"
import Testimony from "./pages/testimony"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on("scroll",ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

  },[])

  return (
    <div className='relative bg-neutral-900'>
      <Navbar />
      <Home />
      <Introduce />
      <Sales />
      <Product />
      <Philoshopy />
      <Testimony />
      <Picture />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
