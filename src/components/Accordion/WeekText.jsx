import React from "react";
import './WeekText.scss'

const WeekText = () => {
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
          <input placeholder="Google drive link here" />
          <button>Submit</button>
        </div>
      </ul>
      <br />
      <ul>
        <h3 className="WeekText-heading">Mentors Remark : </h3>
        <div className="WeekText-heading_Mentors">
          <input placeholder="No Remarks Yet" />
        </div>
      </ul>
      <br />
      <ul>
        <h3 className="WeekText-heading">Marks Obtained:</h3>
        <div className="WeekText-heading_Marks">
          <input placeholder="0/10" />
        </div>
      </ul>
    </div>
  );
};

export default WeekText;
