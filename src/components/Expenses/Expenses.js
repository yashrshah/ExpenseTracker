import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const ExpenseList = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");

  const yearFilterdHandler = (filterdYear) => {
    setFilterdYear(filterdYear);
  };

  const filterdExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            defaultYear={filterdYear}
            onYearFiltered={yearFilterdHandler}
          ></ExpensesFilter>
          <ExpensesChart expenses={filterdExpenses}></ExpensesChart>
          <ExpensesList items={filterdExpenses}></ExpensesList>
        </Card>
      </li>
    </div>
  );
};
export default ExpenseList;
