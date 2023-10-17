import React from "react";



function TickingClock() {
    // This function directly manipulates the DOM
    function updateClock() {
      const timeElement = document.getElementById("time");
      if (timeElement) {
        timeElement.innerText = new Date().toLocaleTimeString();
      }
    }
  
    // Call the updateClock function every second
    setInterval(updateClock, 1000);
  
    return (
      <div>
        <div>
          <a href="https://legacy.reactjs.org/docs/rendering-elements.html">3. Rendering Elements</a>
        </div>
        <p>
        Keep in mind that manipulating the DOM directly like this is not the React way, and it may lead to issues with React's internal reconciliation mechanism.<br/> If you are working with React, it's usually better to embrace the React state and effect model for managing dynamic content and updates.

        </p>
        <h2>Ticking Clock</h2>
        <h3 id="time">Current Time: </h3>
      </div>
    );
  }
  

export default TickingClock;
