import React from 'react';
import { MdAdd } from 'react-icons/md'; // 리액트 아이콘, https://react-icons.github.io/react-icons/
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;