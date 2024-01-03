import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ServicesCard from "./ServicesCard";
import Image from "next/image";
import Title from "../Component/Title";
import Animal from "../image/services/animal.jpg";
import One from "../image/services/1.jpeg";

// Function for Grid
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "",
  color: theme.palette.text.secondary,
}));

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Title
        title="Full Stack Web Services"
        text="Frontend web Development with React and NextJS"
        text2="Backend Web application Development with Nodejs and Strapi"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="Photography"
                description="This is our best client services. And the photo is the on off the best photo in Dand Platefrom"
                img={One}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="Photography"
                description="This is our best client services. And the photo is the on off the best photo in Dand Platefrom"
                img={Animal}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="Photography"
                description="This is our best client services. And the photo is the on off the best photo in Dand Platefrom"
                img={One}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="Photography"
                description="This is our best client services. And the photo is the on off the best photo in Dand Platefrom"
                img={Animal}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="Photography"
                description="This is our best client services. And the photo is the on off the best photo in Dand Platefrom"
                img={One}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="Photography"
                description="This is our best client services. And the photo is the on off the best photo in Dand Platefrom"
                img={Animal}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
