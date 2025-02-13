import React from 'react'
import Layout from './Components/Layout'
import Upload from './uploadimage/Upload';
import { BrowserRouter as Router, Routes, Route } from "react-router";
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/upload" element={<Upload/>} />
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<Layout />} />
    </Routes>
   </Router>
  )
}

export default App
