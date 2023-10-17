import React from "react";
import UserInfo from "./UserInfo";
import srcUrl from "./avtarImg.png"
import CommentText from "./CommentText";
import DateComponents from "./DateComponents";
function WithExtractionApp() {
  return (
    <div>
      <div>
        <mark>
          <h2> Way To achiving Component Extraction</h2>
          <p>Don’t be afraid to split components into smaller components.</p>
        </mark>
      </div>

<div>
    <h1>Example 1</h1>
    <UserInfo user={{name:"rohit" , srcUrl:srcUrl}} />
    <CommentText text="here is my commnet from isolated comment component"/>
    <DateComponents date={new Date()}/>
</div>

<div>
    <h1>Example 2</h1>
<UserInfo user={{name:"jeet" , srcUrl:srcUrl}} />
    <CommentText text="here is my second comment from isolated comment component"/>
    <DateComponents date={new Date()}/>   
</div>

    </div>
  );
}

export default WithExtractionApp;
