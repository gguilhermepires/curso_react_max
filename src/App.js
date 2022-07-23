import ExpenseItem from './componentes/ExpenseItem';

function App() {
  const expenses = [
    { id: '1', title: 'item 1', amount: 100, date: new Date(2022, 1, 20) },
    { id: '2', title: 'item 2', amount: 200, date: new Date(2022, 1, 20) },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenses.map((elem) => {
          return <ExpenseItem
            title={elem.title}
            amount={elem.amount}
            date={elem.date}
          ></ExpenseItem>
        })
      }
    </div>
  );
}

export default App;
