import React from 'react';


const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <p className="mb-0">Connect with me on:</p>
        <div>
          <a style={{ textDecoration: 'none' }} href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a style={{ textDecoration: 'none' }} href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a style={{ textDecoration: 'none' }} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a style={{ textDecoration: 'none' }} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <p className="mt-3 mb-0">&copy; 2025 Swati Patil. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
