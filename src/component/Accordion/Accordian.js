import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import "./Accordian.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RandomText from "./RandomText";
import WeekText from "./WeekText";

const Accordian = () => {
  return (
    <div className="Accordian-container">
      <div className="main-div">
        <h1>Dashboard</h1>
        {/* Rules And Regulations */}
        <Accordion className="accordian">
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
        {/* Week-1 */}
        <Accordion className="Week_accordian">
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              <h1>
                Week 1 -<span>(07/09/2022 - 14/09/2022)</span>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <WeekText />
          </AccordionDetails>
        </Accordion>
        {/* Week-2 */}
        <Accordion className="Week_accordian">
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              <h1>
                Week 2 -<span>(07/09/2022 - 14/09/2022)</span>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <WeekText />
          </AccordionDetails>
        </Accordion>
        {/* Week-3 */}
        <Accordion className="Week_accordian">
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              <h1>
                Week 3 -<span>(07/09/2022 - 14/09/2022)</span>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <WeekText />
          </AccordionDetails>
        </Accordion>
        {/* Week-4 */}
        <Accordion className="Week_accordian">
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              <h1>
                Week 4 -<span>(07/09/2022 - 14/09/2022)</span>
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <WeekText />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
