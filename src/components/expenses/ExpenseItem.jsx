import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../ui/Card';

const ExpenseItem = ({expense}) => {
    // console.log('props:' ,props);
    const {title, price, date} = expense;

    // 원화 표기법으로 변환
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    return (
        <Card className='expense-item'>
            <ExpenseDate expenseDate={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{formatPrice}원</div>
            </div>
        </Card>
    );
};


export default ExpenseItem;