import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import './App.css'
import Hero from './Components/Hero';
import Services from './Components/Services';
import Pricing from './Components/Pricing'
import About from './Components/About'
import MoreService from './Components/MoreService';
import Footer from './Components/Footer';
import Banner from './Components/Banner';

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Hero/> 
     <Services/> 
     <Pricing/>
     <About/>
     <Banner />
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
