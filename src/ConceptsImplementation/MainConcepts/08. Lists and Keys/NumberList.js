import React from "react";

//When you run this code, you’ll be given a warning that a key should be provided for list items.
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => <li>{number}</li>);
//   return <ul>{listItems}</ul>;
// }

function NumberList() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const todos = [
    { id: 1, text: "playing" },
    { id: 2, text: "Music class" },
    { id: 3, text: "Talent Battle Lecture" },
  ];
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  const todoItems = todos.map((todo) => (
    <li key={todo.id}>
      {todo.id}: {todo.text}
    </li>
  ));

  const todoIndexItems = todos.map((todo, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>
      {index}: {todo.text}
    </li>
  ));

  return (
    <div>
      <h2>Keys</h2>
      <div>
        <h4>
          <mark>number.toString()</mark>
        </h4>
        <ul>{listItems}</ul>;
      </div>

      <div>
        <h4>
          The best way to pick a key is to use a string that uniquely identifies
          a list item among its siblings.
          <br />
          <mark> Most often you would use IDs from your data as keys:</mark>
        </h4>

        <ul>{todoItems}</ul>
      </div>

      <div>
        <h4>
          When you don’t have stable IDs for rendered items, you may use the
          item <mark>index</mark> as a key as a last resort:
        </h4>
        <ul>{todoIndexItems}</ul>
      </div>
    </div>
  );
}

export default NumberList;
