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
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };
  return (
      <Box sx={{ py: 1, mt: 6 }}>
        <CssBaseline />
        <Swiper
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}>
          <SwiperSlide>
            <HeroCard
              img={One}
              title="Web Development"
              desc="I'm Programming for Web Development"
            />
          </SwiperSlide>

          {/* Slider Two */}
          <SwiperSlide>
            <HeroCard
              img={Two}
              title="IOS Development"
              desc="I'm Programming for IOS Development"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HeroCard
              img={Three}
              title="Linux Development"
              desc="I'm Programming for Android Development"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
  );
};

export default HeroSection;
