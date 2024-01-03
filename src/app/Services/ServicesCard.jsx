import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";

export default function MultiActionAreaCard({title,description, img}) {
  return (
    <box sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image src={img} alt="'Card image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions>
        <Button variant='outlined' size="small" color="secondary">
          Read More...
        </Button>
      </CardActions>
    </box>
  );
}
