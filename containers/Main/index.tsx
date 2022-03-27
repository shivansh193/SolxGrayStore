import React from "react";
import Nav from "../../components/Nav";
import Courosel from "../../components/Courosel";
import Footer from "../../components/Footer";
import { Container, Heading, Box } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Nav />
      <Container maxW="container.lg">
        <Box py={10}>
          <Courosel />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
