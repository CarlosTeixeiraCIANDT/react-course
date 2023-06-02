import './ExpanseDate.css'

const ExpanseDate: React.FC<{ expenseDate: Date }> = (props) => {

  const { expenseDate } = props;

  const day = expenseDate.toLocaleString('pt-BR', { day: '2-digit' })
  const month = expenseDate.toLocaleString('pt-BR', { month: 'long' })
  const year = expenseDate.getFullYear();;

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  )
}

export { ExpanseDate }