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

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <Introduce />
      {/* <Sales />
      <Product />
      <Philoshopy />
      <Testimony />
      <Picture />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
