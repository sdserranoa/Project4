import React, { Component } from 'react'
import { Table } from 'react-bootstrap/';

export default class OrderTable extends Component {

  state = {
    orders: this.props.orders,
  }

  renderRow = (t,i) => {
    if (t.delivered) {
      return (
        <tr key={i} bgcolor="#8DEF70" onClick={() => this.props.onDetail(t.id)}>
          <td>{t.id}</td>
          <td>{t.userName}</td>
          <td>{t.address}</td>
          <td>{t.total}</td>
          <td>{t.delivered.toString()}</td>
        </tr>
      )
    } else {
      return (
        <tr key={i} bgcolor="#E06060" onClick={() => this.props.onDetail(t.id)}>
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
            {this.state.orders.map((t,i) => this.renderRow(t,i))}
          </tbody>
        </Table>
        
      </div>
    )
  }
}
