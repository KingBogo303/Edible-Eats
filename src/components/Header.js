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
                <NavDropdown.Item className="px-3 fs-4" href="#categories">
                  Find By Category
                </NavDropdown.Item>
                <NavDropdown.Item href="#areas" className="px-3 fs-4">
                  Find By Area
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
