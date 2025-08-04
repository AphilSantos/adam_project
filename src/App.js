import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Creators from './pages/Creators';
import Waitlist from './pages/Waitlist';
import BrandSignup from './pages/BrandSignup';
import CreatorSignup from './pages/CreatorSignup';
import BrandDashboard from './pages/BrandDashboard';
import CreatorDashboard from './pages/CreatorDashboard';
import Footer from './components/Footer';
import WaitlistButtonHandler from './components/WaitlistButtonHandler';
import './App.css';

function App() {
  return (
    <Router>
      <WaitlistButtonHandler>
        <div className="App">
          <Routes>
            <Route path="/dashboard/brand" element={<BrandDashboard />} />
            <Route path="/dashboard/creator" element={<CreatorDashboard />} />
            <Route path="/" element={
              <>
                <Navbar />
                <Waitlist />
                <Footer />
              </>
            } />
            <Route path="/brand" element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            } />
            <Route path="/creator" element={
              <>
                <Navbar />
                <Creators />
                <Footer />
              </>
            } />
            <Route path="/creators" element={
              <>
                <Navbar />
                <Creators />
                <Footer />
              </>
            } />
            <Route path="/waitlist" element={
              <>
                <Navbar />
                <Waitlist />
                <Footer />
              </>
            } />
            <Route path="/signup/brand" element={<BrandSignup />} />
            <Route path="/signup/creator" element={<CreatorSignup />} />
          </Routes>
        </div>
      </WaitlistButtonHandler>
    </Router>
  );
}

export default App;