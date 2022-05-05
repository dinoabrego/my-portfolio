import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="https://github.com/dinoabrego">GitHub</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/dinorah-abrego-366499229/">LinkedIn</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://stackoverflow.com/users/18650695/dinorah-abrego">Stack Overflow</Nav.Link>
              </Nav.Item>
          </Container>
       </Navbar>
    </div>
  );
}

export default Footer;
