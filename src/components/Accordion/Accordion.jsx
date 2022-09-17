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
  import WeekText from "./WeekText";
  
  const Accordian = () => {
    const [current, setCurrent] = useState(-1);
  
    const changeState = (panel) => (e, newValue) => {
      setCurrent(newValue ? panel : -1);
    };
    return (
      <div className="Accordian-container">
        <div className="main-div">
          <h1>Dashboard</h1>
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
                <h1>Rules And Regulations of Skills++ 2022</h1>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RandomText />
            </AccordionDetails>
          </Accordion>
          {/* Week-0 */}
          <Accordion
            className="Week_accordian"
            disableGutters
            elevation={0}
            expanded={current === 1}
            onChange={changeState(1)}
          >
            <AccordionSummary
              id="panel2-header"
              aria-controls="panel2-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <h1>
                  Week 0 -<span>(07/09/2022 - 14/09/2022)</span>
                </h1>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <WeekText />
            </AccordionDetails>
          </Accordion>
          {/* Week-1 */}


          <Accordion
            className="Week_accordian"
            disableGutters
            elevation={0}
            expanded={current === 2}
            onChange={changeState(2)}
          >
            <AccordionSummary
              id="panel4-header"
              aria-controls="panel4-content"
              expandIcon={
                <Lock
                  style={{
                    color: "white",
                    backgroundColor: "rgb(169, 169, 169)",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                />
              }
              // disabled
            >
              <Typography>
                <h1>
                  Week 1 -<span>(07/09/2022 - 14/09/2022)</span>
                </h1>
              </Typography>
            </AccordionSummary>
            {/* <AccordionDetails>
              <WeekText />
            </AccordionDetails> */}
          </Accordion>
          {/* Week-2 */}
          <Accordion
            className="Week_accordian"
            disableGutters
            elevation={0}
            expanded={current === 3}
            onChange={changeState(3)}
          >
            <AccordionSummary
              id="panel4-header"
              aria-controls="panel4-content"
              expandIcon={
                <Lock
                  style={{
                    color: "white",
                    backgroundColor: "rgb(169, 169, 169)",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                />
              }
              // disabled
            >
              <Typography>
                <h1>
                  Week 2 -<span>(07/09/2022 - 14/09/2022)</span>
                </h1>
              </Typography>
            </AccordionSummary>
            {/* <AccordionDetails>
              <WeekText />
            </AccordionDetails> */}
          </Accordion>
          {/* Week-3 */}
          <Accordion
            className="Week_accordian"
            disableGutters
            elevation={0}
            expanded={current === 4}
            onChange={changeState(4)}
          >
            <AccordionSummary
              id="panel5-header"
              aria-controls="panel5-content"
              expandIcon={
                <Lock
                  style={{
                    color: "white",
                    backgroundColor: "rgb(169, 169, 169)",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                />
              }
              // disabled
            >
              <Typography>
                <h1>
                  Week 3 -<span>(07/09/2022 - 14/09/2022)</span>
                </h1>
              </Typography>
            </AccordionSummary>
            {/* <AccordionDetails>
              <WeekText />
            </AccordionDetails> */}
          </Accordion>
        </div>
      </div>
    );
  };
  
  export default Accordian;
  