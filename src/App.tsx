import React, { Fragment, useState } from 'react';
import { Expenses, NewExpenses } from './components';
import { Expense } from './models/Expense';
import { Wrapper } from './Wrapper';

const App: React.FC = () => {

  const [expenses, setExpenses] = useState<Expense[]>([])

  const saveExpenseDataHandler = (expenseData: Expense) => {
    setExpenses((expenses => [...expenses, expenseData]));
  }

  const removeExpenseDataHandler = (id: string) => {
    let filteredExpesnes = expenses.filter(expense => {
      return expense.id !== id;
    });

    setExpenses(filteredExpesnes);
  }

  return (
    <>
      <NewExpenses addSaveExpenseHandler={saveExpenseDataHandler} />
      <Expenses expenses={expenses} addRemoveExpenseHandler={removeExpenseDataHandler} />
    </>
  );
}

export default App;
