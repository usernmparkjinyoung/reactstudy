import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' }, 
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const Test = createContext({
    value : "ggg"
})

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

// const ColorConsumer = ColorContext.Consumer 와 같은 의미 
const { Consumer : ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기 
export { ColorProvider, ColorConsumer, Test }

export default ColorContext;