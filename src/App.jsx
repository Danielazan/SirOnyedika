import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/LandingPage/Hero'
import Category from './components/LandingPage/Category'
import NewArrivals from './components/LandingPage/NewArrivals'
import AboutUs from './components/LandingPage/AboutUs'
import FlashSales from './components/LandingPage/FlashSales'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Hero/>
      <Category/>
      <NewArrivals/>
      <AboutUs/>
      <FlashSales/>
    </>
  )
}

export default App
