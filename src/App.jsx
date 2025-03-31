import About from "./components/About"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import './App.css'
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import Services from "./components/Services"
function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
