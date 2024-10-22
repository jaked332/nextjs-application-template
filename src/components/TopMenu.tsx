'use client';

import { Container, Navbar, Nav, Image } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar expand="lg" id="topMenu">
    <Container>
      <Navbar.Brand href="#">
        <Image
          src="http://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/murphyslogowhite.png"
          alt="Logo"
          width="150"
          height="auto"
        />
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#" className="nav-link">
          Home
        </Nav.Link>
        <Nav.Link href="#" className="nav-link">
          About Us
        </Nav.Link>
        <Nav.Link href="#" className="nav-link">
          St. Patrick&apos;s Day
        </Nav.Link>
        <Nav.Link href="#" className="nav-link">
          To Go Ordering
        </Nav.Link>
        <Nav.Link
          href="https://www.instagram.com/murphyshawaii"
          target="#navbarNav"
          className="nav-link"
        >
          <i className="bi bi-instagram" />
        </Nav.Link>
        <Nav.Link
          href="https://www.facebook.com/Murphys-Bar-and-Grill-153976382311"
          target="#navbarNav"
          className="nav-link"
        >
          <i className="bi bi-facebook" />
        </Nav.Link>
        <Nav.Link
          href="https://twitter.com/murphysdowntown?lang=en"
          target="#navbarNav"
          className="nav-link"
        >
          <i className="bi bi-twitter" />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
