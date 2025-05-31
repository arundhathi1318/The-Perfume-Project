import React from 'react';
import './Footer.css'; // We'll create this for styling

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {currentYear} Olcademy Perfumes/A Perfume Brand. All Rights Reserved.</p>
        <p className="powered-by">
          Powered by Naga Arundhathi
        </p>
      </div>
    </footer>
  );
};

export default Footer;