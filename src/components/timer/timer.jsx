import React from 'react'
import "./timer.css"
const Timer = ({time}) => {
  return (
    <div className='time'>
      <h3>{time}</h3>
    </div>
  )
}

export default Timer