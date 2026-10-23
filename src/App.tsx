import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Project } from "./components/Project"
import { Team } from "./components/Team"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import './styles/global.css'
import './styles/theme.css'
import { Problem } from "./components/Problem"
import { Development } from "./components/Development"
import { lazy } from "react"
import { DeferredSection } from "./components/DeferredSection"
import Pitch from "./components/Pitch"

const LazyAbout = lazy(() =>
  import("./components/About").then(({ About }) => ({ default: About }))
)

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Problem />
      <Project />
      <Pitch />
      <Development />
      <DeferredSection id="about" component={LazyAbout} />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App