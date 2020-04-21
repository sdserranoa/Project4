import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">EasyDiets</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"><Link to="/" className="link">Home</Link></Nav.Link>
                            <Nav.Link href="/diets"><Link to="/diets">Diets</Link></Nav.Link>
                            <Nav.Link><Link to="/Orders">Orders</Link></Nav.Link>
                            <Nav.Link><Link to="/meals">Meals</Link></Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Link><Link to="/SignUp" id="SignUpLink" variant="dark">Sign up</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    };
}

export default Navigation;