import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Meal from './Meal'

export default class MealList extends Component {
    render() {
        let meals = [
            {
                "id": 1,
                "name": "Comida 1",
                "description": "Laboris consectetur aliqua veniam eu sunt velit sint commodo id nulla irure amet officia.",
                "price": 12000,
                "images": [
                    "assets/fruit-salad.jpg",
                    "assets/fruit-salad-1.jpg"
                ],
                "ingredients": [
                    {
                        "name": "ingrediente1",
                        "quantity": 50
                    },
                    {
                        "name": "ingredient2",
                        "quantity": 50
                    },
                    {
                        "name": "Ingrediente 3",
                        "quantity": 50
                    }
                ]
            },
            {
                "id": 2,
                "name": "Comida 2",
                "description": "Est amet sint esse sint voluptate fugiat magna nulla laboris nostrud pariatur laborum.",
                "price": 15000,
                "images": [
                    "assets/salmon.jpeg",
                    "assets/salmon-1.jpg"
                ],
                "ingredients": [
                    {
                        "name": "ingrediente1",
                        "quantity": 60
                    },
                    {
                        "name": "ingredient2",
                        "quantity": 35
                    },
                    {
                        "name": "Ingrediente 3",
                        "quantity": 100
                    }
                ]
            },
            {
                "id": 3,
                "name": "Comida 3",
                "description": "Sint non non aliquip magna ad mollit amet aute deserunt ut.",
                "price": 20000,
                "images": [
                    "assets/steak.jpg"
                ],
                "ingredients": [
                    {
                        "name": "ingrediente1",
                        "quantity": 40
                    },
                    {
                        "name": "ingredient2",
                        "quantity": 200
                    },
                    {
                        "name": "Ingrediente 3",
                        "quantity": 155
                    },
                    {
                        "name": "Ingrediente 4",
                        "quantity": 300
                    }
                ]
            }
        ]

        return (
            <div>
                <Container fluid>
                    <h1>Comidas</h1>

                    <ul>
                        {meals.map(meal => (
                            <li style={{ listStyle: 'none' }}>
                                <Meal meal={meal} key={meal.id} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        )
    }
}