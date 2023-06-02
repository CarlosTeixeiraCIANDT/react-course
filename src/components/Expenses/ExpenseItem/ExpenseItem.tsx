import './ExpenseItem.css';
import { ExpanseDate } from './ExpenseDate/ExpenseDate';
import { Expense } from '../../../models/Expense';
import { Card } from '../../Card/Card';
import { useState } from 'react';

const ExpenseItem: React.FC<{ expense: Expense }> = (props) => {

  const { date, title, amount } = props.expense;

  // document.getElementById('root')?.addEventListener();

  // const [stateTitle, setStateTitle] = useState<string>(title);

  // const clickHandler = () => {
  //   setStateTitle('Updated')
  //   console.log('clicked');

  // };

  return (
    <Card className="expense-item">
      <div>
        <ExpanseDate expenseDate={date} />
      </div>
      <h2 className='expense-item__description'>
        {title}
      </h2>
      <div className='expense-item__price'>
        R${amount}
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  )
}

export { ExpenseItem };