import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom"   // ✅ moved import to the top
import logo from "../../assets/images/logo.png"
import "./footer.css"

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
              <a href="https://www.instagram.com/agarwal.vidu?igsh=MWI4d3Jvb2locmVvcQ==" className="social-link" aria-label="Instagram">
                <RiInstagramFill />
              </a>
              <a href="https://x.com/Vidushit143?t=QhDahpmDpE9ZuLXw0MujSA&s=08" className="social-link" aria-label="Twitter">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/vidushi-agarwal-8958-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="social-link" aria-label="LinkedIn">
                <AiFillLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/blogs">Blog</Link></li> {/* ✅ fixed path to match App.js */}
              <li><Link to="/shelter">Shelter</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/help">Help Center</Link></li>
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