import React, { Children } from 'react'
import Parent from './ChildrenPropsExample/Parent'
import Page from './OwnConvention/Page'
import Welcome from './Specialization/Welcome'
function app() {
  return (
    <div>


<div>
  <a href='https://legacy.reactjs.org/docs/composition-vs-inheritance.html'>11. Composition vs Inheritance</a>
</div>
<br/>


    <Parent/>
    <Page/>

  
    <div>
    <Welcome/>
    </div>
    </div>
  )
}

export default app
