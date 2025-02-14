import ExpenseList from "./components/expenses/ExpenseList";
import Counter from "./components/Counter";
import NewExpense from "./components/new-expense/NewExpense.jsx";
import CheckBoxStyle from "./components/practice/ChechBoxStyle.jsx";


/*
    jsx: 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환

    - 규칙:
    1. return 안에 있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 />로 마감.
    3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기.
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨.
    5. 변수값이나 함수를 출력할 때는 {}로 감사면 됨.
 */

// const $h1 = React.createElement('h1', null, '안녕 리액트 !!');

const App = () => {





    // 서버에서 지출항목 JSON이 응답됨
    const expenses = [
        {
            title: '치킨',
            price: 30000,
            date: new Date(2025, 2 - 1, 3),
        },
        {
            title: '떡볶이',
            price: 4000,
            date: new Date(2025, 9 - 1, 30),
        },
        {
            title: '헬스장등록',
            price: 22000,
            date: new Date(2025, 6 - 1, 8),
        },
    ];

    //상향식 데이터 전달을 위해 하위컴포넌트에게 함수 하나를 내려줘야 함.
    // 리액트 에서는 on, handle이 붙으면 '아~~함수구나!' 생각함
    const onAddExpense = (newUserData) => {
        console.log('상향식 데이터 전달용 함수 호출! : ');
        // console.log(newUserData);
        expenses.push(newUserData);

        console.log(expenses);

    };


    return (
        <>
            <NewExpense onSave={onAddExpense} />
            <ExpenseList expenses={expenses}/>
        </>
    );
}

export default App;


