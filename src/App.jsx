import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

// Components
import Layout from "./components/Layout"
import HomeLayout from "./components/HomeLayout"

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
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
