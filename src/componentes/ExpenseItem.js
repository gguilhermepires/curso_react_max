import './ExpenseItem.css';

function ExpenseItem(params) {
    return (
        <div className='expense-item'>
            <div >March 28th 2021</div>
            <div className='expense-item__description'>
                <h2>Car Insure</h2>
                <div className='expense-item__price'>101,00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;