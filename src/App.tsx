import React, { useState } from 'react';
import { Expenses, NewExpenses } from './components';
import { Expense } from './models/Expense';

const App: React.FC = () => {

  const [expenses, setExpenses] = useState<Expense[]>([])

  const saveExpenseDataHandler = (expenseData: Expense) => {
    setExpenses((expenses => [...expenses, expenseData]));
  }

  return (
    <div>
      <NewExpenses addSaveExpenseHandler={saveExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
