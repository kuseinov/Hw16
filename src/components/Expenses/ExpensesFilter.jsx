import { Component } from 'react';
import { TodoContext } from '../../App';
import './ExpensesFilter.css'

export default class ExpensesFilter extends Component {
	static contextType = TodoContext;
	render() {
	  return (
		<div className="expenses_filter">
		  <div className="expenses_filter__control">
			<label htmlFor="">Filter by year</label>
			<select
			  value={this.context.selectedYear}
			  onChange={this.context.selectChange}
			>
			  <option value="All">Select All</option>
			  <option value="2019">2019</option>
			  <option value="2020">2020</option>
			  <option value="2021">2021</option>
			  <option value="2022">2022</option>
			</select>
		  </div>
		</div>
	  );
	}
  }