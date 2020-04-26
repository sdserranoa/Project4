import React, { Component } from 'react'
import CanvasJSReact from '../canvasjs/canvasjs.react'
import { Card, Dropdown } from 'react-bootstrap'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default class SalesChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedYear: 2020
        }
    }

    handleClick(selectedYear) {
        this.setState({
            selectedYear
        })
    }

    render() {
        let options = null
        if (this.state.selectedYear == 2019) {
            options = {
                animationEnabled: true,
                axisX: {
                    valueFormatString: "MMM"
                },
                axisY: {
                    title: "Sales (in COP)",
                    prefix: "$",
                    includeZero: false
                },
                data: [{
                    yValueFormatString: "$#,###",
                    xValueFormatString: "MMMM",
                    type: "spline",
                    dataPoints: [
                        { x: new Date(2017, 0), y: 2506000 },
                        { x: new Date(2017, 1), y: 2798000 },
                        { x: new Date(2017, 2), y: 4280000 },
                        { x: new Date(2017, 3), y: 3240000 },
                        { x: new Date(2017, 4), y: 3526000 },
                        { x: new Date(2017, 5), y: 3390000 },
                        { x: new Date(2017, 6), y: 4000000 },
                        { x: new Date(2017, 7), y: 5250000 },
                        { x: new Date(2017, 8), y: 3230000 },
                        { x: new Date(2017, 9), y: 4200000 },
                        { x: new Date(2017, 10), y: 3716000 },
                        { x: new Date(2017, 11), y: 3840000 }
                    ]
                }]
            }
        } else {
            options = {
                animationEnabled: true,
                axisX: {
                    valueFormatString: "MMM"
                },
                axisY: {
                    title: "Sales (in COP)",
                    prefix: "$",
                    includeZero: false
                },
                data: [{
                    yValueFormatString: "$#,###",
                    xValueFormatString: "MMMM",
                    type: "spline",
                    dataPoints: [
                        { x: new Date(2017, 0), y: 25060000 },
                        { x: new Date(2017, 1), y: 27980000 },
                        { x: new Date(2017, 2), y: 42800000 },
                        { x: new Date(2017, 3), y: 32400000 }
                    ]
                }]
            }
        }

        return (
            <Card className="shadow">
                <Card.Header>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Select Year
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => this.handleClick(2019)}>
                                2019
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => this.handleClick(2020)}>
                                2020
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <h1 className="text-center">Sales – {this.state.selectedYear}</h1>
                <CanvasJSChart options={options} />
            </Card >
        )
    }
}