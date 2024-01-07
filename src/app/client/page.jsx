import { Box, Container, Typography } from "@mui/material";
import Title from "../Component/Title";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import One from "../image/client/testi-1.jpg";
import ClientCard from "./ClientCard";

// SwiperJs import (Swiper JS is a free, open-source JavaScript library that creates touch sliders for mobile websites, web apps, and native/hybrid apps. )
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function Client() {
  return (
    <Container maxWidth="lg">
      {/* Import title component form Title file */}
      <Title
        title="Our Regular Client"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque sequi vel laborum perspiciatis,"
        text2="provident, consequuntur nulla ad laboriosam iste! Nisi incidunt, "
      />

      <>
        <Swiper
          style={{ padding: "1rem 0" }}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          {/*-------------First client section start-------------*/}
          <SwiperSlide>
            {/* Import Services minified component from ServicesCard file */}
            <ClientCard
              img={One}
              title="Mr. Yeanur"
              des="Frontend "
              alt="First client image"
            />
          </SwiperSlide>
          {/*-------------First client section End-------------*/}
          {/*-------------Second client section start-------------*/}
          <SwiperSlide>
            {/* Import Services minified component from ServicesCard file */}
            <ClientCard
              img={One}
              title="Md. Yeanur"
              des="Backend"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          {/*-------------Second client section End-------------*/}
          {/*-------------Third client section start-------------*/}
          <SwiperSlide>
            {/* Import Services minified component from ServicesCard file */}
            <ClientCard
              img={One}
              title="Mr. Yeanur"
              des="FullStack"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          {/*-------------Third client section End-------------*/}
          {/*-------------Fourth client section start-------------*/}
          <SwiperSlide>
            {/* Import Services minified component from ServicesCard file */}
            <ClientCard
              img={One}
              title="Mr. Yeanur"
              des="FullStack"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          {/*-------------Fourth client section End-------------*/}
        </Swiper>
      </>
    </Container>
  );
}
