import React, { Component } from 'react'

export default class OrderDetail extends Component {

    state = {
        detail: this.props.detail[0]
    }

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (
            this.props.detail !== prevProps.detail
        ) {
            this.setState({ detail: this.props.detail[0] })
        }
    }

    render() {
        return (
            <div>{console.log(this.state.detail.id)}
                Detail de {this.state.detail.id}
                
            </div>
        )
    }
}
