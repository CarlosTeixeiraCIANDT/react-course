import { useState } from "react";
import { Expense } from "../../models/Expense"
import { Card } from "../Card/Card";
import { ExpenseList } from "./ExpensesList/ExpensesList";
import { ExpensesFilter } from "./ExpenseFilter/ExpenseFilter";
import { ExpenseItem } from "./ExpensesList/ExpenseItem/ExpenseItem";

import './Expenses.css';
import { ExpensesChart } from "./ExpensesChart/ExpensesChart";

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {

  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState<string>('2023');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  // const hasItem = filteredExpenses.length !== 0;

  // let expensesContent: JSX.Element[] | JSX.Element = <p>No Expenses Found.</p>

  // if (hasItem) {
  //   expensesContent = filteredExpenses.map((e) => {
  //     return <ExpenseItem key={e.id} expense={e} />
  //   });
  // }

  return (
    <Card className='expenses' >
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* {!hasItem && <p>No Expenses found</p>}
      {hasItem && filteredExpenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} />
      })} */}
      {/* {hasItem ? filteredExpenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} />
      }) : <p>No Expenses found</p>} */}
      {/* {expensesContent} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  )
}

export { Expenses }