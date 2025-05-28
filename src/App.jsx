import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import  Hero  from "./Components/Hero.jsx"
import Products from './Components/Products.jsx'
import Shop from './Components/Shop.jsx'
import SaleBanner from './Components/SaleBanner.jsx'
import AOS from "aos"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Import } from 'lucide-react'
import Testimonal from "./Components/Testimonal.jsx"
import Footer from "./Components/Footer.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Shop />
      <SaleBanner />
      <Testimonal />
      <Footer />


    </>
  )
}

export default App;
