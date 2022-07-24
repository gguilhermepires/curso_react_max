import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
    return (
        <Card className='expenses'>
            {
                props.expenses.map((elem) => {
                    return <ExpenseItem
                        title={elem.title}
                        amount={elem.amount}
                        date={elem.date}
                    />
                })
            }
        </Card>
    );
}

export default Expenses;