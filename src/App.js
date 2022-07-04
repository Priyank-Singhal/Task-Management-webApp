import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./contexts/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          {/* <PrivateRoute exact path="/overview" element={<Projects />} /> */}
          <Route exact path='/Projects' element={<PrivateRoute/>}>
            <Route exact path='/Projects' element={<Projects/>}/>
          </Route>
          {/* <PrivateRoute exact path="/stats" element={<Projects />} />
          <PrivateRoute exact path="/projects" element={<Projects />} />
          <PrivateRoute exact path="/chat" element={<Projects />} />
          <PrivateRoute exact path="/calender" element={<Projects />} /> */}
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* <Home /> */}
      </AuthProvider>
    </div>
  );
}

export default App;