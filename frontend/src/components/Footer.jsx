import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

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