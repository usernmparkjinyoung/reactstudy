import React from 'react'
import withLoading from './withLoading';

/* 
export default function Input() {
  return (
    <>
        <input defaultValue="Input" />
    </>
  )
}
*/ 

function Input(){
    return <input defaultValue="Input" />;
}

export default withLoading(Input);