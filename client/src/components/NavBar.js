import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "../style/NavBar.css"; // Import your custom CSS file

const NavBar = () => {
    return (
        <div className="App">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light" variant="light">
                <ReactBootStrap.Navbar.Brand href="#home">CPQE</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <Link to="/features">
                            <ReactBootStrap.Nav.Link href="#features" style={{ fontWeight: 'bold' }}>Home</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/pricing">
                            <ReactBootStrap.Nav.Link href="#pricing" style={{ fontWeight: 'bold' }}>Get Involved</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/deets">
                            <ReactBootStrap.Nav.Link href="#deets" style={{ fontWeight: 'bold' }}>Donate</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/dankmemes">
                            <ReactBootStrap.Nav.Link eventKey={2} href="#memes" style={{ fontWeight: 'bold' }}>
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