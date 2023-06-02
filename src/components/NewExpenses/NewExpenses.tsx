import { Expense } from '../../models/Expense';
import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import './NewExpenses.css'

const NewExpenses: React.FC<{ addSaveExpenseHandler: (expenseData: Expense) => void }> = (props) => {

  const { addSaveExpenseHandler } = props;

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={addSaveExpenseHandler} />
    </div>
  )
}

export { NewExpenses };