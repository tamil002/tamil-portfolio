import React from 'react'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Toaster/>
    </div>
  )
}

export default App
