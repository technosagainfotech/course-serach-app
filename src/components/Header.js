import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'; 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#034f84' }}>
      <div className="container-fluid px-4">
        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top me-2" />
        </Link>

        {/* Center: App Name or Title */}
        <div className="mx-auto">
          <span className="navbar-text h4 mb-0 text-white fw-bold">
            Create 'n' Learn Course Portal
          </span>
        </div>

        {/* Right: Help & Login Buttons */}
        <div className="d-flex align-items-center">
          <Link to="/contact-us" className="btn btn-outline-light me-2">Help</Link>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

