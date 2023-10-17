import React from "react";

function PreventDefault() {
   const handleForm=(e)=>
    {
        e.preventDefault();
        console.log("preventDefault method preventing form from submiting form")
    }


  return (
    <div>
        <h2><mark>prevent default behavior in React for form. </mark></h2>
      <div>
        <form action="/" method="get" onSubmit={handleForm}>
          <div className="inputField">
            <label>Enter Value</label>
            <input type="text" />
          </div>

          <div>
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PreventDefault;
