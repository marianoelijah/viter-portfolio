import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/partials/frontend/Main';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Main/>}/>
      </Routes>
    </Router>
  )
}

export default App