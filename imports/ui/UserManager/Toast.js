import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';

class ToastU extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{this.props.title}</strong>
                    <small>EasyDiets</small>
                </Toast.Header>
                <Toast.Body>{this.props.description}.</Toast.Body>
            </Toast>
        );
    }
}

export default ToastU;