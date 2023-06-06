import ReactDOM from 'react-dom';
import { Expense } from '../../../models/Expense';
import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ListComp: React.FC<{ expenses: Expense[], addRemoveExpensesHandler: (id: string) => void }> = (props) => {

  const { expenses, addRemoveExpensesHandler } = props;

  return (
    <ul className='expenses-list'>
      {expenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} onRemoveExpenses={addRemoveExpensesHandler} />
      })}
    </ul>
  )
};

const ExpensesList: React.FC<{ expenses: Expense[], addRemoveExpensesHandler: (id: string) => void }> = (props) => {

  const { expenses, addRemoveExpensesHandler } = props;

  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return (
    <>
      {ReactDOM.createPortal(<ListComp expenses={expenses} addRemoveExpensesHandler={addRemoveExpensesHandler} />, document.getElementById("portal-id") as HTMLElement)}
    </>
  )
}

export { ExpensesList }