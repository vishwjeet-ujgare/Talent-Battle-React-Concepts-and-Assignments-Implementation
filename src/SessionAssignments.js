import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChangeText from "./SessionAssignments/ChangeText/ChangeTextButton";
import MiniCalculator from "./SessionAssignments/Mini Calculator/App"


function SessionAssignments() {
  return (
    <div>
      <Routes>
     
      <Route path="/changeText" element={<ChangeText />} />
      <Route path='/MiniCalculator' element={<MiniCalculator/>}/>
      </Routes>
    </div>
  )
}

export default SessionAssignments
