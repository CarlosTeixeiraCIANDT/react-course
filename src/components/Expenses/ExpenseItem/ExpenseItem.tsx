import './ExpenseItem.css';
import { ExpanseDate } from './ExpenseDate/ExpenseDate';
import { Expense } from '../../../models/Expense';

const ExpenseItem: React.FC<{ expense: Expense }> = (props) => {

  const { date, title, amount } = props.expense;


  return (
    <div className="expense-item">
      <div>
        <ExpanseDate expenseDate={date} />
      </div>
      <h2 className='expense-item__description'>
        {title}
      </h2>
      <div className='expense-item__price'>
        R${amount}
      </div>
    </div>
  )
}

export { ExpenseItem };