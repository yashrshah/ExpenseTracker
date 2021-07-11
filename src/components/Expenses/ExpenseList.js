import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const ExpenseList = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");

  const yearFilterdHandler = (filterdYear) => {
    setFilterdYear(filterdYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterdYear}
          onYearFiltered={yearFilterdHandler}
        ></ExpensesFilter>
        <ExpenseItem expense={props.expenses[0]} />
        <ExpenseItem expense={props.expenses[1]} />
        <ExpenseItem expense={props.expenses[2]} />
        <ExpenseItem expense={props.expenses[3]} />
      </Card>
    </div>
  );
};
export default ExpenseList;
