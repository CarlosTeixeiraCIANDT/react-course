import { ExpenseItem } from './components/index';
import { Expense } from './models/Expense';

const App: React.FC = () => {

  // let expenseDate: string = createDate();
  // let expenseTitle = 'Mercado';
  // let expenseAmount = 300;

  const expenses: Expense[] = [
    {
      id: 'e1',
      title: 'Mercado',
      amount: 300,
      date: new Date(),
    },
    {
      id: 'e2',
      title: 'Gas',
      amount: 250,
      date: new Date(),
    },
  ]



  return (
    <div>
      {expenses.map((e) => {
        return (
          <ExpenseItem expense={e} />
        )
      })}
    </div>
  );
}

export default App;
