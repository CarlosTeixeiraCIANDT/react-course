import React, { useState } from 'react';
import { Expenses, NewExpenses, Wrapper } from './components';
import { Expense } from './models/Expense';

const App: React.FC = () => {

  const [expenses, setExpenses] = useState<Expense[]>([])

  const saveExpenseDataHandler = (expenseData: Expense) => {
    setExpenses((expenses => [...expenses, expenseData]));
  }

  const removeExpenseHandler = (id: string) => {
    let filteredExpenses = expenses.filter(expense => {
      return expense.id !== id;
    });

    setExpenses(filteredExpenses);
  }

  return (
    <Wrapper>
      <NewExpenses addSaveExpenseHandler={saveExpenseDataHandler} />
      <Expenses expenses={expenses} addRemoveExpensesHandler={removeExpenseHandler} />
    </Wrapper>
  );
}

export default App;
