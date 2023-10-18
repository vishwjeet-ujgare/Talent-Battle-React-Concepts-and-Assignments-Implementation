import React from 'react'
import { Link } from "react-router-dom";

function SessionAssignmentsNavigation() {
  return (
    <div>
      <nav>
      <ul>
        <h2>Session Assignment</h2>
  
        <li>
          <Link to="/changeText">01 ChangeText</Link>
        </li>
        <li>
          <Link to="/MiniCalculator">02 Mini Calculotor</Link>
        </li>
       
      </ul>
    </nav>
    </div>
  )
}

export default SessionAssignmentsNavigation

