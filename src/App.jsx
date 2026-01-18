import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import NavBar from './components/navbar'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div className="w-full">
      <NavBar />

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
       <Footer />
    </div>
  )
}

