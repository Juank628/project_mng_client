import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export class Menu extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">CDP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/punchlist">Punchlist</Nav.Link>
            <Nav.Link href="#">Reportes</Nav.Link>
            <Nav.Link href="#">Forzados</Nav.Link>
            <Nav.Link href="#">Horas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
