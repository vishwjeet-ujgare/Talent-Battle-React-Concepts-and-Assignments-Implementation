import React from "react";

import ConceptsImplementationNavigation from "./ConceptsImplementationNavigation";
import SessionAssignmentsNavigation from "./SessionAssignmentsNavigation";

const Navigation = () => {
  return (
    <div>
      <SessionAssignmentsNavigation />
      <ConceptsImplementationNavigation />
    </div>
  );
};

export default Navigation;
