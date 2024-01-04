"use client";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from "@mui/icons-material/Send";

// Firebase
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.config";

const ContactForm = () => {
  const notify = () => toast("Thanks I Will Reply 24 hour!");
  const auth = getAuth(app);

  const sendMail = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      notify();
      form.reset();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert(`Send Your Valid mail to contact: ${errorMessage}`);
    }
  };

  return (
      <Box
        component="form"
        sx={{
          marginTop: "3rem",
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete=""
        onSubmit={sendMail}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} sx={{ marginLeft: "-7px" }}>
            <TextField
              fullWidth
              name="email"
              type="email"
              id="email"
              label="Email"
              placeholder="example@mail.com"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginLeft: "-7px" }}>
            <TextField
              fullWidth
              name="password"
              id="password"
              label="Password"
              type="password"
              placeholder="***********"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Other text fields */}
        <TextField
          fullWidth
          id="subject"
          label="Subject"
          placeholder="Web Development"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="message"
          label="Message"
          placeholder="Your message"
          variant="outlined"
          multiline
          rows={4}
        />
        <Box sx={{ textAlign: "center" }}>
          <Button
            onSubmit={() => setEmail && setPassword === ""}
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            color="secondary">
            Send
          </Button>
          <ToastContainer />
        </Box>
      </Box>
  );
};

export default ContactForm;
