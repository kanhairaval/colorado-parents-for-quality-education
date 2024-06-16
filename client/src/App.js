import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import CareProgramApplication from "./components/CareProgramApplication";

function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/AboutUs" Component={AboutUs}/>
          <Route path="/GetInvolved" Component={GetInvolved}/>
          <Route path="/Donate" Component={Donate}/>
          <Route path="/CareProgramApplication" Component={CareProgramApplication}/>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;