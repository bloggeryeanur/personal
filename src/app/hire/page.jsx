import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box, Button, Container, Typography } from "@mui/material";

const HireMe = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "4rem",
      }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">
          I'm Available For Freelanch Work With You !
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ my: 2 }}>
          HIRE ME
        </Button>
      </Box>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Who am i ?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Full Stack Web Developer .
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              eligendi repudiandae enim consectetur dignissimos nam reiciendis
              deleniti, expedita vitae architecto sint, natus pariatur dolorum
              totam eius excepturi minima autem cum!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How Can i Help You ?{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              I am always ready for my services
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              eligendi repudiandae enim consectetur dignissimos nam reiciendis
              deleniti, expedita vitae architecto sint, natus pariatur dolorum
              totam eius excepturi minima autem cum!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              I Do Every Project
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Top to Bottom I explain before work ...
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              eligendi repudiandae enim consectetur dignissimos nam reiciendis
              deleniti, expedita vitae architecto sint, natus pariatur dolorum
              totam eius excepturi minima autem cum!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Personal data
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              I was a ............
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default HireMe;
