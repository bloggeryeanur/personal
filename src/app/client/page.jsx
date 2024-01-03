import { Box, Container, Typography } from "@mui/material";
import Title from "../Component/Title";
import Image from "next/image";
import Rahman from "../image/client/testi-1.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

//
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import ClientCard from "./ClientCard";
import One from "../image/client/testi-1.jpg";
import Two from "../image/client/testi-2.jpg";
import Three from "../image/client/testi-3.jpg";

const Client = () => {
  return (
    <Container maxWidth="lg">
      <Title
        title="Regular Client"
        text="Our Lot of client Work with me there is national and internationaly"
        text2="I Services Web Development FullStack"
      />

      <>
        <Swiper
          style={{ padding: "1rem 0" }}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <ClientCard
              img={One}
              title="Mr. Yeanur"
              des="Our First client for frontend web services"
              alt="First client image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard
              img={Two}
              title="Md. Yeanur"
              des="Our First client for frontend web services"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <ClientCard
              img={Three}
              title="Mr. Yeanur"
              des="Our First client for frontend web services"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <ClientCard
              img={One}
              title="Mr. Yeanur"
              des="Our First client for frontend web services"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <ClientCard
              img={Two}
              title="Md. Yeanur"
              des="Our First client for frontend web services"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <ClientCard
              img={One}
              title="Mr. Yeanur"
              des="Our First client for frontend web services"
              alt="First client image"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <ClientCard
              img={One}
              title="Mr. Yeanur"
              des="Our First client for frontend web services"
              alt="First client image"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </Container>
  );
};

export default Client;
