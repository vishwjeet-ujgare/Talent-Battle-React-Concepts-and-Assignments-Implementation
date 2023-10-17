import React from "react";

function LogicalAndOperator() {
  const count = 4;
  const falsy=0;

  return (
    <div>
      <div>
        <h2>
          <mark>Inline If with Logical && Operator</mark>
        </h2>
        {count > 0 && (
          <p>
            <b>Count is Greater than 0 i.e {count}</b>
          </p>
        )}
      </div>
      <div>
        <p>
          Note that returning a falsy expression will still cause the element
          after && to be skipped but will return the falsy expression.
          <br /> In the example below, {"<div>0</div>"} will be returned by the
          render method.
        </p>
      </div>
      <div>{falsy && <b>Count is {count}</b>}</div>
    </div>
  );
}

export default LogicalAndOperator;
