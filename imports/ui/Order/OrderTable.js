import React, { Component } from 'react'
import { Table, Row, Col } from 'react-bootstrap/';
import OrderDetail from './OrderDetail'

export default class OrderTable extends Component {

  state = {
    orders: this.props.orders,
    renderCurrent: false,
    current: 0,
  }

  renderRow = (t, i) => {
    if (t.delivered) {
      return (
        <tr key={i} bgcolor="#8DEF70" onClick={() => this.handleSelect(t.id)}>
          <td>{t.id}</td>
          <td>{t.userName}</td>
          <td>{t.address}</td>
          <td>{t.total}</td>
          <td>{t.delivered.toString()}</td>
        </tr>
      )
    } else {
      return (
        <tr key={i} bgcolor="#E06060" onClick={() => this.handleSelect(t.id)}>
          <td>{t.id}</td>
          <td>{t.userName}</td>
          <td>{t.address}</td>
          <td>{t.total}</td>
          <td>{t.delivered.toString()}</td>
        </tr>
      )
    }
  }

  handleSelect = (id) => {
    console.log("Id de entrada"+id)
    this.setState({ renderCurrent: true },this.setState({ current: id }))
    
  }

  renderDetail = () => {
    if (this.state.renderCurrent) {
      console.log(this.state.current)
      return (
        <OrderDetail detail={this.selected(this.state.current)} />
      )
    } else {
      return (
        <div>
          <h1>No selected detail</h1>
        </div>
      )
    }
  }

  selected = (id) => {
    var tasks = []
    tasks= this.state.orders.filter(t => t.id == id);
    return tasks;
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
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
                {this.state.orders.map((t, i) => this.renderRow(t, i))}
              </tbody>
            </Table>
          </Col>
          <Col>
            {this.renderDetail()}
          </Col>
        </Row>
      </div>
    )
  }
}
