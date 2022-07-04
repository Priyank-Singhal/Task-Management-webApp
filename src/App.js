import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/overview" element={<Projects />} />
          <Route exact path="/stats" element={<Projects />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/chat" element={<Projects />} />
          <Route exact path="/calender" element={<Projects />} />
        </Routes>
        {/* <Home /> */}
      </AuthProvider>
    </Router>
  );
}

export default App;