import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // 리액트 아이콘, https://react-icons.github.io/react-icons/
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [ value, setValue ] = useState('');

    const onChange = useCallback(e => {
        console.log("실행확인1")
        setValue(e.target.value);
    }, []);

    /* 
    const onSubmit = useCallback(
        e => { 
            console.log("실행확인2")
            onInsert(value);
            setValue('');

            // submit는 브라우저에서 새로고침을 발생시킴 
            // 이를 방지하기 위해 이 함수를 호출   
            e.preventDefault();
        },
        [onInsert, value],
    )
    */ 
 
    const onClick = useCallback(
        () => { 
            onInsert(value);
            setValue('');
        }, 
        [onInsert, value]
    ) 

    return (
        <form className="TodoInsert">
            <input 
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}
            />
            <button type="button" onClick={onClick}>
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;