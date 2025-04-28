import React from 'react';
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-1">
      <div className="container text-center">
        <div className="row">
          {/* Section 1: Real-time Video Classes */}
          <div className="col-sm-3 mb-3">
            <i className="fa fa-child fa-2x"></i>
            <p className="mt-2">Real-time video classes</p>
          </div>

          {/* Section 2: Top-quality Educators */}
          <div className="col-sm-3 mb-3">
            <i className="fa fa-users fa-2x"></i>
            <p className="mt-2">Top-quality educators</p>
          </div>

          {/* Section 3: Adaptable Learning Methods */}
          <div className="col-sm-3 mb-3">
            <i className="fa fa-cogs fa-2x"></i>
            <p className="mt-2">Adaptable learning methods</p>
          </div>

          {/* Section 4: Designed for Learners Aged 3-18 */}
          <div className="col-sm-3 mb-3">
            <i className="fa fa-child fa-2x"></i>
            <p className="mt-2">Designed for learners aged 3 to 18</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
