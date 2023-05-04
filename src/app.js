import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let DUMMY_EXPENSE = [

];
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) => {
        const updatedExpenses = [expense, ...expenses];
        setExpenses(updatedExpenses);

    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
}

export default App;