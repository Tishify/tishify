import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallax(scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-root">
      <div className="landing-main">
        <div className="landing-left">
          <div
            className="landing-left-inner"
            style={{
              transform: `translateY(${parallax * 0.5}px)`,
              transition: 'transform 0.1s',
            }}
          >
            <div className="landing-big">We</div>
            <div className="landing-big">Simplify.</div>
          </div>
        </div>
        <div className="landing-center">
          <img src={logo} className="landing-logo" alt="Tishify logo" />
          <div className="landing-title">Tishify</div>
          <div className="landing-subtitle">Your partner in digital simplification</div>
          <div className="landing-contact">
            <a href="#contact" className="landing-btn">Contact Us</a>
          </div>
        </div>
        <div className="landing-right landing-right-parallax">
          <div
            className="yougrow-parallax-bg"
            style={{
              transform: `translateY(${-parallax * 0.5}px)`,
              transition: 'transform 0.1s',
            }}
          >
            <div className="landing-big yougrow-text">You</div>
            <div className="landing-big yougrow-text">Grow.</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="section about-section">
        <div className="section-content">
          <h2>About Us</h2>
          <p>
            Tishify is dedicated to making technology simple and accessible. Our mission is to help businesses streamline their digital presence, automate processes, and focus on what matters most: growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="section-content">
          <h2>Our Services</h2>
          <ul className="services-list">
            <li>Custom Web & Mobile Development</li>
            <li>Business Process Automation</li>
            <li>UI/UX Design & Branding</li>
            <li>Cloud Solutions & Integrations</li>
            <li>Consulting & Support</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="section-content">
          <h2>Ready to Simplify Your Business?</h2>
          <a href="#contact" className="landing-btn cta-btn">Get in Touch</a>
        </div>
      </section>

      <div className="landing-footer" id="contact">
        <div className="footer-content">
          <div>Contact us: <a href="mailto:info@tishify.com">info@tishify.com</a></div>
          <div>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
