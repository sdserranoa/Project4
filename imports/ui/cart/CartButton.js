import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

/* ICONS */
import CartIcon from '@material-ui/icons/AddShoppingCartRounded';

export default class CartButton extends Component {
    render() {
        return (
            <Button
                variant="outline-primary"
                style={{
                    marginRight: '15px',
                    marginLeft: 'auto'
                }}>
                Add to Cart <CartIcon />
            </Button>
        )
    }
}