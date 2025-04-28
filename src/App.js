// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';

const App = () => {
  return (
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="d-flex flex-grow-1">
          <Sidebar />

          <main className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/course-details" element={<CourseDetails />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/login" element={<Login />} /> 
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
  );
};

export default App;
