import React from "react";
import Contacts from "./Contact";
import Chat from "./Chat";
import SplitPane from "./SplitPane";
import './Page.css'

function Page() {
  return (
    <div className="page">
        <mark>
        React elements like Contacts  and Chatare just objects, so you can pass them as props like any other data. This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.
        </mark>

      <SplitPane left={<Contacts/>} right={<Chat/>} />
      </div>
  );
}

export default Page;
