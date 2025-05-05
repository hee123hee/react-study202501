
import React, { useState } from 'react';
import './CheckBoxStyle.css';

function CheckBoxStyle() {
/*
    1. input[checkbox]에  change 이벤트가 걸려서
    2. check 상태가 바뀔 때마다 상태변수를 논리값으로 없데이트하여
    3. label의 클래스를 유동적으로 변경해야 함.
 */
    const [checkbox , setCheckbox] = useState()

    const handleCheckbox = () => {
        setCheckbox(checkbox[type]='unchecked')
    }

    return (
        <div className='checkbox-container'>
            <input
                type='checkbox'
                id='styled-checkbox'
                onChange={handleCheckbox}
            />
            <label className='unchecked' htmlFor='styled-checkbox'>Check me!</label>
        </div>
    );
}

export default CheckBoxStyle;