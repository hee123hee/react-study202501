import './ExpenseItem.css';

const ExpenseItem = ({title, price, date}) => {

    // console.log('props', props);



    return (
        <div className='expense-item'>
            <div>{date.toLocaleString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;