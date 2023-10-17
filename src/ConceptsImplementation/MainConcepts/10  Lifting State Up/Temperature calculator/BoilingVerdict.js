import React from 'react'

 function BoilingVerdict(props) {
  return (
    <div>
     { props.celcius>=100?<h3>The water would boil.</h3>:<h3>The water would'nt boil.</h3>}
    </div>
  )
}
export default BoilingVerdict;