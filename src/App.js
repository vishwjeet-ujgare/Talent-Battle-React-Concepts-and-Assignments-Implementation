import React from "react";
import ConceptsImplementation from "./ConceptsImplementation";
import SessionAssignments from "./SessionAssignments";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/ConceptsImplementation/*" element={<ConceptsImplementation />} />
        <Route path="/SessionAssignments/*" element={<SessionAssignments/>} />
      </Routes>
    </div>
  );
};

export default App;
