import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Gaurav Mahale</h3>
            <p>Finance Professional specializing in Corporate Banking, Asset Reconstruction, and Product Management</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-links">
              <li><a href="mailto:mahalegaurav.k@gmail.com">mahalegaurav.k@gmail.com</a></li>
              <li><a href="tel:+919923540336">+91 9923540336</a></li>
              <li>Maharashtra, India</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Certifications</h4>
            <ul className="certifications">
              <li>LinkedIn Product Management</li>
              <li>Technical Product Management</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Gaurav Mahale. All rights reserved.</p>
          <p>Built with React.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
