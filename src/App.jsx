import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Contact from "./components/contact"
import About from "./components/about"
import Certificate from "./components/certificate";
import './index.css'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificate />
      <Contact />
    </>
  )
}

export default App