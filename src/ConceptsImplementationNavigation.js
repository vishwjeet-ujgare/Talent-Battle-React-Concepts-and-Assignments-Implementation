import React from "react";
import { Link } from "react-router-dom";
function ConceptsImplementationNavigation() {
  return (
    <div>
      <nav>
        <ul>
          <h2>Concept Implementation</h2>
          <li>
            <Link to="/conceptImplementation">01 Add React to a Website</Link>
          </li>
          <li>
            <Link to="/ConceptsImplementation/introductionToJsx">02 Introduction To JSX</Link>
          </li>
          <li>
            <Link to="/ConceptsImplementation/renderingElement">03 Rendering Element</Link>
          </li>
          <li>
            <Link to="/ConceptsImplementation/ComponentsProps">04 Composing Components</Link>
          </li>
          <li>
            <Link to="/ConceptsImplementation/StateAndLifecycle">05 State and Lifecycle</Link>
          </li>

          <li>
            <Link to="/ConceptsImplementation/HandlingEvents">06 Handling Events</Link>
          </li>
          <li>
            <Link to="/ConceptsImplementation/ConditionalRendering">07 Conditional Rendering</Link>
          </li>
          <li>
            <Link to="/ConceptsImplementation/ListsAndKeys">08.Lists and Keys</Link>
          </li>

          <li>
            <Link to="/ConceptsImplementation/Forms">09.Forms</Link>
          </li>

          <li>
            <Link to="/ConceptsImplementation/LiftingStateUp">10. Lifting State Up</Link>
          </li>

          <li>
            <Link to="/ConceptsImplementation/CompositionVsInheritance">
              11. Composition vs Inheritance
            </Link>
          </li>

          <li>
            <Link to="/ConceptsImplementation/ThinkingInReact">12. Thinking In React</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ConceptsImplementationNavigation;
