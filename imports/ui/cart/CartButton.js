import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

/* ICONS */
import CartIcon from '@material-ui/icons/AddShoppingCartRounded';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class CartButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAlert: false
        }
    }

    handleCloseAlert() {
        this.setState({
            showAlert: false
        })
    }

    handleClick() {
        this.setState({
            showAlert: true
        })
    }

    render() {
        return (
            <div className="w-100">
                <Button
                    variant="outline-primary"
                    onClick={this.handleClick.bind(this)}>
                    Add to Cart <CartIcon />
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.showAlert}
                    autoHideDuration={6000}
                    onClose={this.handleCloseAlert.bind(this)}>
                    <Alert onClose={this.handleCloseAlert.bind(this)} severity="success">
                        ¡{this.props.mealName} agregado al carrito!
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}