import './ExpenseItem.css';
import { ExpanseDate } from './ExpenseDate/ExpenseDate';
import { Expense } from '../../../../models/Expense';
import { Card } from '../../../Card/Card';

const ExpenseItem: React.FC<{ expense: Expense, onRemoveHandler: (id: string) => void }> = (props) => {

  const { onRemoveHandler } = props;
  const { date, title, amount, id } = props.expense;

  const onClickHandler = () => {
    onRemoveHandler(id);
  }

  return (
    <li onClick={onClickHandler}>
      <Card className="expense-item">
        <ExpanseDate expenseDate={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>
          R${amount}
        </div>
      </Card>
    </li>
  )
}

export { ExpenseItem };