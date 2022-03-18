import React, { useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
    console.log("평균값 계산중1");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    console.log("평균값 계산중2");
    return sum / numbers.length;
} 

const Average2 = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');

    const onChange = useCallback(e => {
        setNumber(e.target.value)
    }, [])
    // 컴포넌트가 처음 랜더링될때만 함수생성 

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);
    // number, list가 바뀌었을때만 함수생성 

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div> 
        </>
    )
}

export default Average2;