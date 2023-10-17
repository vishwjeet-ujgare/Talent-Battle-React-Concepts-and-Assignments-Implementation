import React from "react";

function UniqueKeyAmongSiblings() {
  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  const sidebar = (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );

  const content = posts.map((post) => (
    <div>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      <div >{sidebar}</div>
      <div>{content}</div>
      <hr/>
      <div>
      Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:
      </div>
    </div>
  );
}

export default UniqueKeyAmongSiblings;
