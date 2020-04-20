import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "", pwdState: "", errors: [] };
    }

    //Add New Error Object to the array {elm: msg}
    showValidationErr(elm, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
    }

    //Remove a specific element from the array 
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

    //Update Username, password, and email on change event 
    onUsernameChange(e) {
        this.setState({ username: e.target.value });
        //We want to clear the error when ever the user type something new 
        this.clearValidationErr("username");
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
        this.clearValidationErr("email");
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
        this.clearValidationErr("password");

        this.setState({ pwdState: "weak" });
        if (e.target.value.length > 8) {
            this.setState({ pwdState: "medium" });
        } else if (e.target.value.length > 12) {
            this.setState({ pwdState: "strong" });
        }
    }

    submitRegister(e) {
        if (this.state.username == "") {
            this.showValidationErr("username", "Username can't be empty!");
        }
        if (this.state.email == "") {
            this.showValidationErr("email", "Email can't be empty!");
        }
        if (this.state.password == "") {
            this.showValidationErr("password", "Password can't be empty!");
        }
    }

    render() {
        //pasword Strength
        let pwdWeak = false, pwdMedium = false, pwdStrong = false;
        //Weak password set onlt the pwdWeak to true, cause render only the first bar 
        if (this.state.pwdState == "weak") {
            pwdWeak = true;
        } else if (this.state.pwdState == "medium") {
            //Medium pwd then render the weak and medium bars 
            pwdWeak = true;
            pwdMedium = true;
        } else if (this.state.pwdState == "strong") {
            //Strong, render all the previoud bars 
            pwdWeak = true;
            pwdMedium = true;
            pwdStrong = true;
        }


        //NULL by default (help us check when rendering)
        let usernameErr = null, passwordErr = null, emailErr = null;
        //Loop and find which ones has the error
        for (let err of this.state.errors) {
            //Assign the validation error message 
            if (err.elm == "username") {
                usernameErr = err.msg;
            }
            if (err.elm == "password") {
                passwordErr = err.msg;
            }
            if (err.elm == "email") {
                emailErr = err.msg;
            }
            //No (else if or else) statements cause we need to check for all possible elements
        }
        return (
            <div className="inner-container">
                <div className="header">Register</div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"
                            onChange={this.onUsernameChange.bind(this)} />
                        <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="login-input" placeholder="Email"
                            onChange={this.onEmailChange.bind(this)} />
                        <small className="danger-error">{emailErr ? emailErr : ""}</small>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"
                            onChange={this.onPasswordChange.bind(this)} />
                        <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
                        {this.state.password && <div className="password-state">
                            <div className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}></div>
                            <div className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}></div>
                            <div className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}></div>
                        </div>}
                    </div>
                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}

export default SignUp;