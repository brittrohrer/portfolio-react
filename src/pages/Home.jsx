//React
import React from "react"

//Components
import { Hero } from "../components/Hero"

//Style Sheet
import "../styles/home.css"

export default function Home() {
    return (
        <div className="page">
            <h1>Home</h1>
            <Hero />
        </div>
    )
}