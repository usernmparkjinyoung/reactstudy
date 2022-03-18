import React, { useState, useMemo, useCallback, useRef } from "react";

const Average3 = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [list, number]);

    const getAverage = useMemo(() => {
        console.log("평균값 계산중1");
        if(list.length === 0) return 0;
        const sum = list.reduce((a, b) => a + b); 
        return sum / list.length;
    }, [list]); 

    return (
        <>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
            <div>
                <b>평균값 : </b> {getAverage}
            </div>
        </>
    )
}

export default Average3;