import React from "react";

function NormalCommentApp(props) {
  return (
    <div className="comment">
      <h3>
        <mark>Normal way without achiving Component Extraction</mark>
      </h3>
      <div className="userInfo">
        <div className="avtar">
          <img src={props.author.srcUrl} alt={props.author.name} />
        </div>
        <div className="userInfor-name">{props.author.name}</div>
      </div>

      <div className="comment-text">{props.text}</div>

      <div className="date">{props.date.toLocaleDateString()}</div>
    </div>
  );
}

export default NormalCommentApp;
