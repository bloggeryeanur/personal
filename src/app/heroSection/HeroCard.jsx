import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroCard({ img, title, desc1, desc2 }) {
  return (
    <Box style={{ position: "relative", textAlign: "center" }}>
      <Image
        src={img}
        alt="Your Image Alt Text"
        style={{ width: "100%", height: "100vh", opacity: 0.7 }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          paddingTop: "1rem",
        }}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4">{title}</Typography>
          <Typography>{desc1}</Typography>
          <Typography>{desc2}</Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
