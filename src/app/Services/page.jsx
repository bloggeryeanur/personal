import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Title from "../Component/Title";
import Animal from "../image/services/animal.jpg";
import One from "../image/services/1.jpeg";
import ServicesCard from "./ServicesCard";

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
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque sequi vel laborum perspiciatis,"
        text2="provident, consequuntur nulla ad laboriosam iste! Nisi incidunt, "
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              
              <ServicesCard
                title="Frontend"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={One}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="Backend"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={Animal}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="FullStack"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={One}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="UI/UX"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={Animal}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="E-comers"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={One}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <ServicesCard
                title="News"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
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
