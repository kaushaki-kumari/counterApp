import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./layout/Counter";
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
    </Router>
  )
}

export default App;