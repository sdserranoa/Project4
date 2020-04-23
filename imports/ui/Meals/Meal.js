import React, { Component, useState } from 'react'
import { Image, Container, Row, Col, Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import CartButton from '../cart/CartButton'


export default class Meal extends Component {
    render() {
        let meal = this.props.meal

        return (
            < div className="meal-card">
                <Container fluid>
                    <Link to={"/meals/" + meal.id} className="card-link">
                        <Row className="justify-content-md-center align-items-center" style={{ cursor: 'pointer' }}>
                            <Col lg={3} className="text-center">
                                <Image className="meal-thumbnail" src={meal.images[0]} roundedCircle alt={meal.name + " imagen"} />
                            </Col>

                            <Col>
                                <Row as="h2">{meal.name}</Row>
                                <Row as="p" style={{ color: '#323232' }}><strong>Calorías: {meal.calories}</strong></Row>
                                <Row as="p">{meal.description}</Row>
                                <Row as="p" style={{ color: 'green' }}>
                                    <strong>${meal.price}</strong>
                                </Row>
                            </Col>
                        </Row>
                    </Link>
                    <Row>
                        <CartButton mealName={meal.name} />
                    </Row>
                </Container>
            </div >
        )
    }
}