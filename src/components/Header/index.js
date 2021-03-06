import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Dino Abrego</Navbar.Brand>
          <Nav >
            <Nav.Link href="https://dinoabrego.github.io/my-portfolio/">About Me</Nav.Link>
            <Nav.Link href="https://dinoabrego.github.io/my-portfolio/#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="https://dinoabrego.github.io/my-portfolio/#contact">Contact</Nav.Link>
            <Nav.Link href="https://dinoabrego.github.io/my-portfolio/#resume">Resume</Nav.Link>
          </Nav>
        </Container>
       </Navbar>
    </div>
  );
};
        
export default Header;
        