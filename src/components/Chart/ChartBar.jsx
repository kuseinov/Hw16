import { Component } from 'react';
import './ChartBar.css'
export default class ChartBar extends Component {
	render() {
	  const { value, maxValue, label } = this.props;
	  let barFillHeight = "0%";
	  if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + "%";
	  }
	  return (
		<div className="char_bar">
		  <div className="chart-bar__inner">
			<div
			  className="chart-bar__fill"
			  style={{ height: barFillHeight }}
			></div>
		  </div>
		  <div className="chart-bar__label">{label}</div>
		</div>
	  );
	}
  }