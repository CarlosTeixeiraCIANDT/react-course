import ReactDOM from 'react-dom';
import { Expense } from '../../../models/Expense';
import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ListComp: React.FC<{ expenses: Expense[], removeExpenseHandler: (id: string) => void }> = (props) => {
  const { expenses, removeExpenseHandler } = props;

  return (
    <ul className='expenses-list'>
      {expenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} onRemoveHandler={removeExpenseHandler} />
      })}
    </ul>
  )
}

const ExpensesList: React.FC<{ expenses: Expense[], removeExpenseHandler: (id: string) => void }> = (props) => {

  const { expenses, removeExpenseHandler } = props;

  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return (
    <>
      {ReactDOM.createPortal(<ListComp expenses={expenses} removeExpenseHandler={removeExpenseHandler} />, document.getElementById("list-items") as HTMLElement)}
    </>
  )
}

export { ExpensesList }