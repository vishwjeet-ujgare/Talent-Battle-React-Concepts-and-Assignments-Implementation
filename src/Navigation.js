import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <h2>Session Assignment</h2>
        <li>
          <Link to="/changeText">ChangeText</Link>
        </li>
        {/* Add more links for other assignments */}
      </ul>

      <ul>
        <h2>Concept Implementation</h2>
        <li>
          <Link to="/conceptImplementation">01 Add React to a Website</Link>
        </li>
        <li>
          <Link to="/introductionToJsx">02 Introduction To JSX</Link>
        </li>
        <li>
          <Link to="/renderingElement">03 Rendering Element</Link>
        </li>
        <li>
          <Link to="/ComponentsProps">04 Composing Components</Link>
        </li>
        <li>
          <Link to="/StateAndLifecycle">05 State and Lifecycle</Link>
        </li>

        <li>
          <Link to="/HandlingEvents">06 Handling Events</Link>
        </li>
        <li>
          <Link to="/ConditionalRendering">07 Conditional Rendering</Link>
        </li>
        <li>
          <Link to="/ListsAndKeys">08.Lists and Keys</Link>
        </li>

        <li>
          <Link to="/Forms">09.Forms</Link>
        </li>
    
        <li>
          <Link to="/LiftingStateUp">10. Lifting State Up</Link>
        </li>

        <li>
          <Link to="/CompositionVsInheritance">11. Composition vs Inheritance</Link>
        </li>
        

        <li>
          <Link to="/ThinkingInReact">12. Thinking In React</Link>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navigation;
