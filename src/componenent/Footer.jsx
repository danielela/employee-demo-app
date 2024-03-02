import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          
        </Nav>
        <div className="bg-primary" >@Copyright GuruAI Tech</div>
      </Container>
    </Navbar>
  );
};

export default Footer;