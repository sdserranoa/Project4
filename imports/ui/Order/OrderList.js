import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap/';
import Order from './Order.js';
import EnhancedTable from './OrderTable.js';

export default class OrderList extends Component {

    state = {
        orders: [
            this.createData('Cupcake', 305, 3.7, 67, 4.3),
            this. createData('Donut', 452, 25.0, 51, 4.9),
            this.createData('Eclair', 262, 16.0, 24, 6.0),
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            this.createData('Gingerbread', 356, 16.0, 49, 3.9),
            this. createData('Honeycomb', 408, 3.2, 87, 6.5),
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            this.createData('Jelly Bean', 375, 0.0, 94, 0.0),
            this.createData('KitKat', 518, 26.0, 65, 7.0),
            this.createData('Lollipop', 392, 0.2, 98, 0.0),
            this. createData('Marshmallow', 318, 0, 81, 2.0),
            this.createData('Nougat', 360, 19.0, 9, 37.0),
            this.createData('Oreo', 437, 18.0, 63, 4.0),
        ],
        inputValue:''
    }
    createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      orderFilterOnChange=(event)=>{
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        
        const filteredOrders=
            this.state.orders.filter(order=>{
                
                return order.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
            })
    
        return (
            <div>
                <Container fluid="true">
                    <h1 style={{ textAlign: "center" }}>Orders</h1>
                    <hr></hr>
                    <input type="text" id="min" name="min" placeholder="Search" value={this.state.inputValue} onChange={this.orderFilterOnChange}></input>
                    <Row>
                        <Col>
                            <EnhancedTable rows={filteredOrders}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
}
