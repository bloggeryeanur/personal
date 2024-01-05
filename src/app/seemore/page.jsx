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
import ListItemText from "@mui/material/ListItemText";
import { Button, Container, Typography } from "@mui/material";

import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

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
      <Box sx={{ textAlign: "end" }}>
        <Link href={"/"}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<KeyboardBackspaceIcon />}
            sx={{ mt: 1 }}>
            Home
          </Button>
        </Link>
      </Box>

      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <List>
          {messages.map(({ primary, secondary }, index) => (
            <ListItem button key={index}>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          ))}
        </List>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={4}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}>
            <BottomNavigationAction
              label="Basic"
              icon={<RestoreIcon color="secondary" />}
            />
            <BottomNavigationAction
              label="Premium"
              icon={<FavoriteIcon color="secondary" />}
            />
            <BottomNavigationAction
              label="customized"
              icon={<ArchiveIcon color="secondary" />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

const messageExamples = [
  {
    primary: "FullStack Project $5000",
    secondary:
      "Production grade projet • Web app • Cloud • R&D • Security • Hosting • DevOps. a)Delivery time Two Month b)Unlimited Revisions (c)10 pages (d)Design customization (e)Content upload (f)Responsive design (g)Source code (h)Detailed code comments",
  },
  {
    primary: "Frontend Project $2000",
    secondary:
      "Production grade projet • Web app • Cloud • R&D • Security • Hosting • DevOps. a)Delivery time Two Month b)Unlimited Revisions (c)10 pages (d)Design customization (e)Content upload ",
  },
  {
    primary: "Backend Project $3000",
    secondary:
      "Production grade projet • Web app • Cloud • R&D • Security • Hosting • DevOps. a)Delivery time One Month b)Unlimited Revisions (c)10 pages (e)Content upload (g)Source code (h)Detailed code comments",
  },
  {
    primary: "Reactjs And Nextjs",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "NodeJs",
    secondary:
      "sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "FullStack",
    secondary:
      "Lorem ipsume beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Backend web development",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
  {
    primary: "Frontend web development",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil ex labore beatae soluta adipisci facilis dolorum necessitatibus sint delectus magni minima quo, vero eveniet sapiente nisi, reprehenderit voluptatibus mollitia!",
  },
];
