"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import { Container, Switch, ThemeProvider, createTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Profile from "../image/client/testi-1.jpg";
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

const drawerWidth = 240;
const navItems = [
  "About",
  "Portfolio",
  "Services",
  "Client",
  "sskil",
  "Contact",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // them function
  const [dMode, setDMode] = React.useState(false);
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
        <CssBaseline />
        <AppBar sx={{ background: "white", color: "Gray", mx: "0 auto" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              Home
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "gray" }}>
                  {item}
                </Button>
              ))}
            </Box>
            {/* Toggle button here */}
            <Switch onClick={()=>setDMode(!dMode)} color="secondary" />
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
        <Box sx={{ mt: 1 }}>
         
        </Box>
      </Box>
       <HeroSection />
        <About />
        <PortFolio />
        <HireMe />
        <Services />
        <Client />
        <Skill />
        <Contact />
        <Footer />
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
