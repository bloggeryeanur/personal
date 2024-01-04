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

// Gird function
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
      <Title
        title="Contact Me"
        text="It is a long established fact that a reader will be of a page when "
        text2="established fact looking at its layout."
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <AddIcCallIcon color="secondary" />
              <Typography variant="h5">Call Us On</Typography>
              <Typography>+8801620-34 93 63</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <AttachEmailIcon color="secondary" />
              <Typography variant="h5">Email : </Typography>
              <Typography>bloggeryeanur@gmail.com</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <AddLocationAltIcon color="secondary" />
              <Typography variant="h5">My Office</Typography>
              <Typography>Dhanmondhi 6, House 22, Bangladesh</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="form"
        sx={{
          marginTop: "3rem",
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off">
        {/* Grid layout for Name and Email */}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} sx={{ marginLeft: "-7px" }}>
            <TextField fullWidth id="name" label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginLeft: "-7px" }}>
            <TextField fullWidth id="email" label="Email" variant="outlined" />
          </Grid>
        </Grid>

        {/* Other text fields */}
        <TextField fullWidth id="subject" label="Subject" variant="outlined" />
        <TextField
          fullWidth
          id="Message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />
        <Box sx={{ textAlign: "end" }}>
          <Button variant="contained" color="secondary">
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
