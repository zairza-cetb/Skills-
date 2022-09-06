import React from 'react'
import './Slide2.scss'
import {Slide2data1} from './Slide2data'

function Slide2() {
  return (
    <div className='wrap'>
    <div className='content-1'>
      <h2>What is <span style={{color:'#3370F6'}}>Skills</span><span style={{color:'#EB7F37'}}>++</span> ?</h2>
      <p>Skills++ is the biggest UPSKILLING program for future geeks and programmers by Zairza. An idea can pop up in the middle of a shower or while going on a walk, or even randomly after hours of thinking. But when it finally comes, the feeling is extraordinary. That feeling can be addictive and Zairza is here to give you that.</p>
    </div>
    <div className='content-2'>
      <h2>Why should you<br/> participate ?</h2>
      <div className='content-2-items'>
      {Slide2data1.map((item,index) =>{
            return(
                <li key={index} className={item.cName}>
                  <div className='content-2-wrapper'>
                    <div className='content-2-icon'><img className='slide-2-icon' src={item.path} alt='404'/></div>
                    <div>
                      <div className='content-2-title'>{item.title}</div>
                      <div className='content-2-detail'style={{color:'#667085'}}>{item.content}</div>
                    </div>
                  </div>
                </li>
            )         
        })}
      </div>
    </div>
    </div>
  )
}

export default Slide2