import React from 'react'
function Parent() {
  return (
    <div>
        <div>
            <h2><mark> using children:</mark></h2>
        </div>
       <Children>
      <h1>Welcome to Talent Battle</h1>
      <p>My name is Vishwjeet Ujgare</p>
      <p>college name : JSPM College </p>
      <p>
        <b>Qualification</b>
        <br/>
        BCA-2021
        <br />
        MCA -2023{" "}
      </p>
      </Children>
    </div>
  )
}

function Children(props) {
  return (
    <div>
     {props.children}
    </div>
  );
}

export default Parent
