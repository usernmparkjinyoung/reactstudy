import React from 'react'

export default function List() {
    const todos = [
        {id : 1, text : 't1'},
        {id : 2, text : 't2'},
        {id : 3, text : 't3'},
        {id : 4, text : 't4'}
    ];

    const Item = (props) => {
        console.log(props)
        return <li>{props.text}</li>;
    };

    const todoList = todos.map((todo) => <Item key={todo.id} id={todo.id} text={todo.text} /> );

    return <>{todoList}</>
}
