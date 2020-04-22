import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';

import { Container } from 'react-bootstrap'
import Meal from './Meal'
import { Meals } from '../../api/meals'

class MealList extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <h1>Comidas</h1>

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
    }
}

export default withTracker(() => {
    return {
        meals: Meals.find({}).fetch()
    }
})(MealList)