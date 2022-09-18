import React from 'react'
import { Slide3data1,Slide3data2,Slide3data3} from './Slide3data'
import './Slide3.scss'

function Slide3() {
  return (
    <div id="domain" className='slide3-wrapper'>
      <div className='slide3-content'>
        <div className='slide3-title'>Domains<br/> we offer</div>
        <div className='slide3-para'>A wide variety of domains offered by us to give you ample opportunities to explore in</div>
      </div>
      <div className='slide3-data'>
        <div className='Software card'>
        <h3>Software</h3>
        {Slide3data1.map((item,index) =>{
            return(
                <li key={index} className={item.cName}>
                  <div className='content-wrapper'>
                  <div><img src={item.icon}/></div>
                  <div>{item.title}</div>
                  </div>
                </li>
            )         
        })}
        </div>
        <div className='Hardware card'>
        <h3>Hardware</h3>
        {Slide3data2.map((item,index) =>{
            return(
                <li key={index} className={item.cName}>
                  <div className='content-wrapper'>
                  <div><img src={item.icon}/></div>
                  <div>{item.title}</div>
                  </div>
                </li>
            )         
        })}
        </div>
        <div className='Design card'>
        <h3>Design</h3>
        {Slide3data3.map((item,index) =>{
            return(
                <li key={index} className={item.cName}>
                  <div className='content-wrapper'>
                  <div><img src={item.icon}/></div>
                  <div>{item.title}</div>
                  </div>
                </li>
            )         
        })}
        </div>
      
      </div>
      
    </div>
  )
}

export default Slide3