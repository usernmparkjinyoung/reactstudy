import React from 'react'
import PropTypes from 'prop-types'

function PropComponent(props){
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name : "Jimmy"
}

PropComponent.propTypes = {
    name : PropTypes.string,
    age: PropTypes.number.isRequired
}

export default function Component() {
  return (
    <div>
        <PropComponent />
    </div>
  )
}
