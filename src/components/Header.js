import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container">
        <h1 className="text-center">My Portfolio</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link  className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-white" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-white" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-white" to="/journey">Journey</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-white" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
