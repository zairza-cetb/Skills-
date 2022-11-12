import React from 'react'
import Slide1 from '../../components/Slide1/Slide1'
import Slide2 from '../../components/Slide2/Slide2'
import Slide3 from '../../components/Slide3/Slide3'
import FAQ from '../../components/FAQ/FAQ'
import { ToastContainer } from 'react-toastify'

function LandingPage() {

  return (
    <>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <FAQ />
      <ToastContainer />
    </>
  )
}

export default LandingPage