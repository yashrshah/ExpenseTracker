import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const onStopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onCancel={onStopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
