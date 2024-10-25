import React, { useContext } from 'react'
import Hero from '../src/components/hero/Hero'
import About from '../src/components/about/About'
import Skills from '../src/components/skills/Skills'
// import Experience from '../src/components/experiences/Experience'
import Works from '../src/components/portfolio/Works'
import Contact from '../src/components/contact/Contact'
import Navbar from './layout/Nav'
import Footer from './layout/Footer'
import './App.css'
import { PageTheme } from './contexts/ThemeContext'




function App() {
  const { theme } = useContext(PageTheme)
  return (
    <>
      <div  className={`bg-${theme}  ${theme === "dark" ? "bg-gradient-to-r from-blue-200 to-purple-400" : "bg-bodyColor" }`}>
        <Navbar/>
        <div className="" id='home'>
        <Hero/>
        </div>
        <div id='about'>
        <About/>
        </div>
        <div id='skills'>
        <Skills/>
        </div>
        
        <div className="" id='portfolio'>
        <Works/>
        </div>
        <div className="" id='contact'>
        <Contact/>
        </div>
        <Footer/>
       
       </div>
    </>
  )
}

export default App
