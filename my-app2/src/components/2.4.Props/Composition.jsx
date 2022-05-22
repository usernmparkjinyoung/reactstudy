import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
        <Welcome name="Jimy" />
        <Welcome name="Jimy2" />
        <Welcome name="Jimy3" />
        <Welcome name="Jimy4" />
    </div>
  )
}
