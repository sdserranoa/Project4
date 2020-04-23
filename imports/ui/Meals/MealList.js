import React, { Component } from 'react'

import { Container } from 'react-bootstrap'
import Meal from './Meal'

export default class MealList extends Component {
    render() {
        console.log(this.props.meals.length)
        if (this.props.meals.length !== 0) {
            return (
                <div role="contentinfo">
                    <Container fluid>
                        <ul>
                            {this.props.meals.map(meal => (
                                <li style={{ listStyle: 'none' }} key={meal.id}>
                                    <Meal meal={meal} />
                                </li>
                            ))}
                        </ul>
                    </Container>
                </div >
            )
        } else {
            return (
                <div role="contentinfo">
                    <Container fluid className="text-center align-items-center">
                        <h2 style={{ color: 'grey' }}>No hay comidas con los filtros que indicaste</h2>
                    </Container>
                </div>
            )
        }
    }
}