import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./layout/Counter";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#020024] via-[#4b4b9a] to-[#ffffff] text-white">
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;