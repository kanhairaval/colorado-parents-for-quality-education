import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import "../style/NavBar.css"; // Import your custom CSS file

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light" variant="light">
  <ReactBootStrap.Navbar.Brand href="#home">CPQE</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
      {/* Your existing links */}
    </ReactBootStrap.Nav>
    {/* Move these links to the right */}
    <ReactBootStrap.Nav>
      <Link to="/features">
        <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/pricing">
        <ReactBootStrap.Nav.Link href="#pricing">Get Involved</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/deets">
        <ReactBootStrap.Nav.Link href="#deets">Donate</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/dankmemes">
        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
            About Us
        </ReactBootStrap.Nav.Link>
      </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;