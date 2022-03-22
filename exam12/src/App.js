import React, { useRef, useCallback, useState } from 'react';
import product from 'immer';

function App() {
  const nextId = useRef(1);
  const [ form, setForm ] = useState({ name: '', username: ''});
  const [ data, setData ] = useState({
    array: [], 
    uselessValue: null
  });
  
  // input 수정을 위한 함수 
  const onChange = useCallback( 
    e => {
      const { name, value } = e.target;
      /* 
      setForm({
        ...form,
        [name]:[value]
      })
      */ 
     setForm(
      product(form, draft => {
        draft[name] = value;
      })
     )
    },
    [form]
  );

  // form 등록을 위한 함수 
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name, 
        username: form.username
      };

      /* 
      setData({
        ...data, 
        array: data.array.concat(info)
      });
      */ 
     setData(
       product(data, draft => {
        draft.array.push(info)
       })
     );

      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    id => {
      /* 
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      })
      */ 
     setData(
      product(data, draft => {
        draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
      })
     )
    },
    [data]
  )

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {
            data.array.map(info => (
              <li key={info.id} onClick={() => onRemove(info.id)}>
                {info.username} ({info.name})
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
