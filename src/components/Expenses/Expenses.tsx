import { ExpenseItem } from "./ExpenseItem/ExpenseItem"
import { Expense } from "../../models/Expense"
import { Card } from "../Card/Card";

import './Expenses.css';

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {

  const { expenses } = props;

  return (
    <Card className='expenses' >
      {expenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} />
      })}
    </Card>
  )
}

export { Expenses }