"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Button, Container } from "@mui/material";
import Image from "next/image";
import Client from "../image/client/testi-1.jpg";
import Link from "next/link";

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(10)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function Review() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Container maxWidth="sm">
      <Link href={"/"}>
        <Button variant="contained" color="secondary" sx={{ mt: 1 }}>
          Home
        </Button>
      </Link>

      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <List>
          {messages.map(({ primary, secondary }, index) => (
            <ListItem button key={index}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={""} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          ))}
        </List>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}>
            <BottomNavigationAction label="Running" icon={<RestoreIcon color='secondary'/>} />
            <BottomNavigationAction label="Best" icon={<FavoriteIcon color='secondary'/>} />
            <BottomNavigationAction label="Delivery" icon={<ArchiveIcon color='secondary'/>} />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

const messageExamples = [
  {
    primary: "Mr. Yeanur",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatnima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Mr. Rahman",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Mr. Khan",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quoitia!",
  },
  {
    primary: "Mr. Mullah",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Mr. Yeanur",
    secondary: "sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Mr. Rahman",
    secondary:
      "Lorem ipsume beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Mr. Khan",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Mr. Yeanur",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
];
