import React, { Component } from 'react'
import { Table,Row,Col } from 'react-bootstrap/'

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

                
            </div>
        )
    }
}
