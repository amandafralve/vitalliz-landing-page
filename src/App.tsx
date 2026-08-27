import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Project } from "./components/Project"
import { Team } from "./components/Team"
import { Footer } from "./components/Footer"
import './styles/global.css'
import './styles/theme.css'
import { Problem } from "./components/Problem"
import { Development } from "./components/Development"


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Problem />
      <Project />
      <Development />
      <About />
      <Team />
      <Footer />
    </>
  )
}

export default App