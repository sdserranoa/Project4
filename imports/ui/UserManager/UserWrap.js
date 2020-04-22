import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ParticlesBg from 'particles-bg'

class UserWrap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showLoginBox() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    render() {
        return (
            <div  className="root-container" id = "rootUsers">
                <h1 className="titleLogin">Welcome to EasyDiets</h1>
                <div className="box-controller">
                    <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")}
                        onClick={this.showLoginBox.bind(this)}>Login</div>
                    <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}
                        onClick={this.showRegisterBox.bind(this)}>Register</div>
                </div>
                <div className="box-container">
                    {this.state.isLoginOpen && <SignIn login={this.props.login}/>}
                    {this.state.isRegisterOpen && <SignUp singup={this.props.singup}/>}
                </div>
                <ParticlesBg color="#28a745" type="cobweb" bg={true} />
            </div>
        )
    }
}

export default UserWrap;