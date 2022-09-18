import React from "react";
import './WeekText.scss';
import { useState } from "react";

const WeekText = () => {
  const [taskSubmit,setTaskSubmit]=useState("");
  const weekTaskSubmit=()=>{
    console.log(taskSubmit);
  }
  return (
    <div className="WeekText">
      <ul>
        <h3 className="WeekText-heading">Resources : </h3>
        <p>GDrive link-<a href="https://www.google.com/">"https://www.google.com/"</a></p>
      </ul>
      <br />
      <ul>
        <h3 className="WeekText-heading">Task For the Week : </h3>
        <p>GDrive link-<a href="https://www.google.com/">"https://www.google.com/"</a></p>
      </ul>
      <br />
      <ul>
        <h3 className="WeekText-heading">Submission : </h3>
        <p>Upload your Project to a Google Drive and Paste the link here</p>
        <div>
          <input placeholder="Google drive link here" onChange={(e)=>setTaskSubmit(e.target.value)}/>
          <button onClick={weekTaskSubmit}>Submit</button>
        </div>
      </ul>
      <br />
      <ul>
        <h3 className="WeekText-heading">Mentors Remark : </h3>
        <div className="WeekText-heading_Mentors">
          {/* <input placeholder="No Remarks Yet" /> */}
          <p className="WeekText-remarks">No Remarks yet</p>
        </div>
      </ul>
      <br />
      <ul>
        <h3 className="WeekText-heading">Marks Obtained:</h3>
        <div className="WeekText-heading_Marks">
          <p className="WeekText-marks">0/10</p>
        </div>
      </ul>
    </div>
  );
};

export default WeekText;
