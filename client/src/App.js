import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios"; // Import Axios for making HTTP requests
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import CareProgramApplication from "./components/CareProgramApplication";
import DonationSuccess from './components/DonationSuccess';

function App() {
  // Function to handle form submission for Care Program Application
  const submitCareApplication = async (formData) => {
    try {
      const response = await axios.post('/api/careApplication', formData);
      console.log(response.data); // Log the response from the server
      // Redirect or handle success state as needed
    } catch (error) {
      console.error('Error submitting care application:', error);
      // Handle error state
    }
  };

  // Function to handle form submission for Donation
  const submitDonation = async (formData) => {
    try {
      const response = await axios.post('/api/donation', formData);
      console.log(response.data); // Log the response from the server
      // Redirect or handle success state as needed
    } catch (error) {
      console.error('Error submitting donation:', error);
      // Handle error state
    }
  };

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