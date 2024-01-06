"use client";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Container,
  Grid,
  Paper,
  Switch,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Profile from "../image/client/testi-1.jpg";
import { Link } from "react-scroll";
import { useState } from "react";
import Image from "next/image";
import HeroSection from "../heroSection/page";
import About from "../about/About";
import PortFolio from "../portfolio/PortFolio";
import HireMe from "../hire/page";
import Services from "../Services/page";
import Client from "../client/page";
import Contact from "../contact/page";
import Footer from "./Footer";
import Skill from "../skill/page";

// Navigation / Nav Menu item Start //
const drawerWidth = 240;
const navItems = [
  {
    id: "about",
    name: "About",
  },

  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "client",
    name: "Client",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

// Navigation / Nav Menu item End //

// Drawer Nav menu / navbar main function //
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image
          style={{ width: "4rem", borderRadius: "50%" }}
          src={Profile}
          alt="profile photo"
        />
      </Typography>
      <Divider />
      <List>
        <Link to={"home"} spy={true} smooth={true} offset={50} duration={500}>
          <Button>Home</Button>
        </Link>
        {navItems.map(({ id, name }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                key={id}>
                <ListItemText primary={name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // them function
  const [dMode, setDMode] = useState(false);

  const dark = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const light = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={dMode === false ? light : dark}>
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{
            mx: "0 auto",
            background: (theme) =>
              theme.palette.mode === "dark" ? "#00060d" : "#ffffff",
          }}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="box"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link
                to={"home"}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                <Button>Home</Button>
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map(({ id, name }) => (
                <Link
                  to={id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  key={id}>
                  <Button>{name}</Button>
                </Link>
              ))}
            </Box>
            {/* Dark and light button */}
            <Switch onClick={() => setDMode(!dMode)} />
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
        </nav>
        {/* Site All Component import start */}
      </Box>
      <Box id="home">
        <HeroSection />
      </Box>
      <Box id="about">
        <About />
      </Box>

      <Box id="portfolio">
        <PortFolio />
      </Box>
      <HireMe />
      <Box id="services">
        <Services />
      </Box>
      <Box id="client">
        <Client />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />

      {/* Site All Component import End */}
    </ThemeProvider>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
