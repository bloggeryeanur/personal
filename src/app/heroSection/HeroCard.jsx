import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const HeroCard = ({img,title,desc}) => {
    return (
        <Box style={{ position: "relative", textAlign: "center" }}>
        <Image
          src={img}
          alt="Your Image Alt Text"
          style={{ width: "100%", maxHeight: "100vh" }}
        />
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            paddingTop:'1rem'
          }}>
          <Typography variant="h4">{title}</Typography>
          <Typography sx={{pb: 1}}>
            {desc}
          </Typography>
          <Button variant="contained" color="secondary">
            Download CV
          </Button>
        </Box>
      </Box>
    );
};

export default HeroCard;