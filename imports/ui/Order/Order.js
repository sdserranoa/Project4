import React, { Component } from 'react'

export default class Order extends Component {

    state = this.props.order;

    render() {
        return (
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.userName}</td>
                <td>{this.state.address}</td>
                <td>{this.state.total}</td>
                <td>{this.state.delivered.toString()}</td>
            </tr>
        )
    }
}
