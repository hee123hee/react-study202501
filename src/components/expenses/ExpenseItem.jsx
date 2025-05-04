import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../ui/Card.jsx";
import log from "eslint-plugin-react/lib/util/log.js";

const ExpenseItem = ({expense}) => {
    // console.log('props', props);
    const {title, price, date} = expense;

    // 원화 표기법으로 변환
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price)

    // 이벤트 핸들러 정의
    function handleClick(e) {
        console.log('click!!');
        console.log(e.target)
    }

    return (
        <Card className='expense-item' onClick={(e)=>console.log('이벤투!')}>
            <ExpenseDate expenseDate={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{formatPrice}원</div>
            </div>
            <button id="btn1" onClick={handleClick}>버튼1</button>
            <button id="btn2"
                    onMouseLeave={(e) => alert('나가기~!')}
                    onMouseOver={(e) => alert('이벤트!!')}>
                버튼2
            </button>
        </Card>
    );
};

export default ExpenseItem;