import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

import { Navbar } from "./components/Navbar"
import { Footer } from './components/Footer'

/* Pages */
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'


/* Styles */
import './App.css'


function App() {
  return (
    <>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      
      
    </>
  )
}

export default App
