import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../globals.css";
import { Pagination, Autoplay } from "swiper/modules";
//
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import One from "../image/background/1.jpg";
import Two from "../image/background/2.jpg";
import Three from "../image/background/3.jpg";
import HeroCard from "./HeroCard";
// Theme function

const HeroSection = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <Box>
      <CssBaseline />
      <Swiper
        pagination={pagination}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <HeroCard
            img={One}
            title="Web"
            desc1="FullStack | 4 Year Experience"
            desc2="JavaScript"
          />
        </SwiperSlide>

        {/* Slider Two */}
        <SwiperSlide>
          <HeroCard
            img={Two}
            title="App"
            desc1="IOS & Android | 3 Year Experience"
            desc2="Native and Cross"
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroCard
            img={Three}
            title="UI UX"
            desc1="All Platform | 4 Years Experience"
            desc2="Figma | Adobe"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSection;
