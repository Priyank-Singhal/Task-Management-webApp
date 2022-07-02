import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;