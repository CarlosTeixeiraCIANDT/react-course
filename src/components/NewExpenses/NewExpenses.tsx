import { useState } from 'react';
import { Expense } from '../../models/Expense';
import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import './NewExpenses.css'

const NewExpenses: React.FC<{ addSaveExpenseHandler: (expenseData: Expense) => void }> = (props) => {

  const { addSaveExpenseHandler } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  const stopEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={addSaveExpenseHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export { NewExpenses };