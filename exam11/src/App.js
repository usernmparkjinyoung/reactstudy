import React, { useReducer, useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos(){
  const array = [];
  for(let i = 1;i <= 2500;i++){
    array.push({
      id: i, 
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array;
}

function todoReducer(todos, action){
  console.log(action)
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => 
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,  
      )
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값으로 사용될 id 
  // ref를 사용하여 변수 담기 
  const nextId = useRef(2501);
 
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current, 
        text, 
        checked: false
      };
      // setTodos(todos => todos.concat(todo));
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1;
    },
    []
  )
  // useCallback는 함수가 선언되어있을때 해당컴포넌트가 렌더링 될때마다 함수를 생성하는데 useCallback를 사용하면 해당컴포넌트가 렌더링되더리도 
  // 그 함수가 의존하는 값들이 바뀌지 않는 한 기존함수를 재사용 
  // useMemo는 특정 결과값을 재사용할때 사용함 

  const onRemove = useCallback(
    id => {
      // setTodos(todos => todos.filter(todo => todo.id !== id))
      dispatch({ type: 'REMOVE', id });
    },
    []
  )

  const onToggle = useCallback(
    id => {
      /* 
      setTodos(todos => 
        todos.map(todo => 
          todo.id === id ? { ...todo, checked : !todo.checked } : todo,
        )
      );
      */ 
     dispatch({ type: 'TOGGLE', id });
    },
    []
  )

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate> 
    </>
  )
}

export default App;
