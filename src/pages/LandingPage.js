import React, { useState } from 'react'
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3'
import FAQ from '../components/FAQ'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function LandingPage() {
  const [display, setDisplay] = useState(false)
  const handleSidebar = () => {
    setDisplay(!display);
  }
  return (
    <>

      {
        display ? <Sidebar handleSidebar={handleSidebar}/> : <Navbar handleSidebar={handleSidebar}/>
      }
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <FAQ />
    </>
  )
}

export default LandingPage