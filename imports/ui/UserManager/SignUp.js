import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
//import { withTracker } from 'meteor/react-meteor-data';
import zxcvbn from 'zxcvbn';
//import '../../api/users.js';
import { Accounts } from 'meteor/accounts-base';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "", errors: [], pwdscore: 0, pwdsuggestions: [] };
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

        const evaluation = zxcvbn(this.state.password);
        this.setState({
            pwdscore: evaluation.score,
            pwdsuggestions: evaluation.feedback.suggestions
        });
    }

    submitRegister(e) {
        e.preventDefault();
        if (this.state.username == "") {
            this.showValidationErr("username", "Username can't be empty!");
        }
        if (this.state.email == "") {
            this.showValidationErr("email", "Email can't be empty!");
        }
        if (this.state.password == "") {
            this.showValidationErr("password", "Password can't be empty!");
        }

        this.props.singup(this.state.email, this.state.username, this.state.password);
    }

    render() {
        //pasword Strength
        const { pwdscore, pwdsuggestions } = this.state;
        

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
                if(err.msg == "That's an incorrect email!") {
                    emailErr = err.msg;
                }
            }
            
            //No (else if or else) statements cause we need to check for all possible element
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
                        {pwdsuggestions.length !== 0 && <small>A few advices to make your password more secure:</small>}
                        {this.state.password && <div>
                            {this.advices}
                            <ul>
                                {pwdsuggestions.map((s, index) =>
                                    <li key={index}>{s}</li>)}
                            </ul>
                        </div>}
                        {this.state.password && <Container className="password-state">
                            <Row>
                                <Col xs md lg="12" style={{padding: 0+'px'}}><small>Password Strength:</small></Col>
                                <Col className={"pwd pwd-weak " + (pwdscore >= 0 ? "show" : "")}></Col>
                                <Col className={"pwd pwd-medium " + (pwdscore >= 2 ? "show" : "")}></Col>
                                <Col className={"pwd pwd-strong " + (pwdscore >= 4 ? "show" : "")}></Col>
                            </Row>
                        </Container>}
                    </div>
                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}

export default SignUp;