import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
/*
import ToastU from './UserManager/Toast.js'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
*/


export default class Navigation extends Component {

    constructor(props){
        super(props);
        this.state={}
        //this.state={logoutON:this.props.isAuthenticated}
    }
    logoutReload(e){
        console.log('entra a logoutReload');
        this.props.logout(); 
        //this.t1();
        //<ToastU title={"You logged out succesfully!"} description={"Congrats! This is the first step into a healthy lifestyle!"} />

    }
    /*

    t1 = () => {
        toast("Success!",
            {
                className: "custom-toast",
                draggable: true,
                position: toast.POSITION.TOP_RIGHT
            })
    }
*/
    
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
                            {!Meteor.userId() &&
                                <Nav.Link ><Link to="/SignUp" id="SignUpLink" variant="dark">Sign up</Link>
                                    </Nav.Link>
                            }

                            {Meteor.userId() &&
                                <Nav.Link ><Link to="/" onClick={this.logoutReload.bind(this)} id="SignUpLink" variant="dark" >Log out </Link>
                                    </Nav.Link>
                            }
                            {Meteor.userId() &&
                                <Nav.Link ><Link to="/" id="currentUsername" >{/*Meteor.user().username[0].toUpperCase()+Meteor.user().username.slice(1).toLowerCase()*/}</Link>
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    };
}

