import React from 'react'

export default function CustomDialog(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <h5>{props.description}</h5>
    </div>
  )
}
