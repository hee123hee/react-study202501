import ExpenseList from "./components/expenses/ExpenseList.jsx";

/*
      jsx: 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환

      - 규칙:
      1. return 안에 있는 태그는 반드시 하나의 태그로 묶어야 함.
      2. 빈 태그(닫는 태그가 없는)는 반드시 />로 마감
      3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
      4. 의미없는 부모는 <React.Fragment>로 감싸면 됨.
      5. 변수 값이나 함수를 출력할 때는 {}로 감싸면 됨
 */

const App = () => {
    // const $h1 = React.createElement('h1', null, '안녕 리액트');

    // 서버에서 지출항목 JSON이 응답됨
    const expenses = [
        {
            title: '치킨',
            price: 15000,
            date: new Date(2025, 2, -1, 30)
        },
        {
            title: '족발',
            price: 25300,
            date: new Date(2024, 9, -14, 30)
        },
        {
            title: '헬스장등록',
            price: 70000,
            date: new Date(2025, 2, -15, 15)
        },
    ]


    return (
        <>
            <ExpenseList expenses={expenses}/>
        </>
    )
}

export default App
