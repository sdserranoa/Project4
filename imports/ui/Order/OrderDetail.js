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
            console.log("Updating........", this.props);
            this.render()
        }
    }

    render() {
        return (
            <div>
                Detail de {this.state.detail.id}
                {console.log(this.props)}
            </div>
        )
    }
}
