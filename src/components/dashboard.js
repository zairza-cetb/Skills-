import React,{useState} from "react";
import "./dashboard.css";
import {FiChevronDown } from "react-icons/fi";
import{FiChevronUp} from "react-icons/fi";


// download react-icons
//  npm install react-icons --save

// const weekDetails = {
//     week1:{
//         weekno:1,
//         resourceLink:"https/::www.auhoufhoucheouf.acaoi.com",
//         taskLink:"https/::www.auhoufhoucheouf.acaoi.com",

//     },
//     week2:{
//         weekno:2,
//         resourceLink:"abcdde.com",
//         taskLink:"abcded.com",
//     },
    
    // week3:{
    //     resourceLink:"abcdde.com",
    //     taskLink:"cded.com",
    // },
    // week4:{
    //     resourceLink:"bcdde.com",
    //     taskLink:"abcded.com",
    // }
// }
// Object.values(weekDetails).map(weekDetail=>console.log(weekDetail))
// Object.keys(weekDetails).map(weekDetail=>console.log(weekDetail))
// Object.entries(weekDetails).map(weekDetail=>console.log(weekDetail))

const  Dashboard=()=>{
const[show,setShow]=useState(false);
const[show2,setShow2]=useState(false);
const[show3,setShow3]=useState(false);
const[show4,setShow4]=useState(false);
const[show5,setShow5]=useState(false);
const[link,setLink]=useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(link)
}

// }

    return(
        
    //    {/* <p>Hello</p> */}
    //         {/* {Object.values(weekDetails).map( 
    //             (weekDetail)=>{return <div><p>resourceLink: <p>{weekDetail.resourceLink}</p></p>
    //             <p>taskLink: {weekDetail.resourceLink}</p></div> }
    //              )}  */}
        <div className="container">
            <div className="title">Dashboard</div>
            <div className="accordion">
                <div className="parts" id="parts-begin">
                    <div onClick={()=>setShow(!show)}  className="flex">
                        <div><p className="heading" id="rule-and-reg">Rules and Regulations of Skills++ 2022</p></div>
                        <div className="icon">{show ? <FiChevronUp/>:<FiChevronDown/>}</div>
                    </div>
                 {show && (<div className="content" > 
                 <p>1. Participants must go through the pdf and resources carefully, which will be provided and should follow them in order to start and complete this Upskilling Program with ease. <br /><br />
                    2. Participants should be careful of the timescale and deadlines of each task. i.e., they should always be prepared with their task before the deadline and submit them in the link provided on the website. <br /> <br />
                    3. There is a grading system for the submission of task: - <br />
                <p className="subsub-cont">
                    i) If submitted before the deadline, grading will be done from 100. <br />
                    ii)If submitted one day after, grading will be done from 70. <br />
                    iii) If submitted 2 days after, grading will be done from 40
                After that, the link will be closed for that particular task.</p><br />
                4. If a participant fails to submit his work on time or his submission gets disqualifiedby the mentors, then he must focus on following week’s tasks. We will provide Certificates and perks after calculating the whole 4 weeks’ result. You will be getting enough time to improve, so, try to be consistent throughout the program. <br /><br />
                5. And the most important thing, participants will get only one chance to submit their task in the link provided on the website. So, make sure you submit the correct task.</p>
                 </div> )}
                </div> 

                <div className="parts">
                <div onClick={()=>setShow2(!show2)}  className="flex">
                    <div><p className="heading">Week 1- <span id="span">(07/09/2022 - 14/09/2022)</span></p></div>
                    <div className="icon">{show2 ? <FiChevronUp/>:<FiChevronDown/>}</div>
                </div>
                {show2 && (<div className="content">
                    <ul className="week-1-container">
                        <div className="resources">
                            <li>Resources:</li> 
                            <p id="link">GDrive link- <a href="https/::www.auhoufhoucheouf.acaoi.com">https/::www.auhoufhoucheouf.acaoi.com</a></p>
                        </div>
                        <div className="task">
                            <li>Task for this week:</li>
                            <p id="link">GDrive link- <a href="https/::www.auhoufhoucheouf.acaoi.com">https/::www.auhoufhoucheouf.acaoi.com</a></p>
                        </div>
                        <div className="submission">
                            <li>Submission:</li>
                            <p>Upload your Project to a Google Drive and Paste the link here.</p>
                            <div className="flex-content">
                                <div className="inputs-link"><input type="link" placeholder="Google Drive link here" value={link} onChange={(e)=>setLink(e.target.value)} /></div>
                                <div><button onClick={handleSubmit}>Submit</button></div>
                            </div> 
                        </div>
                        < div className="mentor-remarks">
                            <li>Mentor's Remarks:</li>
                            <p>After your mentor has reviewed your Project, his/her remarks will show up here. </p>
                            <div className="inputs"><p>No Remarks Yet*</p></div>
                        </div>
                        <div className="marks">
                            <li>Marks Obtained:</li>
                            <p><span className="marks">0</span>/10</p>
                        </div>
                        
                    </ul>
                    
                 </div>)}
                </div>  

                <div className="parts">
                    <div onClick={()=>setShow3(!show3)}  className="flex">
                        <div><p className="heading">Week 2-<span id="span">(07/09/2022 - 14/09/2022)</span></p></div>
                        <div className="icon">{show3 ? <FiChevronUp/>:<FiChevronDown/>}</div>
                    </div>
                {show3 && (<div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div>)}
                </div>  

                <div className="parts">
                    <div onClick={()=>setShow4(!show4)} className="flex">
                        <div><p className="heading">Week 3-<span id="span">(07/09/2022 - 14/09/2022)</span></p></div>
                        {/* lock icon */}
                        <div className="icon">{show4 ? <FiChevronUp/>:<FiChevronDown/>}</div>
                        
                    </div>
                {show4 && (<div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div>)}
                </div>    

                <div className="parts" id="parts-end">
                    <div onClick={()=>setShow5(!show5)}   className="flex">
                        <div> <p className="heading">Week 4-<span id="span">(07/09/2022 - 14/09/2022)</span></p></div>
                        {/* lock icon */}
                      <div className="icon">{show5 ? <FiChevronUp/>:<FiChevronDown/>}</div>
                    </div>
                {show5 && (<div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem voluptatem praesentium aliquid delectus fugiat doloremque eligendi 
                    modi ut laboriosam.</p></div>)}
                </div>  

                    
            </div>


        </div>
   
    );
}

export default Dashboard;




