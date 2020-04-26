import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap/';
import Order from './Order.js';
import OrderTable from './OrderTable.js';
import Orders from '../../api/orders';
import OrderDetail from './OrderDetail.js';

export default class OrderList extends Component {

    state = {
        orders: [
            {
                id: 1,
                userName: "Mariela Garcia",
                userId: 1,
                address: "Calle 1 Carrera 1",
                total: 20000,
                delivered: true,
            },
            {
                id: 2,
                userName: "Juan Gonzales",
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 30000,
                delivered: false,
            },
            {
                id: 3,
                userName: "Camilo Martinez",
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 40000,
                delivered: false,
            },
            {
                id: 4,
                userName: "Santiago Torres",
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 60000,
                delivered: true,
            },
            {
                id: 5,
                userName: "Santiago Torres",
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 50000,
                delivered: true,
            },
        ],
        renderDetail: {
            render: false,
            current: 1,
        }
    };

    render() {
    
        return (
            <div>
                <Container fluid="true">
                    <h1 style={{ textAlign: "center" }}>Orders</h1>
                    <hr></hr>
                    <input type="text" id="min" name="min" placeholder="Search" value={this.state.inputValue} onChange={this.orderFilterOnChange}></input>
                    <Row>
                        <Col>
                            <OrderTable orders={this.state.orders} onDetail={this.handleDetail} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
}
