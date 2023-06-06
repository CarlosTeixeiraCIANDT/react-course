import { Expense } from '../../../models/Expense';
import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList: React.FC<{ expenses: Expense[] }> = (props) => {

  const { expenses } = props;

  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return (
    <ul className='expenses-list'>
      {expenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} />
      })}
    </ul>
  )
}

export { ExpensesList }