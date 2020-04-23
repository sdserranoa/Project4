import React, { Component } from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import CartButton from '../cart/CartButton'


export default class Meal extends Component {
    render() {
        let meal = this.props.meal

        return (
            <Link to={"/meals/" + meal.id} className="card-link">
                < div className="meal-card">
                    <Container fluid>
                        <Row className="justify-content-md-center align-items-center" style={{ cursor: 'pointer' }}>
                            <Col lg={3} className="text-center">
                                <Image className="meal-thumbnail" src={meal.images[0]} roundedCircle alt={meal.name + " imagen"} />
                            </Col>

                            <Col>
                                <Row as="h2">{meal.name}</Row>
                                <Row as="p" style={{ color: '#323232' }}><strong>Calorías: {meal.calories}</strong></Row>
                                <Row as="p">{meal.description}</Row>
                                <Row as="p" style={{ color: 'green' }}>
                                    <b>${meal.price}</b>
                                </Row>
                                <Row>
                                    <CartButton />
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div >
            </Link >
        )
    }
}