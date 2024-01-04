import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}>
      <Box>
        <Typography variant="h2">Page Not Found </Typography>
        <Typography variant="h1">404</Typography>
        <Link href={"/"}>
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
