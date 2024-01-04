import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({ title, description, img, btn }) {
  return (
    <Card>
      <CardActionArea>
        <Image
          style={{ width: "100%", height: "100%" }}
          src={img}
          alt="'card image"
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
        <Link href={"/review"}>
          <Button variant="outlined" size="small" color="secondary">
            See Review...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
