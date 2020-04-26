import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

/* ICONS */
import EmptyStarIcon from '@material-ui/icons/StarBorder';
import FilledStarIcon from '@material-ui/icons/Grade';
import HalfStarIcon from '@material-ui/icons/StarHalf';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Rate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: 0,
            showAlert: false
        }
    }

    handleCloseAlert() {
        this.setState({
            showAlert: false
        })
    }

    renderRating() {
        const ratingString = this.props.rating.toFixed(1)
        const ratingParts = ratingString.split('.')
        console.log(ratingParts)

        const filledStars = parseInt(ratingParts[0])
        const halfStar = parseInt(ratingParts[1]) >= 5 ? 1 : 0
        const emptyStars = 5 - filledStars - halfStar

        let starsArray = []
        for (let i = 0; i < filledStars; i++) {
            starsArray.push("filled")
        }

        if (halfStar == 1) starsArray.push("half")

        for (let i = 0; i < emptyStars; i++) {
            starsArray.push("empty")
        }

        return starsArray
    }

    renderRatingInput() {
        const filledStars = this.state.userInput
        const emptyStars = 5 - filledStars

        let starsArray = []
        for (let i = 0; i < filledStars; i++) {
            starsArray.push("filled")
        }
        for (let i = 0; i < emptyStars; i++) {
            starsArray.push("empty")
        }

        return starsArray
    }

    handleStarClick(newRating) {
        this.setState({
            userInput: newRating
        })
    }

    handleSendClick() {
        this.setState({
            showAlert: true
        })
    }

    render() {
        if (this.props.allowInput) {
            return (
                <div role="contentinfo">
                    {this.renderRatingInput().map((element, index) => {
                        if (element === "filled") {
                            return <FilledStarIcon
                                key={index}
                                className="rating-star rating-star-input"
                                onClick={() => this.handleStarClick(index + 1)} />
                        } else {
                            return <EmptyStarIcon
                                key={index}
                                className="rating-star rating-star-input"
                                onClick={() => this.handleStarClick(index + 1)} />
                        }
                    })}
                    <Button variant="primary" onClick={this.handleSendClick.bind(this)}>Send Rating</Button>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={this.state.showAlert}
                        autoHideDuration={6000}
                        onClose={this.handleCloseAlert.bind(this)}>
                        <Alert onClose={this.handleCloseAlert.bind(this)} severity="success">
                            ¡Rating Sent!
                    </Alert>
                    </Snackbar>
                </div>
            )
        } else {
            return (
                <div role="contentinfo">
                    {this.renderRating().map((element, index) => {
                        if (element === "filled") {
                            return <FilledStarIcon key={index} className="rating-star" />
                        } else if (element === "half") {
                            return <HalfStarIcon key={index} className="rating-star" />
                        } else {
                            return <EmptyStarIcon key={index} className="rating-star" />
                        }
                    })}
                </div>
            )
        }
    }
}