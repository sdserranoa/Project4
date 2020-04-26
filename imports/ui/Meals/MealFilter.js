import React, { Component } from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap'
import { withTracker } from 'meteor/react-meteor-data';
import { useToasts } from 'react-toast-notifications'

import { Meals } from '../../api/meals'
import MealList from './MealList';

class MealFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hideWithCarbs: false,
            hideWithFats: false,
            hideWithProteins: false,
            caloriesOrder: 'A',
            priceOrder: '',
            mealName: ''
        }
    }

    toggleHideWithCarbs() {
        this.setState({
            hideWithCarbs: !this.state.hideWithCarbs
        })
    }

    toggleHideWithFats() {
        this.setState({
            hideWithFats: !this.state.hideWithFats
        })
    }

    toggleHideWithProteins() {
        this.setState({
            hideWithProteins: !this.state.hideWithProteins
        })
    }

    setCaloriesOrderAscendent() {
        this.setState({
            caloriesOrder: 'A',
            priceOrder: ''
        })
    }

    setCaloriesOrderDescendent() {
        this.setState({
            caloriesOrder: 'D',
            priceOrder: ''
        })
    }

    setPriceOrderAscendent() {
        this.setState({
            priceOrder: 'A',
            caloriesOrder: ''
        })
    }

    setPriceOrderDescendent() {
        this.setState({
            priceOrder: 'D',
            caloriesOrder: ''
        })
    }

    setMealName() {
        let mealName = document.getElementById("meal-name-input").value
        this.setState({
            mealName: mealName
        })
    }

    applyFilters() {
        let filteredMeals = this.props.meals

        if (this.state.mealName != '') {
            filteredMeals = filteredMeals.filter(meal => meal.name.includes(this.state.mealName.trim()))
        }

        if (this.state.hideWithCarbs) {
            filteredMeals = filteredMeals.filter(meal => meal.carbs === 0)
        }

        if (this.state.hideWithFats) {
            filteredMeals = filteredMeals.filter(meal => meal.fats === 0)
        }

        if (this.state.hideWithProteins) {
            filteredMeals = filteredMeals.filter(meal => meal.proteins === 0)
        }

        if (this.state.caloriesOrder == 'A') {
            filteredMeals.sort((a, b) => {
                return a.calories - b.calories
            })
        } else if (this.state.caloriesOrder == 'D') {
            filteredMeals.sort((a, b) => {
                return a.calories - b.calories
            })
            filteredMeals.reverse()
        }

        if (this.state.priceOrder == 'A') {
            filteredMeals.sort((a, b) => {
                return a.price - b.price
            })
        } else if (this.state.priceOrder == 'D') {
            filteredMeals.sort((a, b) => {
                return a.price - b.price
            })
            filteredMeals.reverse()
        }

        return filteredMeals
    }

    showAppliedFilters() {
        let appliedFilters = []

        if (this.state.hideWithCarbs) appliedFilters.push("No carbs")

        if (this.state.hideWithFats) appliedFilters.push("No fats")

        if (this.state.hideWithProteins) appliedFilters.push("No proteins")

        if (this.state.caloriesOrder == 'A') {
            appliedFilters.push("Organized by calories: Ascendent")
        } else if (this.state.caloriesOrder == 'D') {
            appliedFilters.push('Organized by calories: Descendent')
        }

        if (this.state.priceOrder == 'A') {
            appliedFilters.push("Organized by price: Ascendent")
        } else if (this.state.priceOrder == 'D') {
            appliedFilters.push('Organized by price: Descendent')
        }

        return appliedFilters
    }

    render() {
        const handleSubmit = (event) => {
            event.preventDefault()
        }

        let filteredMeals = this.applyFilters()
        console.log(filteredMeals)

        return (
            <div role="contentinfo" style={{ marginTop: '65px' }}>
                <h1 style={{ paddingLeft: '15px' }}>Meals</h1>
                <Row>
                    <Col xl={2} className="meal-filter">
                        <Container fluid>
                            <h2>Filters</h2>
                            <hr className="filter-divider" />
                            <Form>
                                <Form.Group controlId="nutritionalCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="No carbs"
                                        id="carbs-cb"
                                        readOnly
                                        checked={this.state.hideWithCarbs}
                                        onClick={this.toggleHideWithCarbs.bind(this)}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="No fats"
                                        id="fats-cb"
                                        readOnly
                                        checked={this.state.hideWithFats}
                                        onClick={this.toggleHideWithFats.bind(this)} />
                                    <Form.Check
                                        type="checkbox"
                                        label="No proteins"
                                        id="proteins-cb"
                                        readOnly
                                        checked={this.state.hideWithProteins}
                                        onClick={this.toggleHideWithProteins.bind(this)} />
                                </Form.Group>
                                <Form.Group controlId="caloriesOrder">
                                    <Form.Label>Organize by calories</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        id="calories-ascendent"
                                        label="Ascendent"
                                        readOnly
                                        checked={this.state.caloriesOrder == 'A'}
                                        onClick={this.setCaloriesOrderAscendent.bind(this)} />
                                    <Form.Check
                                        type="radio"
                                        id="calories-descendent"
                                        label="Descendent"
                                        readOnly
                                        checked={this.state.caloriesOrder == 'D'}
                                        onClick={this.setCaloriesOrderDescendent.bind(this)} />
                                </Form.Group>
                                <hr className="filter-divider" />
                                <Form.Group controlId="priceOrder">
                                    <Form.Label>Organize by price</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        id="price-ascendent"
                                        label="Ascendent"
                                        readOnly
                                        checked={this.state.priceOrder == 'A'}
                                        onClick={this.setPriceOrderAscendent.bind(this)} />
                                    <Form.Check
                                        type="radio"
                                        id="price-descendent"
                                        label="Descendent"
                                        readOnly
                                        checked={this.state.priceOrder == 'D'}
                                        onClick={this.setPriceOrderDescendent.bind(this)} />
                                </Form.Group>
                            </Form>
                        </Container>
                    </Col>
                    <Col>
                        <Form className="mx-5 search-meal-form" onSubmit={handleSubmit}>
                            <Form.Group className="">
                                <Form.Label>Search by meal's name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Introudce meal's name"
                                    className="search-meal-input"
                                    id="meal-name-input"
                                    onChange={this.setMealName.bind(this)} />
                            </Form.Group>
                        </Form>
                        <p className="mt-3 ml-3"><strong>
                            Applied filters:
                        </strong></p>
                        <ul>
                            {this.showAppliedFilters().map(filter => (
                                <li key={filter}>{filter}</li>
                            ))}
                        </ul>
                        <p>{filteredMeals.length} meals were found.</p>
                        <MealList meals={filteredMeals} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        meals: Meals.find({}).fetch()
    }
})(MealFilter)