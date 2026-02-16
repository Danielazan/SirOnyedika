import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/LandingPage/Hero'
import Category from './components/LandingPage/Category'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Hero/>
      <Category/>
    </>
  )
}

export default App
