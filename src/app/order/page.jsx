"use client";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import Title from "../Component/Title";
import Link from "next/link";

const Order = () => {
  return (
    <Container maxWidth="sm">
      <Title title="Thanks for Order" text="I will reply 24 hour" />

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
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" color="secondary">
            Send Message
          </Button>
          <Link href={"/"}>
            <Button variant="outlined" sx={{ m: 1 }}>
              Back Home
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Order;
