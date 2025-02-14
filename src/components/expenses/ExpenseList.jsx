import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
import ExpenseFilter from "./ExpenseFilter.jsx";

const ExpenseList = ({expenses}) => {

    console.log('필터 연도값을 출력');

    //연도를 끌어올리기 위한 함수
    const onFilterChange = (filteredYear) =>{
        console.log(`선택된 연도: ${filteredYear}`);
    };

    return (
        <div className="expenses">
            <ExpenseFilter onChangeFilter={onFilterChange} />
            <ExpenseItem expense={expenses[0]}/>
            <ExpenseItem expense={expenses[1]}/>
            <ExpenseItem expense={expenses[2]}/>

        </div>
    );
};

export default ExpenseList;