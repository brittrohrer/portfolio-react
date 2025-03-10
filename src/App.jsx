import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

import { Navbar } from "./components/Navbar"
import { Footer } from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

import './App.css'


function App() {
  return (
    <>
      <h1>Brittni's Portfolio</h1>
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
