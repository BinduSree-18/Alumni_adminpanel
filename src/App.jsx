import React from 'react'
import Layout from './Components/Layout'
import { BrowserRouter as Router, Routes, Route } from "react-router";
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<Layout />} />
    </Routes>
   </Router>
  )
}

export default App
