import React from 'react'
import './Slide1.scss'
import heroImage from "../../Assets/images/img1.png"
import {useNavigate} from "react-router-dom";

function Slide1() {
  const nav = useNavigate();
  return (
    <div id="home" className='slide1-bg'>
      <div className='slide1-content'>
        <div className='heroContent'>
          <h1>The biggest <span style={{ color: '#3370F6' }}>Upskilling</span> program for future geeks.</h1>
          <p>Get started with some real time projects and get your hands dirty and learn more</p>
          <div className='slide1-button'>
            <button className='btn' onClick={()=>nav('/register')}>Register Now</button>
            <button className='btn btn2'>Check Domains →</button>
          </div>
        </div>
        <img src={heroImage} alt="" className='heroImage' />
      </div>
      <div className='blueContainerTop'></div>
      <div className='blueContainerBottom'></div>
    </div>
  )
}

export default Slide1