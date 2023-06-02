import React, { useState } from 'react';
import { Expense } from '../../../models/Expense';
import './ExpenseForm.css'

const ExpenseForm: React.FC<{ onSaveExpenseData: (expenseData: Expense) => void }> = (props) => {

  const { onSaveExpenseData } = props;
  const [expenseData, setExpenseData] = useState<Expense>({
    id: Math.random().toString(),
    title: '',
    date: new Date(),
    amount: 0
  });

  const [expenseTitle, setExpensetitle] = useState<string>('');
  const [expenseDate, setExpenseDate] = useState<string>('');
  const [expenseAmount, setExpenseAmount] = useState<number>(0);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpensetitle(event.currentTarget.value);
    console.log(event.currentTarget.value);
    setExpenseData((prevState) => { return { ...prevState, title: event.target.value } })

  };

  const amountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseAmount(parseInt(event.currentTarget.value));
    console.log(event.currentTarget.value);
  }

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseDate(event.currentTarget.value);
    console.log(event.currentTarget.value);

  }

  const clearForm = () => {
    setExpensetitle('');
    setExpenseAmount(0);
    setExpenseDate('');
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseObj: Expense = {
      id: Math.random().toString(),
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate)
    }

    onSaveExpenseData(expenseObj);

    clearForm();

  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={expenseTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={expenseAmount} onChange={amountChangedHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={expenseDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export { ExpenseForm }