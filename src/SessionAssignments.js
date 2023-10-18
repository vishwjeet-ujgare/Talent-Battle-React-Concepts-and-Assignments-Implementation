import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChangeText from "./SessionAssignments/ChangeText/ChangeTextButton";
function SessionAssignments() {
  return (
    <div>
      <Routes>
      <Route path="/changeText" element={<ChangeText />} />
      </Routes>
    </div>
  )
}

export default SessionAssignments
