import React, { Component } from 'react'

export default class OrderDetail extends Component {

    state = props.detail;

    render() {
        return (
            <div>
                Detail de {this.state.id}
            </div>
        )
    }
}
