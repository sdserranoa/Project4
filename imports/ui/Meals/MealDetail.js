import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Row, Carousel, Image, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Meals } from '../../api/meals'
import CartButton from '../cart/CartButton'
import Rating from '../Ratings/Rating'

/* ICONS */
import BackIcon from '@material-ui/icons/ArrowBackIosRounded';

class MealDetail extends Component {
    render() {
        const mealID = parseInt(this.props.match.params.id)
        const meals = this.props.meals
        const temp = meals.filter(meal => { return meal.id == mealID })
        const meal = temp[0]

        return (
            <Container fluid role="contentinfo" className="mb-3" style={{ marginTop: '65px' }}>
                <Link to="/meals"><BackIcon /> Go back to meals list</Link>
                <h1>Additional Information: {meal.name}</h1>
                <Row>
                    <Col>
                        <p>{meal.description}</p>
                        <Row>
                            <Col>
                                <p style={{ color: 'green' }}>Unit price: <strong>${meal.price}</strong></p>
                                <Rating usersRating={Math.random() * 5} />
                            </Col>
                            <Col>
                                <CartButton mealName={meal.name} />
                            </Col>
                            <hr />

                            <Col xs={12}>
                                <h2>Nutritional Information</h2>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Component</th>
                                            <th>Quantity / Unit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Calories</td>
                                            <td>{meal.calories}</td>
                                        </tr>
                                        <tr>
                                            <td>Fats</td>
                                            <td>{meal.fats}g</td>
                                        </tr>
                                        <tr>
                                            <td>Carbs</td>
                                            <td>{meal.carbs}g</td>
                                        </tr>
                                        <tr>
                                            <td>Proteins</td>
                                            <td>{meal.proteins}g</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <hr />

                            <Col xs={12}>
                                <h2>Ingredients</h2>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Quantity (g)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {meal.ingredients.map((ingredient, index) => (
                                            <tr key={index}>
                                                <td>{ingredient.name}</td>
                                                <td>{ingredient.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={7} md={5}>
                        <Carousel style={{ maxHeight: '500px' }}>
                            {meal.images.map((image, index) => (
                                < Carousel.Item key={index}>
                                    <Image
                                        className="d-block w-100"
                                        src={image}
                                        rounded
                                        style={{ maxHeight: '500px' }}
                                        alt={meal.name + " imagen " + index}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default withTracker(() => {
    return {
        meals: Meals.find({}).fetch()
    }
})(MealDetail)