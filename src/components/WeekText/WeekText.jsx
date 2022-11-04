import React from "react";
import "./WeekText.scss";
import { useState } from "react";
import { selectDomainDetails } from "../../store/skillsUser/skillsUser.selector";
import { useSelector } from "react-redux";

const WeekText = ({ week }) => {
  const [taskSubmit, setTaskSubmit] = useState("");
  const domainDetails = useSelector(selectDomainDetails);
  const weekTaskSubmit = () => {};
  return (
    <div className="WeekText">
      <ul>
        <h3 className="WeekText-heading">Resources : </h3>
        {domainDetails?.tasks[week]?.resourceLink ? (
          <p>
            GDrive link-
            <a
              className="text-blue-500"
              href={`${domainDetails.tasks[week]?.resourceLink}`}
              target="_blank"
            >
              {domainDetails.tasks[week]?.resourceLink}
            </a>{" "}
          </p>
        ) : (
          <span>No resource for this week</span>
        )}
      </ul>

      <br />
      {/* <ul>
        <h3 className="WeekText-heading">Task For the Week : </h3>
        <p>GDrive link-<a href={`${domainDetails.tasks[week].taskLink}`}>{domainDetails.tasks[week].taskLink}</a></p>
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
      {/* <p className="WeekText-remarks">No Remarks yet</p>
        </div>
      </ul>
      <br />
      <ul>
        <h3 className="WeekText-heading">Marks Obtained:</h3>
        <div className="WeekText-heading_Marks">
          <p className="WeekText-marks">0/10</p>
        </div> */}
      {/* </ul> */}
    </div>
  );
};

export default WeekText;
