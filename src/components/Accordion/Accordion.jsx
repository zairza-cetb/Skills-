import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Accordion.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Lock from "@mui/icons-material/Lock";
import RandomText from "./RandomText";
import WeekText from "../WeekText/WeekText";
import { useSelector } from "react-redux";
import { selectDomainDetails } from "../../store/skillsUser/skillsUser.selector";
import { getCurrentWeek } from "../../utils/agenda/agenda";

const Accordian = () => {
  const [current, setCurrent] = useState(-1);
  const domainDetails = useSelector(selectDomainDetails);
  const currentWeek = getCurrentWeek();
  const weeks = [
    {
      weekNo: 0,
      duration: "05/11/2022 - 08/11/2022",
    },
    {
      weekNo: 1,
      duration: "09/11/2022 - 15/11/2022",
    },
    {
      weekNo: 2,
      duration: "16/11/2022 - 22/11/2022",
    },
    {
      weekNo: 3,
      duration: "23/11/2022 - 29/11/2022",
    },
  ];

  const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1);
  };
  return (
    <div className="Accordian-container">
      <div className="main-div mb-8">
        <h1 className="dashboard-heading">Dashboard</h1>
        {/* Rules And Regulations */}
        <Accordion
          className="accordian"
          disableGutters
          elevation={0}
          expanded={current === 0}
          onChange={changeState(0)}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              <h1 className="text-sm md:text-3xl py-4 text-gray-600 ">Rules And Regulations of Skills++ 2022</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RandomText />
          </AccordionDetails>
        </Accordion>
        {/* Week-0 */}
        {weeks.map((week, index) => {
          return (
            <Accordion
              className="accordian"
              disableGutters
              elevation={0}
              expanded={current === index + 1}
              onChange={changeState(index + 1)}
              disabled={currentWeek < week.weekNo}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={
                  currentWeek >= week.weekNo ? (
                    <ExpandMoreIcon />
                  ) : (
                    <Lock
                      style={{
                        color: "white",
                        backgroundColor: "rgb(169, 169, 169)",
                        borderRadius: "50%",
                        padding: "3px",
                      }}
                    />
                  )
                }
              >
                <Typography>
                  <h1 className="flex flex-row  text-xs "><span className="font-extrabold text-lg md:text-xl text-gray-600">Week-{week.weekNo}</span> <span className="text-md md:text-lg ml-4">{week.duration}</span></h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <WeekText weekNo={week.weekNo}/>
              </AccordionDetails>
            </Accordion>
          );
        })}
        
      </div>
    </div>
  );
};

export default Accordian;
