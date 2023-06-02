import { useState } from "react";
import { Expense } from "../../models/Expense";
import { Card } from "../Card/Card";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {

  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState<string>('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenses.map((e) => {
        return <ExpenseItem key={e.id} expense={e} />
      })}
    </Card>
  )
}

export { Expenses }