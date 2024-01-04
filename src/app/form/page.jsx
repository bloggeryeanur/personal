"use client";
import { Box, Button, Container } from "@mui/material";
import Title from "../Component/Title";
import ContactForm from "../contact/ContactForm";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Form = () => {
  return (
    <Container maxWidth="md">
      <Title title="Welcome to Contact Form" text='send me your valid email with Subject i will replay within 24 hour' text2='Thanks !' />
      <ContactForm />
      <Box sx={{ textAlign: "center" }}>
        <Link href={"/"}>
          <Button variant="contained" startIcon={<ArrowBackIcon />}>
            Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Form;
