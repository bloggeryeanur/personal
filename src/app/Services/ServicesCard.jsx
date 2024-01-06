import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({ title, description, img, btn }) {
  return (
    <Box>
      <Link href={"/seemore"}>
        <CardActionArea>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={img}
            alt="'card image"
          />
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardActionArea>
        <CardActions>
          <Button variant="outlined" size="small" color="secondary">
            See More...
          </Button>
        </CardActions>
      </Link>
    </Box>
  );
}
