import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Creators from './pages/Creators';
import BrandSignup from './pages/BrandSignup';
import CreatorSignup from './pages/CreatorSignup';
import BrandDashboard from './pages/BrandDashboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard/brand" element={<BrandDashboard />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
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
          <Route path="/signup/brand" element={<BrandSignup />} />
          <Route path="/signup/creator" element={<CreatorSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;