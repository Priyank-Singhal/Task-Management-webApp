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
          <Route exact path='/Overview' element={<PrivateRoute/>}>
            <Route exact path='/Overview' element={<Projects/>}/>
          </Route>
          <Route exact path='/Stats' element={<PrivateRoute/>}>
            <Route exact path='/Stats' element={<Projects/>}/>
          </Route>
          <Route exact path='/Projects' element={<PrivateRoute/>}>
            <Route exact path='/Projects' element={<Projects/>}/>
          </Route>
          <Route exact path='/Chat' element={<PrivateRoute/>}>
            <Route exact path='/Chat' element={<Projects/>}/>
          </Route>
          <Route exact path='/Calender' element={<PrivateRoute/>}>
            <Route exact path='/Calender' element={<Projects/>}/>
          </Route>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;