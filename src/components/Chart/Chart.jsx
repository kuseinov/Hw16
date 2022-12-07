import './Chart.css'
import ChartBar from './ChartBar'

// const Chart = ({ dataPoints = [] }) => {
// 	const dataPointsValues = dataPoints.map((point) => point.value)
// 	const totalMax = Math.max(...dataPointsValues)
// 	return (
// 		<div className='chart'>
// 			{dataPoints.map((point, index) => (
// 				<ChartBar
// 					key={index}
// 					maxValue={totalMax}
// 					label={point.label}
// 					value={point.value}
// 				/>
// 			))}
// 		</div>
// 	)
// }

// export default Chart

import React, { Component } from 'react'
export default class Chart extends Component {
  render() {
    const datPoingsValues = this.props.dataPoints.map((poing) => poing.value);
    const totalMax = Math.max(...datPoingsValues);
    return (
      <div className="chart">
        {this.props.dataPoints.map((point, index) => (
          <ChartBar {...point} maxValue={totalMax} key={index} />
        ))}
      </div>
    );
  }
}
