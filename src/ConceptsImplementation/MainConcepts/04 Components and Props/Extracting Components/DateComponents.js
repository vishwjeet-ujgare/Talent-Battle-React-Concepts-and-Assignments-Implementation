import React from 'react'

function DateComponents(props) {
  return (
    <div className='Comment-date"'>
      {props.date.toLocaleDateString()}
    </div>
  )
}

export default DateComponents
