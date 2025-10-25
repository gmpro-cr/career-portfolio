import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Gaurav Mahale</h1>
        <ul className="nav-list">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
