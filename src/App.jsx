import React from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";


const App = () => {
  return (
    <>
    
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App