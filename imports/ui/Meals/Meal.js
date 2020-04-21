import React, { Component } from 'react'
import { Button, Image, Container, Row, Col } from 'react-bootstrap'

/* ICONS */
import CartIcon from '@material-ui/icons/AddShoppingCartRounded';

export default class Meal extends Component {
    render() {
        let meal = this.props.meal

        return (
            <div className="meal-card">
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col lg={3}>
                            <Image className="meal-thumbnail" src={meal.images[0]} roundedCircle />
                        </Col>

                        <Col>
                            <Row as="h3">{meal.name}</Row>
                            <Row as="p">{meal.description}</Row>
                            <Row as="p" style={{ color: 'green' }}>
                                <b>${meal.price}</b>
                            </Row>
                            <Row>
                                <Button
                                    variant="outline-primary"
                                    style={{
                                        marginRight: '15px',
                                        marginLeft: 'auto'
                                    }}>
                                    Add to Cart <CartIcon />
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}