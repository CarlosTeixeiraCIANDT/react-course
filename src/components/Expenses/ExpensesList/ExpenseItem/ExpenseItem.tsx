import './ExpenseItem.css';
import { ExpanseDate } from './ExpenseDate/ExpenseDate';
import { Expense } from '../../../../models/Expense';
import { Card } from '../../../Card/Card';

const ExpenseItem: React.FC<{ expense: Expense }> = (props) => {

  const { date, title, amount } = props.expense;


  return (
    <li>
      <Card className="expense-item">
        <ExpanseDate expenseDate={date} />
        <div className='expense-item__description'>
          <h2>
            {title}
          </h2>
          <div className='expense-item__price'>
            R${amount}
          </div>
        </div>
      </Card>
    </li>
  )
}

export { ExpenseItem };