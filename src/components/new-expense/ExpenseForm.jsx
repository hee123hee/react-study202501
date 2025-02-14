import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const initialUserInput = {
        title: '',
        price: 0,
        date: '',
    };

    const [userInput, setUserInput] = useState(initialUserInput);

    // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
    const getTodayDate = () => new Date().toISOString().split('T')[0];

    // form submit 이벤트
    const handleSubmit = e => {
        e.preventDefault();
        console.log('userInput: ', userInput);

        // 입력창 비우기
        setUserInput(initialUserInput);
    };

    const handleTitleInput = e => {
        setUserInput(prevState => ({
            ...prevState,
            title: e.target.value,
        }));
    };

    const handlePriceInput = e => {
        setUserInput(prevState => ({
            ...prevState,
            price: +e.target.value,
        }));
    };

    const handleDateInput = e => {
        setUserInput(prevState => ({
            ...prevState,
            date: e.target.value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={handleTitleInput}
                        value={userInput.title}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input
                        type='number'
                        min='100'
                        step='100'
                        onChange={handlePriceInput}
                        value={userInput.price}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max={getTodayDate()}
                        onChange={handleDateInput}
                        value={userInput.date}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
