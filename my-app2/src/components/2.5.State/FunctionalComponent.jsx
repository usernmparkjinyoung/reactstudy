import React, { useEffect, useState } from 'react'

export default function FunctionalComponent() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const tick = () => {
        setDate(new Date())
    }

    return (
        <div>
        <h1>Hello, world! It's Functional</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}
