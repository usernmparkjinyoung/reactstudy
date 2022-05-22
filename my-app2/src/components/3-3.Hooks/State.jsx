import React, { useState } from 'react'

export default function State() {
    const initailCount = 0;
    const [ count, setCount ] = useState(initailCount);

    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initailCount)}>Reset</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}
