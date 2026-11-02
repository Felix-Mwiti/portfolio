import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Project'
import Contact from './component/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
