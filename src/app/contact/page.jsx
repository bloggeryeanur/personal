import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Container, Grid, Typography } from "@mui/material";
import Title from "../Component/Title";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ContactForm from "./ContactForm";

// Grid Material UI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  return (
    <Container maxWidth="lg">
      {/* Import title component form Title file */}
      <Title
        title="Contact Me"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque sequi vel laborum perspiciatis,"
        text2="provident, consequuntur nulla ad laboriosam iste! Nisi incidunt, "
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/*-------------Contact Number Section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <AddIcCallIcon color="secondary" />
              <Typography variant="h5">Call Us On</Typography>
              <Typography>(+060) 444 333 444</Typography>
            </Item>
          </Grid>
          {/*-------------Contact Number Section End-------------*/}

          {/*-------------Contact Mail Section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <AttachEmailIcon color="secondary" />
              <Typography variant="h5">Email : </Typography>
              <Typography>your@mail.com</Typography>
            </Item>
          </Grid>
          {/*-------------Contact Mail Section End-------------*/}

          {/*-------------Contact Address Section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <AddLocationAltIcon color="secondary" />
              <Typography variant="h5">My Office</Typography>
              <Typography>60 Shacham street, Los Angeles, USA.</Typography>
            </Item>
          </Grid>
          {/*-------------Contact Address Section End-------------*/}
        </Grid>
      </Box>

      {/* Import Form minified component from ContactForm file */}
      <ContactForm />
    </Container>
  );
}
