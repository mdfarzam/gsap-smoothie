import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar/>
      <HeroSection/>

      <div className='h-dvh border border-red-500'>

      </div>

    </main>
  )
}

export default App