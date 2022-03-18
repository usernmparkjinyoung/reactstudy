import React, { useState, useMemo, useEffect } from "react";

const getAverage = numbers => {
    console.log("평균값 계산중1");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    console.log("평균값 계산중2");
    return sum / numbers.length;
} 

const Average = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }
 
    useEffect(() => { 
        console.log("rendering")
        return () => {
            console.log("update")
        }
    }, []) 

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

export default Average;