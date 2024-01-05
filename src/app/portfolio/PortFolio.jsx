import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// Grid Function
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// cmsing image

import One from "../image/wrok/1.jpg";
import Two from "../image/wrok/2.jpg";
import Three from "../image/wrok/3.jpg";
import Four from "../image/wrok/4.jpg";
import Five from "../image/wrok/5.jpg";
// Wroking icon
import {
  backServices,
  backServicesOutlined,
  PhonelinkLockOutlined,
  WifiProtectedSetupRounded,
  cmsHistory,
} from "@mui/icons-material";
import PortFolioCard from "./PortFolioCard";
import Title from "../Component/Title";
import ProjectDetails from "./ProjectDetails";
// Demo text

const demText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum at pariatur asperiores! Numquam iure animi voluptatibus voluptates nihil fuga consequatur unde cupiditate et quam, ipsum quisquam odio ipsam placeat.";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PortFolio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allFront = [One, Two, Three, Four, Five];
  const backs = [Two, Three, Four, Five];
  const fullstacks = [Three, Four, Five];
  const cms = [One, Two, Three, Five];

  return (
    <Container maxWidth="lg">
      <Title
        title="Project"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        text2="Quo ab delectus eligendi, enim soluta deserunt consectetur velit minus odit"
      />
      <Box>
        <Box>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab label="Front" {...a11yProps(0)} />

            <Tab label="Back" {...a11yProps(1)} />

            <Tab label="FullStack" {...a11yProps(2)} />

            <Tab label="CMS" {...a11yProps(3)} />
          </Tabs>
        </Box>
        {/* All Front end section Start */}
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              {allFront.map((af) => (
                <Grid key={af} xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Item>
                    <ProjectDetails
                      img={af}
                      alt="This is frontend project image"
                      title="Frontend Development"
                      proDes={demText}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>
        {/* backs Section */}
        <CustomTabPanel value={value} index={1}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              {backs.map((back) => (
                <Grid
                  key={back}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  xl={3}>
                  <Item>
                  <ProjectDetails
                      alt="This is Backend project image"
                      img={back}
                      title="Backend Development"
                      proDes={demText}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>
        {/* Web back */}
        <CustomTabPanel value={value} index={2}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              {fullstacks.map((full) => (
                <Grid
                  key={full}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  xl={3}>
                  <Item>
                  <ProjectDetails
                      alt="This is FullStack project image"
                      img={full}
                      title="Backend Development"
                      proDes={demText}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>{" "}
        {/* cms section */}
        <CustomTabPanel value={value} index={3}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              {cms.map((cm) => (
                <Grid
                  key={cm}
                  sx={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  xl={3}>
                  <Item>
                  <ProjectDetails
                      alt="This is CMS project image"
                      img={cm}
                      title="CMS Development"
                      proDes={demText}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CustomTabPanel>{" "}
      </Box>
    </Container>
  );
}
