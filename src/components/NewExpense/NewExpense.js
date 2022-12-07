import React, { Component } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default class NewExpenses extends Component {
  render() {
    return (
      <>
        <div className="new-expenses">
          <ExpenseForm />
        </div>
      </>
    );
  }
}

