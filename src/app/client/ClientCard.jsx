import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

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
              width:'6rem',
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

          <Stack spacing={1}>
            <Rating name="size-small" readOnly defaultValue={5} size="small" />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ClientCard;
