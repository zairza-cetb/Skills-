import React from 'react'
import rocket from "../../Assets/images/rocket.png"
import "./ComingSoon.scss";

const ComingSoon = () => {
  return (
    <div className="comming-soon">
        <div className="comming-soon-left">
            <p>Website is Under Maintenance</p>
            <h1>We're <span>Coming</span> Soon</h1>
            {/* <button>Learn More</button> */}
        </div>
        <div className="comming-soon-right">
            <img src={rocket} alt="" />
        </div>
    </div>
  )
}

export default ComingSoon