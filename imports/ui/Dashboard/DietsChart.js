import React, { Component } from 'react'
import CanvasJSReact from '../canvasjs/canvasjs.react'
import { Card } from 'react-bootstrap'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default class DietsChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 18, label: "Dieta 1" },
                    { y: 49, label: "Dieta 2" },
                    { y: 9, label: "Dieta 3" },
                    { y: 5, label: "Dieta 4" },
                    { y: 19, label: "Dieta 5" }
                ]
            }]
        }

        return (
            <Card>
                <h1 className="text-center">Diets Contributions</h1>
                <CanvasJSChart options={options} />
            </Card>
        )
    }
}