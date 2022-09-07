import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
  } from "@mui/material";
  import React from "react";
  import "./Faq.scss";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import logo from "../Assests/2.png";
//   m
  import RandomText from "./RandomText";
  
  
  const Accordian = () => {
    return (
      <div className="container">
        <div className="txt">
          <h1 className="heading">FAQs</h1>
          <Accordion className="aacordion"
          disableGutters elevation={0}>
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <h4>Why Zairza?</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RandomText />
            </AccordionDetails>
          </Accordion>
          <Accordion className="aacordion"
          disableGutters elevation={0}>
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <h4>How can I join?</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RandomText />
            </AccordionDetails>
          </Accordion>
          <Accordion className="aacordion"
          disableGutters elevation={0}>
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <h4>What is the Scope of Zairza?</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RandomText />
            </AccordionDetails>
          </Accordion>
          <Accordion className="aacordion"
          disableGutters elevation={0}>
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <h4>I have a Tech project. How can Zairza help me?</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RandomText />
            </AccordionDetails>
          </Accordion>
          <Accordion className="aacordion"
          disableGutters elevation={0}>
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <h4>What are the club timings?</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RandomText />
            </AccordionDetails>
          </Accordion>
          
         
        </div>
        <div className="img">
            <img src={logo} alt="" className="img-f" />
        </div>
      </div>
    );
  };
  
  export default Accordian;