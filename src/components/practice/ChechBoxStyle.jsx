import React, {useState} from 'react';
import './CheckBoxStyle.css';

function CheckBoxStyle() {
    /*
      1. input[checkbox]에 change이벤트가 걸려서
      2. check 상태가 바뀔 때마다 상태변수를 논리값으로 업데이트하여
      3. label의 클래스를 유동적으로 변경해야함.
    */

    const [checked, setChecked] = useState(false);
    const handleCheckbox = e => {
        // console.log('chechbox click!!!!');
        setChecked(!checked);
    };

    return (
        <div className='checkbox-container'>
            <input
                type='checkbox'
                id='styled-checkbox'
                onChange={handleCheckbox}
            />
            <label className={checked ? 'checked' : 'unChecked'} htmlFor='styled-checkbox'>Check me!</label>
        </div>
    );
}

export default CheckBoxStyle;