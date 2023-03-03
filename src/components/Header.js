import React from "react";
import logo from "../assets/images/logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img src={logo} alt="edible eats logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-3">
              <Nav.Link className="px-3" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="px-3" href="#categories">
                Categories
              </Nav.Link>
              <NavDropdown
                className="px-3"
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
