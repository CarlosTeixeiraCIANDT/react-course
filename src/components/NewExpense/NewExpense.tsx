import { Expense } from '../../models/Expense';
import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense: React.FC<{ addSaveExpenseHandler: (expenseDate: Expense) => void }> = (props) => {

  const { addSaveExpenseHandler } = props;

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={addSaveExpenseHandler} />
    </div>
  )
}

export { NewExpense }