"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Navbar, Nav, Image, Row, Col, NavDropdown} from 'react-bootstrap';
import { QuestionCircle, Globe, PersonCircle} from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar expand="lg" className="topMenu d-flex align-items-center p-0">
    <Nav>
      <Navbar.Brand className="justify-content-start mx-5">
        <Nav.Link>
          <Image 
            src="https://mir-s3-cdn-cf.behance.net/projects/404/d0f50b137047265.Y3JvcCw5MjAsNzE5LDAsNDA.png"
            alt="Tesla Logo"
            width="125px"
          />
        </Nav.Link>
      </Navbar.Brand>
    </Nav>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-5">
      <span className="text-white">Menu</span>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar mx-auto">
          <Nav className="align-items-center flex-column">
            <NavDropdown title={<span className="text-white">Vehicles</span>} id="basic-nav-dropdown" className="dropdwonMenu">
              <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center d-flex">
            <NavDropdown title={<span className="text-white">Energy</span>} id="basic-nav-dropdown" className="dropdwonMenu">
              <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center d-flex">
            <NavDropdown title={<span className="text-white">Charging</span>} id="basic-nav-dropdown" className="dropdwonMenu">
              <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center d-flex">
            <NavDropdown title={<span className="text-white">Discover</span>} id="basic-nav-dropdown" className="dropdwonMenu">
              <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center d-flex">
            <NavDropdown title={<span className="text-white">Shop</span>} id="basic-nav-dropdown" className="dropdwonMenu">
              <NavDropdown.Item href="#action/3.1">Model S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Model 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model X</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Model Y</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cybertruck</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help Me Choose</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Nav>
        <Nav className="d-flex align-items-center flex-row justify-content-end">
          <Nav.Link className="navlinks mx-2"><QuestionCircle/></Nav.Link>
          <Nav.Link className="navlinks mx-2"><Globe/></Nav.Link>
          <Nav.Link className="navlinks mx-2"><PersonCircle/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
);

const MidText = () => (
  <Row className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
    <Col className="mid-text text-center mb-auto mx-auto">
      <h1>Model Y</h1>
      <h2><Nav.Link><u>Starting at $349/mo</u></Nav.Link></h2>
      <h3>From $31,490<sup>1</sup></h3>
    </Col>
  </Row>
);

const ButtonText = () => (
  <Row className="d-flex justify-content-center align-items-center">
    <Col className="text-center">
      <button className="btn btn-lg btn-primary">Order Now</button>
      <button className="btn btn-lg btn-light mx-3">Drive Model Y</button>
    </Col>
  </Row>
);
export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
        <TopMenu/>
        <MidText />
        <Nav className="mx-auto mt-auto mb-5">
          <ButtonText />
        </Nav>
    </main>
  );
}