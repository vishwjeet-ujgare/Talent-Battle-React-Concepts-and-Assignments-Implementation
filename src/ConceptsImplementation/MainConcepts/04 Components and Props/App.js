import React from "react";
import ComposingComponents from "./ComposingComponents";
import NormalCommentApp from "./Extracting Components/NormalCommentApp";
import imgUrl from "./Extracting Components/avtarImg.png";
import WithExtractionApp from "./Extracting Components/WithExtractionApp";
function App() {
  const commentData = {
    author: {
      srcUrl: imgUrl,
      name: "John Doe",
    },
    text: "This is a comment text.",
    date: new Date(),
  };
  return (
    <>
      <div>
        <a href="https://legacy.reactjs.org/docs/components-and-props.html">
          4. Components and Props
        </a>
      </div>
      <br />
      <ComposingComponents />
      <NormalCommentApp {...commentData} />
      {/* <NormalCommentApp author={commentData.author} text={commentData.text} date={commentData.date} /> */}
      <WithExtractionApp />
    </>
  );
}

export default App;
