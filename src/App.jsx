import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/NavBar/Navbar';
import WelcomeScreen from './Pages/WelcomeScreen/WelcomeScreen';
import DonationForm from './Pages/DonationForm/DonationForm';
import AboutUs from './Pages/AboutUs/AboutUs';
import ThankYou from './Pages/ThankYou/Thankyou';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;