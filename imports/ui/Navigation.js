import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import ChatApp from './chat/ChatApp';
import Card from 'react-bootstrap/Card'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


/*
import ToastU from './UserManager/Toast.js'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
*/

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { showAlertLogout: false }
        //this.state={logoutON:this.props.isAuthenticated}
    }
    logoutReload(e) {
        console.log('entra a logoutReload');
        this.setState({ showAlertLogout: true }, function () {
            this.props.logout();
            console.log(this.state.showAlertLogout);
        });


        //this.t1();
        //<ToastU title={"You logged out succesfully!"} description={"Congrats! This is the first step into a healthy lifestyle!"} />
    }

    handleCloseAlert() {
        this.setState({
            showAlertLogout: false
        }).bind(this);
    }


    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">EasyDiets</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/" className="link">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/diets">Diets</Link></Nav.Link>
                            <Nav.Link><Link to="/Orders">Orders</Link></Nav.Link>
                            <Nav.Link><Link to="/meals">Meals</Link></Nav.Link>
                            {Meteor.userId() &&
                                <Nav.Link><Link to="/chat">Chat</Link></Nav.Link>
                            }
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

                            <Snackbar
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={this.state.showAlert}
                                autoHideDuration={6000}
                                onClose={this.handleCloseAlert.bind(this)}>
                                <Alert onClose={this.handleCloseAlert.bind(this)} severity="success">
                                    ¡alerta!
                                </Alert>
                            </Snackbar>

                            {Meteor.userId() &&
                                <Nav.Link ><Link to="/profile" id="currentUsername" >{Meteor.user().username[0].toUpperCase() + Meteor.user().username.slice(1).toLowerCase()}</Link>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    };
}

