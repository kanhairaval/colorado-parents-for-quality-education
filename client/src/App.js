import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GetInvolved from "./components/GetInvolved";

function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/AboutUs" Component={AboutUs}/>
          <Route path="/GetInvolved" Component={GetInvolved}/>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;