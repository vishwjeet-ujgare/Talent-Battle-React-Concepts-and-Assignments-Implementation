import React from "react";
import './JSXRepresentsObjects.css'

function JSXRepresentsObjects() {
  const jsxElement = (
    <div>
      <p className="heading">This is a jsx representation</p>
    </div>
  );

  const babelElement = React.createElement(
    "div",
    null,
    React.createElement("p", {className:"heading"}, " this is a babel representation")
  );

  const babelObjEle= {
        type: 'p',
        props: {
          className: 'heading',
          children: 'Representation of elemetn using object '
        }
      };
      const babelElementFromObj = React.createElement(babelObjEle.type, babelObjEle.props);
  return (
    <div>
      <div>
        <h2>JSX Represents Objects</h2>
        <p>Babel compiles JSX down to React.createElement() calls.</p>
      </div>

      {jsxElement}
      {babelElement}
      {babelElementFromObj}
    
    </div>
  );
}

export default JSXRepresentsObjects;
