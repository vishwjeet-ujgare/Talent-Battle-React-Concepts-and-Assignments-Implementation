import React from 'react'
import IfCondition from './IfCondition/IfCondition'
import Greeting from './IfCondition/Greeting'
import LoginControl from './Element Variables/LoginControl '
import LogicalAndOperator from './LogicalAndOperator'
import PreventComRendering from './Preventing Component from Rendering/PreventComRendering'

function App() {
  return (
    <div>

<div>
  <a href='https://legacy.reactjs.org/docs/conditional-rendering.html'>7. Conditional Rendering</a>
</div>
<br/>
      <IfCondition/>
      <hr />
      
      <h2><mark>Without State</mark></h2>
      <Greeting isLogin={true}/>
      <hr />
      <LoginControl/>
      <hr />
      <LogicalAndOperator/>
      <hr />
      <PreventComRendering/>
    </div>
  )
}

export default App
