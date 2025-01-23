import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import MakePayment from './pages/MakePayment';
import Track from './pages/Track';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar';
import Painting from './pages/Painting';

function App() {
 

  return (
    <div className="overflow-x-hidden">
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Conditionally render Navbar */}
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route path="/about" element={<About />} />
              <Route path="/painting" element={<Painting />} />
              <Route path="/payment" element={<MakePayment />} />
              <Route path="/track" element={<Track />} />
              <Route path="/contact" element={<ContactUs />} />

              {/* Admin Route */}
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
