import React, { Component } from 'react'
import CanvasJSReact from '../canvasjs/canvasjs.react'
import { Card } from 'react-bootstrap'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default class ExpensesChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            axisY: {
                title: "in COP",
                prefix: "$",
                suffix: "k"
            },
            toolTip: {
                shared: true,
                reversed: true
            },
            legend: {
                verticalAlign: "center",
                horizontalAlign: "right",
                reversed: true,
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            data: [
                {
                    type: "stackedColumn",
                    name: "General",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "Jan", y: 1000 },
                        { label: "Feb", y: 5000 },
                        { label: "Mar", y: 6000 },
                        { label: "Apr", y: 5000 }
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Marketing",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "Jan", y: 1300 },
                        { label: "Feb", y: 1300 },
                        { label: "Mar", y: 1500 },
                        { label: "Apr", y: 4000 }
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Sales",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "Jan", y: 1300 },
                        { label: "Feb", y: 1300 },
                        { label: "Mar", y: 1500 },
                        { label: "Apr", y: 10000 }
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "IT",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "Jan", y: 1400 },
                        { label: "Feb", y: 8000 },
                        { label: "Mar", y: 6000 },
                        { label: "Apr", y: 1000 }
                    ]
                }]
        }

        return (
            <Card>
                <h1 className="text-center">Expenses - 2020</h1>
                <CanvasJSChart options={options} />
            </Card>
        )
    }
}