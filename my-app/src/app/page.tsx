"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Container, Navbar, Nav, Image, Row, Col, NavDropdown} from 'react-bootstrap';
import { QuestionCircle, Globe, PersonCircle} from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar expand="lg">
    <Container fluid className="d-flex justify-content-between align-items-center fixed-top">
      <Navbar.Brand>
        <Image 
          src="https://mir-s3-cdn-cf.behance.net/projects/404/d0f50b137047265.Y3JvcCw5MjAsNzE5LDAsNDA.png"
          alt="Tesla Logo"
          width="200px"
        />
      </Navbar.Brand>
        <Nav className="justify-content-center align-items-center d-flex">
          <NavDropdown title={<span className="text-white">Vehicles</span>} id="basic-nav-dropdown" className="dropdwonMenu">
            <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-center align-items-center d-flex">
          <NavDropdown title={<span className="text-white">Energy</span>} id="basic-nav-dropdown" className="dropdwonMenu">
            <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-center align-items-center d-flex">
          <NavDropdown title={<span className="text-white">Charging</span>} id="basic-nav-dropdown" className="dropdwonMenu">
            <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-center align-items-center d-flex">
          <NavDropdown title={<span className="text-white">Discover</span>} id="basic-nav-dropdown" className="dropdwonMenu">
            <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-center align-items-center d-flex">
          <NavDropdown title={<span className="text-white">Shop</span>} id="basic-nav-dropdown" className="dropdwonMenu">
            <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      <Nav className="d-flex align-items-center flex-row">
        <Nav.Link className="navlinks mx-2"><QuestionCircle/></Nav.Link>
        <Nav.Link className="navlinks mx-2"><Globe/></Nav.Link>
        <Nav.Link className="navlinks mx-2"><PersonCircle/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const MidText = () => (
  <Row className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
    <Col className="mid-text text-center">
      <h1>Model Y</h1>
      <h2>Starting at $349/mo</h2>
      <h3>From $31,490<sup>1</sup></h3>
    </Col>
  </Row>
);
export default function Home() {
  return (
    <main>
      <Container fluid>
        <TopMenu/>
        <MidText />
      </Container>
    </main>
  );
}