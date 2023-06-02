import React, { useState } from 'react';
import { Expenses, NewExpense } from './components/index';
import { Expense } from './models/Expense';

const App: React.FC = () => {

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const hasItem = expenses.length !== 0;

  const saveExpenseDataHandler = (expenseData: Expense) => {
    console.log('from app.tsx', expenseData);
    setExpenses((expenses => [...expenses, expenseData]));

  }
  // return React.createElement('div', {},
  //   React.createElement(Expenses, { expenses: expenses }));

  return (
    <div>
      <NewExpense addSaveExpenseHandler={saveExpenseDataHandler} />
      {hasItem && <Expenses expenses={expenses} />}
    </div>
  );
}

export default App;
