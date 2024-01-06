import { Box, Grid, Typography } from "@mui/material";
import Script from "next/script";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const thisYear = new Date().getFullYear();
const Footer = () => {
  return (
    <Box>
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={12}>
          <Item sx={{ py: 7 }}>
            <Typography>
              Copyright
              {thisYear}{" "}
              <Link href={"/"}>
                <span style={{ color: "orange" }}>Yeanur</span>{" "}
              </Link>{" "}
              &copy;All Rights Reserved.
            </Typography>
            <Typography>
              Designed by{" "}
              <Link href={"/"}>
                <span style={{ color: "orange" }}>Rahman</span>{" "}
              </Link>
            </Typography>
            <Box
              sx={{
                mt: 3,
              }}>
              <Link href={"https://www.facebook.com/"}>
                <FacebookIcon color="secondary" />
              </Link>
              <Link href={"https://www.facebook.com/"}>
                <LinkedInIcon color="secondary" />
              </Link>
              <Link href={"https://www.instagram.com/"}>
                <InstagramIcon color="secondary" />
              </Link>
              <Link href={"https://www.instagram.com/"}>
                <GitHubIcon color="secondary" />
              </Link>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
