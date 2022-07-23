import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div className='expenses'>
            {
                props.expenses.map((elem) => {
                    return <ExpenseItem
                        title={elem.title}
                        amount={elem.amount}
                        date={elem.date}
                    />
                })
            }
        </div>
    );
}

export default Expenses;