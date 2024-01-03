"use client";
import { Box, CssBaseline, Switch, ThemeProvider, createTheme } from "@mui/material";
import Navigation from "./Component/Navigation";
import Services from "./Services/page";
import About from "./about/About";
import Client from "./client/page";
import Contact from "./contact/page";
import HireMe from "./hire/page";
import PortFolio from "./portfolio/PortFolio";
import Portfolio from "./portfolio/PortFolio";
import Skill from "./skill/page";
import Footer from "./Component/Footer";
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import HeroSection from "./heroSection/page";

// Theme

export default function Home() {
  return (
      <Box>
        <ScrollToTop
          smooth
          component={
            <p background="yellow">
              <ArrowCircleUpIcon color="secondary" />{" "}
            </p>
          }
        />
         <Navigation />
         
        {/* <HeroSection />
        <About />
        <PortFolio />
        <HireMe />
        <Services />
        <Client />
        <Skill />
        <Contact />
        <Footer /> */}
      </Box>
  );
}
