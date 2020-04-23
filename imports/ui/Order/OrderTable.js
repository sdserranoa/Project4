import React, { Component } from 'react'
import { Table } from 'react-bootstrap/';

export default class OrderTable extends Component {

  state = {
    orders: this.props.orders,
  }

  renderRow = t => {
    if (t.delivered) {
      return (
        <tr bgcolor="red">
          <td>{t.id}</td>
          <td>{t.userName}</td>
          <td>{t.address}</td>
          <td>{t.total}</td>
          <td>{t.delivered.toString()}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>{t.id}</td>
          <td>{t.userName}</td>
          <td>{t.address}</td>
          <td>{t.total}</td>
          <td>{t.delivered.toString()}</td>
        </tr>
      )
    }
  }

  render() {
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Address</th>
              <th>Total</th>
              <th>Delivered</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map(t => this.renderRow(t))}
          </tbody>
        </Table>
      </div>
    )
  }
}
