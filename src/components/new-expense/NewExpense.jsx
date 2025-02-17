
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from "react";

const NewExpense = ({onSave}) => {


    //새로운 지출 버튼을 눌렀는지 여부를 상태관리
    const [toggle, setToggle] = useState(false);

    const buttonComponent = <button onClick={()=> setToggle(true)}> 지출 추가하기</button>;
    const formComponent = <ExpenseForm onAdd={onSave} onCancel={()=>setToggle(false)} />;

    return (
        <div className='new-expense'>
            {/*<ExpenseForm onAdd={onSave} />*/}
            {toggle ? formComponent : buttonComponent}
        </div>

    );
};
export default NewExpense;