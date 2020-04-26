import React, { Component } from 'react'

import Rate from './Rate'
import { Container } from 'react-bootstrap'

export default class Rating extends Component {
    render() {
        return (
            <Container fluid>
                <p><strong>User Ratings</strong></p>
                <Rate rating={this.props.usersRating} allowInput={false} />

                <p><strong>Rate this meal: </strong></p>
                <Rate allowInput={true} />
            </Container>
        )
    }
}