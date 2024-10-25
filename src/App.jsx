import React from 'react'
import Hero from '../src/components/hero/Hero'
import About from '../src/components/about/About'
import Skills from '../src/components/skills/Skills'
// import Experience from '../src/components/experiences/Experience'
import Works from '../src/components/portfolio/Works'
import Contact from '../src/components/contact/Contact'
import Navbar from './layout/Nav'
import Footer from './layout/Footer'
// import Portfolio from './components/hero/Port'
// import Home from './pages/Home'
// import About from './pages/About'
// import Skills from './pages/Skills'
// import Experience from './pages/Experience'
// import Works from './pages/Works'
// import Contact from './pages/Contact'
import './App.css'
// import RecentProjects from './components/portfolio/RecentProjects'
// import Footer from './components/Footer'
// import Navbar from './components/Nav'




function App() {

  return (
    <>
      <div className=' bg-bodyColor'>
        <Navbar/>
        <Hero/>
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
