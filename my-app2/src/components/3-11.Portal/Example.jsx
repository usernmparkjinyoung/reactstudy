import React from 'react'
import { createPortal } from 'react-dom'
import ThankyouDialog from './ThankyouDialog'

const Portal = (props) => {
    return createPortal(props.children, document.getElementById("portal"));
}

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
        <Portal >
            <ThankyouDialog />
        </Portal>
        <div style={{ position: "absolute" }}>
            <button>히히히</button>
        </div>
    </div>
  )
}
