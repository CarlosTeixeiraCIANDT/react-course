import React, { useState } from 'react';
import { Expense } from '../../../models/Expense';
import './ExpenseForm.css';

const ExpenseForm: React.FC<{ onSaveExpenseDate: (expenseDate: Expense) => void }> = (props) => {

  const { onSaveExpenseDate } = props;
  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredAmount, setEnteredAmount] = useState<number>(0);
  const [enteredDate, setEnteredDate] = useState<string>('');
  // const [enteredExpense, setEnteredExpense] = useState<Expense>({
  //   id: Math.random().toString(),
  //   title: '',
  //   date: new Date(),
  //   amount: 0
  // });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.currentTarget.value);
    // setEnteredExpense((prevState) => { return { ...prevState, title: event.target.value } })
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(parseInt(event.currentTarget.value));
    // setEnteredExpense((prevState) => { return { ...prevState, amount: parseInt(event.target.value) } });
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.currentTarget.value);
    // setEnteredExpense((prevState) => { return { ...prevState, date: new Date(event.target.value) } })
  }

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount(0);
    setEnteredDate('');
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData: Expense = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
    onSaveExpenseDate(expenseData);

    // onSaveExpenseDate(enteredExpense);

    clearForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__constrols'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2022-01-01' max='2024-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export { ExpenseForm };