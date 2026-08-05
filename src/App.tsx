import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Project } from "./components/Project"
import { Team } from "./components/Team"
import { Footer } from "./components/Footer"
import './styles/global.css'
import './styles/theme.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About />
      <Project />
      <Team />
      <Footer />
    </>
  )
}

export default App