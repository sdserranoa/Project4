import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { showAlertLogout: false }
    }
    logoutReload(e) {
        console.log('entra a logoutReload');
        this.setState({ showAlertLogout: true }, function () {
            this.props.logout();
            console.log(this.state.showAlertLogout);
        });
    }

    handleCloseAlert() {
        this.setState({
            showAlertLogout: false
        }).bind(this);
    }

    renderOrders(){
        if(Meteor.user().profile.rol == "admin"){
            return(
                <Link to="/Orders" className="nav-link">Orders</Link>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" className="fixed-top">
                    <Navbar.Brand to="/">EasyDiets</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/diets" className="nav-link">Diets</Link>
                            <Link to="/Orders" className="nav-link">Orders</Link>
                            <Link to="/meals" className="nav-link">Meals</Link>
                            {/*<Link to="/cart" className="nav-link">Cart</Link>*/}
                            {Meteor.userId() && Meteor.user().profile.rol == "admin" &&
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            }
                            {Meteor.userId() &&
                                <Link to="/chat" className="nav-link">Chat</Link>
                            }
                        </Nav>
                        <Nav>
                            {!Meteor.userId() &&
                                <Link to="/SignUp" id="SignUpLink" variant="dark">Sign up
                                </Link>
                            }

                            {Meteor.userId() &&
                                <Link to="/" onClick={this.logoutReload.bind(this)} id="SignUpLink" variant="dark">Log out
                                </Link>
                            }

                                <Link to="/profile" id="currentUsername">{Meteor.user().username[0].toUpperCase() + Meteor.user().username.slice(1).toLowerCase()}
                                </Link>*/
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    };
}