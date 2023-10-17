import React from 'react';

function WebsiteEmbed() {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const width = screenWidth - 20; // Adjust for padding or margins
    const height = screenHeight - 20; // Adjust for padding or margins

  return (
    <div>
        <div>
            <a href='https://legacy.reactjs.org/docs/thinking-in-react.html'>12. Thinking In React</a>
        </div>
        <br/>
      <iframe
        src="https://legacy.reactjs.org/docs/thinking-in-react.html" // Replace with the URL of the website you want to embed
        title="Embedded Website"
        width={width}
        height={height}
      />
    </div>
  );
}

export default WebsiteEmbed;
