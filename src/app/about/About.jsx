import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Yeanur from "../image/about/hi.jpg";
import { Button, Container, Typography, Switch } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

// Grid Material UI  
const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, marginTop: "5rem" }}>
        <Grid container spacing={2}>
          {/* About section (name, description and button)  start*/}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Item>
              <Box sx={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
                <Typography sx={{ fontWeight: 700 }} variant="h4">
                  Hey I'm Yeanur Rahman{" "}
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur reiciendis veniam, voluptates totam ea omnis,
                  excepturi culpa deleniti inventore itaque molestias nostrum.
                  Pariatur asperiores, aut velit voluptatibus error obcaecati
                  debitis.
                </Typography>
                <Typography sx={{ margin: "1rem 0" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur reiciendis veniam, voluptates totam ea omnis,
                  excepturi culpa deleniti inventore itaque molestias nostrum.
                  Pariatur asperiores, aut velit voluptatibus error obcaecati
                  debitis.
                </Typography>
                <Typography>Now i'm working won my project</Typography>
                <Link href={"/form"}>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<EastIcon />}
                    sx={{ mt: 2 }}>
                    Contact Me
                  </Button>
                </Link>
              </Box>
            </Item>
          </Grid>
           {/* About section (name, description and button)  End*/}

           {/* About Profile pic Section Start */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "1rem",
                }}>
                <Image
                  style={{ }}
                  src={Yeanur}
                  alt="Yeanur image"
                />
              </Box>
            </Item>
          </Grid>
          {/* About Profile pic Section End */}
        </Grid>
      </Box>
    </Container>
  );
};
export default About;
