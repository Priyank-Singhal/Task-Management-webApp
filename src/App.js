import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/overview" element={<Projects />} />
        <Route exact path="/stats" element={<Projects />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/chat" element={<Projects />} />
        <Route exact path="/calender" element={<Projects />} />
      </Routes> */}
      {/* {user ? <Projects /> : <Home /> } */}
      <Projects />
      
    </div>
  );
}

export default App;