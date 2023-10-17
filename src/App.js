import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import IntroductionToJsx from "./ConceptsImplementation/MainConcepts/02 Introduction to JSX/Index";
import ChangeText from "./SessionAssignments/ChangeText/ChangeTextButton";
import TickingClock from "./ConceptsImplementation/MainConcepts/03 Rendering Elements/TickingClock";
import ComponentsProps from "./ConceptsImplementation/MainConcepts/04 Components and Props/App";
import StateAndLifecycle from "./ConceptsImplementation/MainConcepts/05  State and Lifecycle/App";
import HandlingEvent from "./ConceptsImplementation/MainConcepts/06 Handling Events/App";
import ConditionalRendering from "./ConceptsImplementation/MainConcepts/07 Conditional Rendering/App";
import ListsAndKeys from "./ConceptsImplementation/MainConcepts/08. Lists and Keys/App";
import Forms from "./ConceptsImplementation/MainConcepts/09. Forms/App"
import LiftingStatUp from "./ConceptsImplementation/MainConcepts/10  Lifting State Up/App";
import CompositionVsInheritance from "./ConceptsImplementation/MainConcepts/11 Composition vs Inheritance/App"
import ThinkingInReact from "./ConceptsImplementation/MainConcepts/12. Thinking In React/App"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/changeText" element={<ChangeText />} />
        <Route path="/" element={<Navigation />} />
        <Route path="/introductionToJsx" element={<IntroductionToJsx />} />
        <Route path="renderingElement" element={<TickingClock />} />
        <Route path="ComponentsProps" element={<ComponentsProps />} />
        <Route path="/StateAndLifecycle" element={<StateAndLifecycle />} />
        <Route path="/HandlingEvents" element={<HandlingEvent />} />
        <Route
          path="/ConditionalRendering"
          element={<ConditionalRendering />}
        />
        <Route path="/ListsAndKeys" element={<ListsAndKeys />} />
        <Route path="/Forms" element={<Forms/>}/>
       <Route path ="/LiftingStateUp" element={<LiftingStatUp/>}/>
       <Route path ="/CompositionVsInheritance" element={<CompositionVsInheritance/>}/>
       <Route path="/ThinkingInReact" element={<ThinkingInReact/>}/>
      </Routes>
    </div>
  );
};

export default App;
