import React from "react";

function EmbeddingExpressionInJSX() {
  const name = "Vishwjeet";

  const user = {
    firstName: "Vishwjeet",
    lastName: "Ujgare",
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  const element = (
    <div>
      <p>Hello , {formatName(user)}</p>
    </div>
  );

 
  return (
    <>
      <div>
        <a href="https://legacy.reactjs.org/docs/introducing-jsx.html">
          Read More ...
        </a>
        <h2>Embedding Expressions in JSX</h2>
      </div>

      <div>
        <p>My Name is {name}</p>
      </div>

      <div>{element}</div>
      
    </>
  );
  }

export default EmbeddingExpressionInJSX;
