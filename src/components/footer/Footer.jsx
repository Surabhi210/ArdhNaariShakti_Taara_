import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import logo from "../../assets/images/logo.png"
import "./footer.css"

import { NavLink } from "react-router-dom"

import { useNavigate } from 'react-router-dom';


function QuickLinks() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ul className="footer-links">
      <li onClick={() => handleClick('/')}>Home</li>
      <li onClick={() => handleClick('/jobs')}>Jobs</li>
      <li onClick={() => handleClick('/blogs')}>Blog</li>
      <li onClick={() => handleClick('/shelter')}>Shelter</li>
    </ul>
  );
}
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Taara Logo" />
              <h3>Taara</h3>
            </div>
            <p className="footer-description">
              Empowering women through technology, innovation, and community support. 
              Join us in creating a brighter future for all.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/agarwal.vidu?igsh=MWI4d3Jvb2locmVvcQ=="
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://x.com/Vidushit143?t=QhDahpmDpE9ZuLXw0MujSA&s=08"
                className="social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/vidushi-agarwal-8958-developer"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/jobs" className="nav-link">Jobs</NavLink></li>
              <li><NavLink to="/blogs" className="nav-link">Blog</NavLink></li>
              <li><NavLink to="/shelter" className="nav-link">Shelter</NavLink></li>
            </ul>
          </div>

         {/* Quick Links */}
<div className="footer-section">
  <h4>Quick Links</h4>
  <QuickLinks />
</div>


          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li><NavLink to="/privacy" className="nav-link">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="nav-link">Terms of Service</NavLink></li>
              <li><NavLink to="/help" className="nav-link">Help Center</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>hello@taara.org</span>
              </div>
              <div className="contact-item">
                <MdPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Taara. All rights reserved.</p>
            <p>Designed & Developed by Team Taara</p>
          </div>
        </div>
      </div>
    </footer>
  )
}