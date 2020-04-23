import React, { Component } from 'react';
/*import { Accounts } from 'meteor/accounts-base';*/
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
/*
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
*/


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", errors: [] };
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            //Add all elements from the prev array to the new one that has a different element
            for (let err of prevState.errors) {
                if (elm != err.elm) {
                    newArr.push(err);
                }
            }
            return { errors: newArr };
        });
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
        this.clearValidationErr("username");
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
        this.clearValidationErr("password");
    }


    submitLogin(e) {
        e.preventDefault();
        if (this.state.username == "") {
            this.showValidationErr("username", "Username can't be empty!");
        }
        if (this.state.password == "") {
            this.showValidationErr("password", "Password can't be empty!");
        }

        this.props.login(this.state.username, this.state.password);
        //this.t1();
    }

    render() {

        let usernameErr = null, passwordErr = null;
        //Loop and find which ones has the error
        for (let err of this.state.errors) {
            //Assign the validation error message 
            if (err.elm == "username") {
                usernameErr = err.msg;
            }
            if (err.elm == "password") {
                passwordErr = err.msg;
            }
        }
        return (
            <div>
                <div className="inner-container">
                    <div className="header">Login</div>
                    <div className="box">

                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" className="login-input" placeholder="Username"
                                onChange={this.onUsernameChange.bind(this)} />
                            <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="login-input" placeholder="Password"
                                onChange={this.onPasswordChange.bind(this)} />
                            <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
                        </div>

                        <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}><Link to="/">Login</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;