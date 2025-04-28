import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-light border-end p-3" style={{ width: '220px' }}>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <NavLink to="/" className="nav-link" activeclassname="active">🏠 Home</NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink to="/course-details" className="nav-link" activeclassname="active">📚 Course Details</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact-us" className="nav-link" activeclassname="active">📞 Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;