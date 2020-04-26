import React, { Component } from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import { Button } from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class FooterSubmit extends Component {
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
                    onClick={this.handleClick.bind(this)}>
                    Submit
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.showAlert}
                    autoHideDuration={6000}
                    onClose={this.handleCloseAlert.bind(this)}>
                    <Alert onClose={this.handleCloseAlert.bind(this)} severity="success">
                        ¡{this.props.mealName} ¡Message submited! we will respond soon!
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}
