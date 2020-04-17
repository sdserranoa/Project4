import React, { Component } from 'react'

export default class Order extends Component {

    state = this.props.order;

    render() {
        return (
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.menu}</td>
                <td>{this.state.state}</td>
                <td>{this.state.addres}</td>
            </tr>
        )
    }
}
