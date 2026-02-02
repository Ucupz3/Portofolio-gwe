import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Contact from "./components/contact"
import About from "./components/about"
import './index.css'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App