import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {  Component, createContext } from "react";

export const expenses = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2024, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2022, 5, 12),
	},
]

export const TodoContext = createContext({
	expenses: [],
  });

  class App extends Component {
	static contextType = TodoContext;
  
	render() {
	  return (
		<>
		  <NewExpense />
		  <Expenses />
		</>
	  );
	}
  }
  
  export default App;