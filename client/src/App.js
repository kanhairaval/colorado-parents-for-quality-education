import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import CareProgramApplication from "./components/CareProgramApplication";
import DonationSuccess from './components/DonationSuccess';

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
          <Route path="/DonationSuccess" Component={DonationSuccess}/>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;