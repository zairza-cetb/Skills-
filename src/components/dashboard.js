import React from "react";
import "./dashboard.css";
import {FiChevronDown } from "react-icons/fi";

// download react-icons
//  npm install react-icons --save


const  Dashboard=()=>{

    // const[clicked,setClicked]=useState(null)

    // const toggle=(i)=>{
    //     if (clicked===i){
    //         return setClicked(null)
    //     }
    //     setClicked(i)
    // }
    return(
       
            <div className="container">
            <div className="title">Dashboard</div>
            <div className="accordion">
                <div className="parts">
                    <div className="flex">
                        <div><button className="heading"  >Rules and Regulations of Skills++ 2022</button></div>
                        <div className="icon"><FiChevronDown/></div>
                    </div>
                 <div className="content" > <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div> 
                </div> 

                <div className="parts">
                <div className="flex">
                    <div><button className="heading">Week 1</button></div>
                    <div className="icon"><FiChevronDown/></div>
                </div>
                 <div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div>
                </div>  

                <div className="parts">
                    <div className="flex">
                        <div><button className="heading">Week 2</button></div>
                        <div className="icon"><FiChevronDown/></div>
                    </div>
                 <div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div>
                </div>  

                <div className="parts">
                    <div className="flex">
                        <div>  <button className="heading">Week 3</button></div>
                        {/* lock icon */}
                        <div className="icon"><FiChevronDown/></div>
                        
                    </div>
                 <div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div>
                </div>    

                <div className="parts">
                    <div className="flex">
                        <div> <button className="heading">Week 4</button></div>
                        {/* lock icon */}
                      <div className="icon"><FiChevronDown/></div>
                    </div>
                 <div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div>
                </div>  

                    
            </div>


        </div>
   
    );
}

export default Dashboard;