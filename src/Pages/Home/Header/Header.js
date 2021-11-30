import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
          <Container>
              <Navbar.Brand href="#home" className= "fs-1 fw-bold text-secondary">Arjun Roy</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link>
                  <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#contact">Contact Me</Nav.Link>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  );
}

export default Header;
