import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Row, Carousel, Image, Col, Table, Link } from 'react-bootstrap'

import { Meals } from '../../api/meals'
import CartButton from '../cart/CartButton'

/* ICONS */
import BackIcon from '@material-ui/icons/ArrowBackIosRounded';

class MealDetail extends Component {
    render() {
        const mealID = parseInt(this.props.match.params.id)
        const meals = this.props.meals
        console.log(meals)
        const temp = meals.filter(meal => { return meal.id == mealID })
        const meal = temp[0]

        return (
            <Container fluid role="contentinfo">
                <a href="/meals"><BackIcon /> Volver a la lista de comidas</a>
                <h1>Información Adicional: {meal.name}</h1>
                <Row>
                    <Col>
                        <p>{meal.description}</p>
                        <Row>
                            <Col>
                                <p style={{ color: 'green' }}>Precio unidad: <strong>${meal.price}</strong></p>
                            </Col>
                            <Col>
                                <CartButton mealName={meal.name} />
                            </Col>
                        </Row>
                        <hr />

                        <h2>Información Nutricional</h2>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Componente</th>
                                    <th>Cantidad / Unidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Calorías</td>
                                    <td>{meal.calories}</td>
                                </tr>
                                <tr>
                                    <td>Grasas</td>
                                    <td>{meal.fats}g</td>
                                </tr>
                                <tr>
                                    <td>Carbohidratos</td>
                                    <td>{meal.carbs}g</td>
                                </tr>
                                <tr>
                                    <td>Proteínas</td>
                                    <td>{meal.proteins}g</td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />

                        <h2>Ingredientes</h2>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Ingrediente</th>
                                    <th>Cantidad (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {meal.ingredients.map(ingredient => (
                                    <tr>
                                        <td>{ingredient.name}</td>
                                        <td>{ingredient.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </Col>
                    <Col xl={7} md={5}>
                        <Carousel style={{ maxHeight: '500px' }}>
                            {meal.images.map((image, index) => (
                                < Carousel.Item >
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