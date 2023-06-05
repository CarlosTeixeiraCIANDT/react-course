import React, { useState } from 'react';
import { Expense } from '../../../models/Expense';
import styles from './ExpenseForm.module.css'

const ExpenseForm: React.FC<{ onSaveExpenseData: (expenseData: Expense) => void, onCancel: () => void }> = (props) => {

  const { onSaveExpenseData, onCancel } = props;
  // const [expenseData, setExpenseData] = useState<Expense>({
  //   id: Math.random().toString(),
  //   title: '',
  //   date: new Date(),
  //   amount: 0
  // });

  const [expenseTitle, setExpensetitle] = useState<string>('');
  const [expenseDate, setExpenseDate] = useState<string>('');
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(true);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim().length > 0) {
      setIsValid(true);
    }
    setExpensetitle(event.currentTarget.value);
    // setExpenseData((prevState) => { return { ...prevState, title: event.target.value } })

  };

  const amountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.currentTarget.value) > 0) {
      setIsValid(true);
    }
    setExpenseAmount(parseInt(event.currentTarget.value));
    // setExpenseData((prevState) => { return { ...prevState, amount: parseInt(event.target.value) } })
  }

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim().length > 0) {
      setIsValid(true);
    }
    setExpenseDate(event.currentTarget.value);
    // setExpenseData((prevState) => { return { ...prevState, date: new Date(event.target.value) } })

  }

  const clearForm = () => {
    setExpensetitle('');
    setExpenseAmount(0);
    setExpenseDate('');
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (expenseTitle.trim().length === 0
      || expenseAmount === 0 || expenseDate.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const expenseObj: Expense = {
      id: Math.random().toString(),
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate)
    }

    onSaveExpenseData(expenseObj);

    // onSaveExpenseData(expenseData);

    clearForm();

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={`${styles['new-expense__control']} ${!isValid ? styles['invalid'] : styles['']}`}>
          <label >Title</label>
          <input type='text' value={expenseTitle} onChange={titleChangeHandler} />
        </div>
        {/* <div className={`new-expense__control ${!isValid ? 'invalid' : ''}`}> */}
        <div className={`${styles['new-expense__control']} ${!isValid ? styles['invalid'] : styles['']}`}>

          <label >Amount</label>
          <input type='number' value={expenseAmount} onChange={amountChangedHandler} />
        </div>
        <div className={`${styles['new-expense__control']} ${!isValid ? styles['invalid'] : styles['']}`}>
          {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Date</label> */}
          <label >Date</label>
          <input type='date' value={expenseDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export { ExpenseForm }