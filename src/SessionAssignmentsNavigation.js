import React from 'react'
import { Link } from "react-router-dom";

function SessionAssignmentsNavigation() {
  return (
    <div>
      <nav>
      <ul>
        <h2>Session Assignment</h2>
        <li>
          <Link to="/changeText">ChangeText</Link>
        </li>
        {/* Add more links for other assignments */}
      </ul>
    </nav>
    </div>
  )
}

export default SessionAssignmentsNavigation

