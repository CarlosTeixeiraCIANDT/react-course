import React, { useState } from 'react';
import { Expenses, NewExpenses } from './components';
import { Expense } from './models/Expense';

const App: React.FC = () => {

  // let expenseDate: string = createDate();
  // let expenseTitle = 'Mercado';
  // let expenseAmount = 300;

  // const expenses: Expense[] = [
  //   {
  //     id: 'e1',
  //     title: 'Mercado',
  //     amount: 300,
  //     date: new Date(),
  //   },
  //   {
  //     id: 'e2',
  //     title: 'Gas',
  //     amount: 250,
  //     date: new Date(),
  //   },
  // ]

  const [expenses, setExpenses] = useState<Expense[]>([])
  const hasItem = expenses.length !== 0;

  const saveExpenseDataHandler = (expenseData: Expense) => {
    setExpenses((expenses => [...expenses, expenseData]));
  }

  return (
    <div>
      <NewExpenses addSaveExpenseHandler={saveExpenseDataHandler} />
      {hasItem && <Expenses expenses={expenses} />}
    </div>
  );
}

export default App;
