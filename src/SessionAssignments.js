import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChangeText from "./SessionAssignments/ChangeText/ChangeTextButton";
import MiniCalculator from "./SessionAssignments/Mini Calculator/App"
import Navigation from './Navigation';



function SessionAssignments() {
  return (

      <Routes>
 
      <Route path="/changeText" element={<ChangeText />} />
      <Route path='/MiniCalculator' element={<MiniCalculator/>}/>


      </Routes>
 
  )
}

export default SessionAssignments
