"use client";
import { Box, CssBaseline, Switch, ThemeProvider, createTheme } from "@mui/material";
import Navigation from "./Component/Navigation";
import Footer from "./Component/Footer";
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import HeroSection from "./heroSection/page";

// Theme

export default function Home() {
  return (
      <Box sx={{fontFamily: 'Roboto,'}}>
        <ScrollToTop
          smooth
          component={
            <p background="yellow">
              <ArrowCircleUpIcon color="secondary" />{" "}
            </p>
          }
        />
         <Navigation />
        
      </Box>
  );
}
