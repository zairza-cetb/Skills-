import React, { useEffect } from "react";
import "./WeekText.scss";
import { useState } from "react";
import {
  selectDomainDetails,
  selectSubmissionDetails,
} from "../../store/skillsUser/skillsUser.selector";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeek } from "../../utils/agenda/agenda";
import { submitAssignmentStart } from "../../store/skillsUser/skillsUser.action";

const WeekText = ({ weekNo }) => {
  const dispatch = useDispatch();
  const domainDetails = useSelector(selectDomainDetails);
  const submissionDetailsFromSelector = useSelector(selectSubmissionDetails);
  const [taskSubmit, setTaskSubmit] = useState("");
  const [submissionDetails, setSubmissionDetails] = useState(null);
  useEffect(() => {
    if (
      submissionDetailsFromSelector &&
      submissionDetailsFromSelector.length > 0
    ) {
      setSubmissionDetails(
        submissionDetailsFromSelector.filter(
          (submission) => submission.weekNo === weekNo
        )[0]
      );
    }
  }, [submissionDetailsFromSelector]);

  useEffect(() => {
    if (submissionDetails) {
      setTaskSubmit(submissionDetails.submissionLink);
    }
  }, [submissionDetails]);

  const weekTaskSubmit = (e) => {
    e.preventDefault();
    if (!taskSubmit) {
      toast.error("No submission link found", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    dispatch(submitAssignmentStart({ weekNo, submissionLink: taskSubmit }));
  };

  return (
    <div className="WeekText">
      <ul>
        <li>
          <h3 className="WeekText-heading">Resources : </h3>
          {domainDetails?.tasks[weekNo]?.resourceLink ? (
            <p>
              GDrive link-
              <a
                className="text-blue-500 break-all"
                href={`${domainDetails.tasks[weekNo]?.resourceLink}`}
                target="_blank"
              >
                {domainDetails.tasks[weekNo]?.resourceLink}
              </a>{" "}
            </p>
          ) : (
            <span>Resource link will be uploaded soon</span>
          )}
        </li>

        {weekNo > 0 && (
          <>
            <br />
            <li>
              <h3 className="WeekText-heading">Task For the Week : </h3>
              {domainDetails?.tasks[weekNo]?.taskLink ? (
                <p>
                  GDrive link-
                  <a
                    className="text-blue-500 break-all"
                    href={`${domainDetails.tasks[weekNo]?.taskLink}`}
                    target="_blank"
                  >
                    {domainDetails.tasks[weekNo]?.taskLink}
                  </a>{" "}
                </p>
              ) : (
                <span>Task link will be uploaded soon</span>
              )}
            </li>
            <br />
            <li>
              <h3 className="WeekText-heading">Submission : </h3>
              <p>
                Upload your Project to a Google Drive and Paste the link here
              </p>
              <div className="flex flex-col md:flex-row md:items-center justify-left md:w-2/3">
                <input
                  className="h-full focus:outline-none border border-gray-500 p-2 w-full"
                  placeholder="Google drive link here"
                  disabled={
                    domainDetails?.tasks[weekNo]?.taskLink == null ||
                    submissionDetails?.approved != null
                  }
                  value={taskSubmit}
                  onChange={(e) => setTaskSubmit(e.target.value)}
                />
                <button
                  disabled={
                    domainDetails?.tasks[weekNo]?.taskLink == null ||
                    submissionDetails?.approved != null
                  }
                  className="mt-2 md:mt-0 md:ml-8 bg-blue-600 px-4 py-2 text-white hover:bg-blue-400"
                  onClick={weekTaskSubmit}
                >
                  Submit
                </button>
              </div>
            </li>
            <br />
            <li>
              <h3 className="WeekText-heading">Mentors Remark : </h3>
              <div className="WeekText-heading_Mentors">
                <p className="WeekText-remarks">
                  {submissionDetails?.comment ?? "No Remarks yet"}
                </p>
              </div>
            </li>
            <br />
            <li>
              <h3 className="WeekText-heading">Marks Obtained:</h3>
              <div className="WeekText-heading_Marks">
                <p className="WeekText-marks">
                  {submissionDetails?.approved
                    ? `${submissionDetails?.mark}/100`
                    : submissionDetails?.approved == null
                    ? "Not approved yet"
                    : "Rejected"}
                </p>
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default WeekText;
