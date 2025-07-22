import React, { useEffect, useState } from 'react';
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
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-line">TISHIFY</span>
            <span className="logo-line">DIGITAL SIMPLIFICATION</span>
          </div>
          <nav className="nav">
            <a href="#contacts" className="nav-link">CONTACTS</a>
          </nav>
          <div className="phone">@tishify</div>
        </div>
      </header>

      {/* Main Landing Section */}
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
          <div className="landing-title">Tishify</div>
          <div className="landing-subtitle">Your partner in digital simplification</div>
          <div className="landing-contact">
            <a href="#team" className="landing-btn">Meet Our Team</a>
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

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-content">
          <div className="services-left">
            <div className="services-visual">
              <div className="phone-screens">
                <div className="phone-screen screen-1">
                  <div className="screen-content">
                    <h4>Chat Bot Interface</h4>
                    <p>Did everything go well? (Yes/No)</p>
                    <p>Describe what problem you encountered?</p>
                    <div className="screen-buttons">
                      <button className="screen-btn">Everything is bad</button>
                    </div>
                  </div>
                </div>
                <div className="phone-screen screen-2">
                  <div className="screen-content">
                    <h4>Product Catalog</h4>
                    <p>Weight, g/m2: 100</p>
                    <p>Format: 72*104</p>
                    <p>Quantity: 1000</p>
                    <div className="screen-buttons">
                      <button className="screen-btn">To cart</button>
                      <button className="screen-btn">Cancel</button>
                    </div>
                  </div>
                </div>
                <div className="phone-screen screen-3">
                  <div className="screen-content">
                    <h4>Photo Contest</h4>
                    <p>Thank you! Wait until the photo is approved by the moderator.</p>
                    <div className="screen-buttons">
                      <button className="screen-btn">Main menu</button>
                      <button className="screen-btn">Vote</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animated-dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
                <div className="dot dot-4"></div>
                <div className="dot dot-5"></div>
              </div>
            </div>
          </div>
          <div className="services-right">
            <h2 className="services-title">Chat Bot Development</h2>
            <p className="services-description">
              We improve brand communication in messengers for clients.
            </p>
            <p className="services-description">
              Developers of different purposes for Telegram
            </p>
            <a href="#contact" className="services-btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section className="software-section">
        <div className="software-content">
          <div className="software-left">
            <div className="diagram-container">
              <div className="diagram">
                <div className="diagram-node project">PROJECT</div>
                <div className="diagram-level">
                  <div className="diagram-node">TECHNOLOGY</div>
                  <div className="diagram-node">INVESTMENTS</div>
                  <div className="diagram-node">MARKETING</div>
                </div>
                <div className="diagram-level">
                  <div className="diagram-node">FRONTEND</div>
                  <div className="diagram-node">BACKEND</div>
                  <div className="diagram-node">STRATEGY</div>
                </div>
                <div className="diagram-level">
                  <div className="diagram-node">JAVA</div>
                  <div className="diagram-node">DOCKER</div>
                </div>

              </div>
            </div>
          </div>
          <div className="software-right">
            <h2 className="software-title">Custom Software Development</h2>
            <p className="software-description">
              Our company develops software for business automation, internet projects, and startups.
            </p>
            <ul className="software-features">
              <li>Development of unique solutions</li>
              <li>Strict quality control</li>
              <li>Development of highload systems</li>
            </ul>
            <a href="#contact" className="software-btn">Learn More</a>
          </div>
        </div>
      </section>

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
          <div className="cta-spacing"></div>
          <a href="mailto:company@tishify.online" className="landing-btn cta-btn">Get in Touch</a>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section" id="team">
        <div className="section-content">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="member-photo">
                <img src={process.env.PUBLIC_URL + '/mykyta-photo.jpg'} alt="Mykyta Tishkin" />
              </div>
              <h3>Mykyta Tishkin</h3>
              <p className="member-role">CEO & Head of Operations</p>
              <p className="member-description">
                Overseeing all company operations and ensuring Tishify runs smoothly, from strategy to execution.
              </p>
              <div className="member-links">
                <a href="https://github.com/mykytatishkin" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mykyta-tishkin/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src={process.env.PUBLIC_URL + '/nurtay-photo.jpg'} alt="Nurtay Temirbayev" />
              </div>
              <h3>Nurtay Temirbayev</h3>
              <p className="member-role">CBO & Head of Sales</p>
              <p className="member-description">
                Driving business growth and building strategic partnerships to expand Tishify's reach.
              </p>
              <div className="member-links">
                <a href="https://www.linkedin.com/in/nurtay-temirbayev/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contacts">
        <div className="contact-content">
          <div className="contact-stats">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Own Services</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Client Services Under Support</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2025</div>
              <div className="stat-label">Company Foundation Year</div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-column">
              <h3>Contacts:</h3>
              <p>Email: company@tishify.online</p>
            </div>
            <div className="contact-column">
              <h3>About us:</h3>
              <p>Digital Transformation Specialists</p>
            </div>
          </div>
        </div>
      </section>

      <div className="landing-footer" id="contact">
        <div className="footer-content">
          <div>Contact us: <a href="mailto:company@tishify.online">company@tishify.online</a></div>
          <div>Telegram: <a href="https://t.me/tishify" target="_blank" rel="noopener noreferrer">@tishify</a></div>
          <div>CEO & Head: <a href="mailto:mykyta.tishkin@outlook.com">mykyta.tishkin@outlook.com</a></div>
          <div>CBO & Head of Sales: <a href="mailto:temirbayev.nurtay@gmail.com">temirbayev.nurtay@gmail.com</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
