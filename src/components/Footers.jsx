import React from "react";


export default function Footers() {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <p className="footer-text">&copy; 2024 Company, Inc</p>

        <a href="/" className="footer-logo">
          
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>

        <ul className="footer-nav">
          <li className="footer-item">
            <a href="#" className="footer-link">Home</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">Features</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">Pricing</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">FAQs</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">About</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}