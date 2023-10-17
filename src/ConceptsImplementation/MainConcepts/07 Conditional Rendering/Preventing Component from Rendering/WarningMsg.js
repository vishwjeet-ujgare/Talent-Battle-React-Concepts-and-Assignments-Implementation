import React from 'react'

function WarningMsg(props) {
  return (
    <div style={{color:"red"}}>
      {(props.isWarning?<h2>Warning...!</h2>:null)}
    </div>
  )
}

export default WarningMsg
