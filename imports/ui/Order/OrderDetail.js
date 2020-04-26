import React, { Component } from 'react'
import { Table, Row, Col } from 'react-bootstrap/'

export default class OrderDetail extends Component {

    state = {
        detail: this.props.detail[0]
    }

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (
            this.props.detail !== prevProps.detail
        ) {
            this.setState({ detail: this.props.detail[0] })
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={4}>
                        <h4>Client Name</h4>
                    </Col>
                    <Col sm={8}>
                        <p>{this.state.detail.userName}</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col sm={4}>
                        <h4>Date</h4>
                    </Col>
                    <Col sm={8}>
                        <p>{this.state.detail.date}</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col sm={4}>
                        <h4>Address</h4>
                    </Col>
                    <Col sm={8}>
                        <p>{this.state.detail.address}</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col sm={4}>
                        <h4>Total</h4>
                    </Col>
                    <Col sm={8}>
                        <p>{this.state.detail.total}</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col sm={4}>
                        <h4>Delivered</h4>
                    </Col>
                    <Col sm={8}>
                        <p>{this.state.detail.delivered.toString()}</p>
                    </Col>
                </Row>
                <hr></hr>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
