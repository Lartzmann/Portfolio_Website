import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import NavBar from './components/navbar'

function App() {
  

  return (
    <>
    <NavBar />
    <div className="px-[25px] w-full">
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
