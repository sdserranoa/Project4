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
                        { label: "Jan", y: 14 },
                        { label: "Feb", y: 12 },
                        { label: "Mar", y: 14 },
                        { label: "Apr", y: 13 }
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Marketing",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "Jan", y: 13 },
                        { label: "Feb", y: 13 },
                        { label: "Mar", y: 15 },
                        { label: "Apr", y: 16 }
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Sales",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "Jan", y: 13 },
                        { label: "Feb", y: 13 },
                        { label: "Mar", y: 15 },
                        { label: "Apr", y: 15 }
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "IT",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "Jan", y: 14 },
                        { label: "Feb", y: 8 },
                        { label: "Mar", y: 6 },
                        { label: "Apr", y: 6 }
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