import React, { useContext } from "react";
import ColorContext, { Test } from "../contexts/color";

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    const { value } = useContext(Test);
    return (
        <>
            <div style={{
                width: '64px',
                height: '64px',
                background: state.color
            }}
            />
            <div>{value}</div> 
            <div style={{
                width: '32px',
                height: '32px',
                background: state.subcolor
            }}
            />
        </>
    )
}

export default ColorBox;