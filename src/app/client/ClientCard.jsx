import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";

const ClientCard = ({ img, title, des, alt }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box
          sx={{
            background: "gray",
            display: "flex",
            justifyContent: "center",
          }}>
          <Image
            style={{
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
            }}
            src={img}
            alt={alt}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ClientCard;
