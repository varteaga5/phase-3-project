import React, { Component } from "react";
// imports all from react bootstrap
import * as ReactBootStrap from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      // main element that is returned
      <ReactBootStrap.Navbar bg="light" expand="md">
        {/* navbar will expand and collapse based on the size of the browser */}
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/FoodList">
              View the list of Favorite foods
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}

export default NavBar;
