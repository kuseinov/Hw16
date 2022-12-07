import { Component } from 'react';
import { TodoContext } from '../../App';
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
export default class ExpensesList extends Component {
	static contextType = TodoContext;
	render() {
	  const item = this.context.currentExpenses()
	  return (
		<>
		  {item.length === 0 ? (
			<h1 className="expenses-list__fallback">No Expenses Found</h1>
		  ) : (
			<>
			  {item.map((item) => {
				  console.log(item.title);
				return (
				  <ExpenseItem
					expenseTitle={item.title}
					expensePrice={item.amount}
					expenseDate={item.date}
					id={item.id}
					key={item.id}
				  />
				);
			  })}
			</>
		  )}
		</>
	  );
	}
  }