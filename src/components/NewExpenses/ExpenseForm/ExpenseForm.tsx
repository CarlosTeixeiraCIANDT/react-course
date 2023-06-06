import React, { useRef, useState } from 'react';
import { Expense } from '../../../models/Expense';
import styles from './ExpenseForm.module.css';

const ExpenseForm: React.FC<{ onSaveExpenseData: (expenseData: Expense) => void }> = (props) => {

  const { onSaveExpenseData } = props;
  /**
   * object state
   */
  // const [expenseData, setExpenseData] = useState<Expense>({
  //   id: Math.random().toString(),
  //   title: '',
  //   date: new Date(),
  //   amount: 0
  // });

  /**
   * separated states
   */
  // const [expenseTitle, setExpensetitle] = useState<string>('');
  // const [expenseDate, setExpenseDate] = useState<string>('');
  // const [expenseAmount, setExpenseAmount] = useState<number>(0);

  //validation state
  const [isValid, setIsValid] = useState<boolean>(true);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);


  // state event handler
  // const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.value.trim().length > 0) {
  //     setIsValid(true);
  //   }
  //   setExpensetitle(event.currentTarget.value);
  //   // setExpenseData((prevState) => { return { ...prevState, title: event.target.value } })

  // };

  // state event handler
  // const amountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setExpenseAmount(parseInt(event.currentTarget.value));
  //   // setExpenseData((prevState) => { return { ...prevState, amount: parseInt(event.target.value) } })
  // }

  // state event handler
  // const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setExpenseDate(event.currentTarget.value);
  //   // setExpenseData((prevState) => { return { ...prevState, date: new Date(event.target.value) } })

  // }

  //state form cleaner
  // const clearForm = () => {
  //   setExpensetitle('');
  //   setExpenseAmount(0);
  //   setExpenseDate('');
  // }

  //submit handler function
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //state validation for dynamic styling
    // if (expenseTitle.trim().length === 0
    //   || expenseAmount === 0
    //   || expenseDate.trim().length === 0) {
    //   setIsValid(false);
    //   return;
    // }

    // //state submit payload object creation
    // const expenseObj: Expense = {
    //   id: Math.random().toString(),
    //   title: expenseTitle,
    //   amount: expenseAmount,
    //   date: new Date(expenseDate)
    // }

    if (titleInputRef.current?.value.length === 0
      || amountInputRef.current?.value.length === 0
      || dateInputRef.current?.value.length === 0) {
      setIsValid(false);
      return;
    }

    const expenseObj: Expense = {
      id: Math.random().toString(),
      title: titleInputRef.current!.value,
      amount: parseInt(amountInputRef.current!.value),
      date: new Date(dateInputRef.current!.value)
    }

    // separated states submitcall
    onSaveExpenseData(expenseObj);

    //object state submit call
    // onSaveExpenseData(expenseData);

    //clearing states
    // clearForm();

    titleInputRef.current!.value = '';
    amountInputRef.current!.value = '';
    dateInputRef.current!.value = '';

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={`${styles['new-expense__control']} ${!isValid ? styles['invalid'] : ''}`}>
          <label>Title</label>
          <input
            type='text'
            // value={expenseTitle}
            // onChange={titleChangeHandler}
            ref={titleInputRef}
          />
        </div>
        <div className={`${styles['new-expense__control']} ${!isValid ? styles['invalid'] : ''}`}>
          <label>Amount</label>
          <input
            type='number'
            // value={expenseAmount}
            // onChange={amountChangedHandler}
            ref={amountInputRef}
          />
        </div>
        <div className={`${styles['new-expense__control']} ${!isValid ? styles['invalid'] : ''}`}>
          <label>Date</label>
          <input
            type='date'
            // value={expenseDate}
            // onChange={dateChangeHandler}
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export { ExpenseForm }