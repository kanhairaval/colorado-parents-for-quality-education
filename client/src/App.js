import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" Component={Home}/>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;