import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

import './App.scss'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})  

  return (
    <div>
         <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
    <div className="footer"> 
       <p className="footer-text">@2022 Developed by &nbsp;
          <a href="https://luigidigital.com" className="footer-link">Luigi Corporation</a>
        </p>
    </div>
    </div>
  )
}

export default App
