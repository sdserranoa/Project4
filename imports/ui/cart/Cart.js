import React, { Component } from 'react'
import { Card } from 'react-bootstrap/';


export default class Cart extends Component {

    state = {
        products: []
    }

    addProduct = (product) => {
        const aux = this.state.products.concat(product);
        this.setState({ products: aux });
    }

    renderCart = (t, i) => {
        return (
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <div>
                {this.state.products.map((t, i) => this.renderCart(t, i))}
            </div>
        )
    }
}
