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
                date: new Date().getDate(),
                userId: 1,
                address: "Calle 1 Carrera 1",
                total: 18295,
                delivered: true,
                products: [
                    {
                        id: 21,
                        cant: 1
                    }
                ]
            },
            {
                id: 2,
                userName: "Juan Gonzales",
                date: new Date().getDate(),
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 18295+7459,
                delivered: false,
                products: [
                    {
                        id: 21,
                        cant: 1
                    },
                    {
                        id: 85,
                        cant: 1
                    }
                ]
            },
            {
                id: 3,
                userName: "Camilo Martinez",
                date: new Date().getDate(),
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 18295,
                delivered: false,
                products: [
                    {
                        id: 21,
                        cant: 1
                    }
                ]
            },
            {
                id: 4,
                userName: "Santiago Torres",
                date: new Date().getDate(),
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 18295,
                delivered: true,
                products: [
                    {
                        id: 21,
                        cant: 1
                    }
                ]
            },
            {
                id: 5,
                userName: "Santiago Torres",
                date: new Date().getDate(),
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 18295,
                delivered: true,
                products: [
                    {
                        id: 21,
                        cant: 1
                    }
                ]
            },
            {
                id: 6,
                userName: "Santiago Torres",
                date: new Date().getDate(),
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 18295,
                delivered: false,
                products: [
                    {
                        id: 21,
                        cant: 1
                    }
                ]
            },
            {
                id: 7,
                userName: "Santiago Torres",
                date: new Date().getDate(),
                userId: 2,
                address: "Calle 1 Carrera 1",
                total: 18295,
                delivered: true,
                products: [
                    {
                        id: 21,
                        cant: 1
                    }
                ]
            },
        ],
    };

    render() {
    
        return (
            <div>
                <Container fluid="true" >
                    <h1 style={{ textAlign: "center" }}>Orders</h1>
                    <hr></hr>
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
