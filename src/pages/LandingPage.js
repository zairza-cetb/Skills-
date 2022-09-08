import React from 'react'
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3'
import FAQ from '../components/FAQ'

function LandingPage() {
  return (
    <>
      {/* <Navbar/> */}
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <FAQ />
    </>
  )
}

export default LandingPage