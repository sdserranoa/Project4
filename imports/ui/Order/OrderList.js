import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap/';
import Order from './Order.js';
import EnhancedTable from './OrderTable.js';

export default class OrderList extends Component {

    state = {
        orders: [
            {
                id:1,
                menu:'Carne',
                price:'100',
                state:'Preparation',
                addres:'calle2'
            },
            {
                id:2,
                menu:'Carne1',
                price:'100',
                state:'Preparation',
                addres:'calle2'
            },
            {
                id:3,
                menu:'Carne2',
                price:'100',
                state:'Preparation',
                addres:'calle2'
            },
            {
                id:4,
                menu:'Carne3',
                price:'100',
                state:'Preparation',
                addres:'calle2'
            }
        ]
    }

    render() {
        return (
            <div>
                <Container fluid="true">
                    <h1 style={{ textAlign: "center" }}>Orders</h1>
                    <hr></hr>
                    <Row>
                        <Col>
                            <EnhancedTable/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
}
