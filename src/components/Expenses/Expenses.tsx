import { Expense } from "../../models/Expense"
import { Card } from "../Card/Card";

import './Expenses.css';
import { ExpensesFilter } from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList/ExpensesList";
import { ExpensesChart } from "./ExpensesChart/ExpensesChart";

const Expenses: React.FC<{ expenses: Expense[], addRemoveExpensesHandler: (id: string) => void }> = (props) => {

  const { expenses, addRemoveExpensesHandler } = props;
  const [filteredYear, setFilteredYear] = useState<string>('2023');

  const filtereChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  // const hasItem = filteredExpenses.length !== 0;

  // let expensesContent: JSX.Element[] | JSX.Element = <p>No expenses found</p>;

  // if (hasItem) {
  //   expensesContent = filteredExpenses.map((e) => {
  //     return <ExpenseItem key={e.id} expense={e} />
  //   })
  // }


  return (
    <Card className='expenses' >
      <ExpensesFilter selected={filteredYear} onChangeFilter={filtereChangeHandler} />
      {/* {!hasItem && <p>No expenses found</p>}
      {hasItem && filteredExpenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} />
      })} */}
      {/* {!hasItem ? <p>No expenses found</p> : filteredExpenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} />
      })} */}
      {/* {expensesContent} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} addRemoveExpensesHandler={addRemoveExpensesHandler} />
    </Card>
  )
}

export { Expenses }