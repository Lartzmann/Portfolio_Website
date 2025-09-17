import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <div className="px-[25px]">
      <Hero />
      <Skills />
      <Projects />
      <About />
    </div>
    <Footer />

    </>
  )
}

export default App
