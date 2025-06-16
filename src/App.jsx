import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

// Components
import Layout from "./components/Layout"

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'


// Styles
import './App.css'


function App() {
  return (
    <>
    {/* Routes Setup 
      - have main layout for all
      - use relative routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
