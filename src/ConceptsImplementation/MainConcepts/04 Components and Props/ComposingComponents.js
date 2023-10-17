import React from "react";

function Welcome(props) {
  return <h3>Welcome to Talent Battle , {props.name}</h3>;
}

function ComposingComponents() {
  return (
    <div>
      <h2><mark>Composing Components</mark></h2>
      <p>
        <b>Components can refer to other components in their output.</b>
      </p>
      <Welcome name="Vishwjeet" />
      <Welcome name="Sujal" />
      <Welcome name="Sadhana" />
      <Welcome name="Rohit Sir" />
    </div>
  );
}

export default ComposingComponents;
