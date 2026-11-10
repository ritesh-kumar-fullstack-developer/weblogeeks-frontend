import './App.css';
import { Header } from './components';

function App() {
  return (
    <div> 
      <Header />
      <main>
      <section className="hero" id="home">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">DIGITAL TECHNOLOGY PARTNER</div>

            <h1>
              We Build Digital <span>Solutions</span> That Drive Business Growth
            </h1>

            <p>
              WEBLOGEEKS is a software development company delivering
              innovative web, mobile and desktop solutions that help
              businesses scale in the digital world.
            </p>

            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Explore Services <span>→</span></a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
            </div>

            <div className="hero-stats">
              <div><strong>10+</strong><span>Years Experience</span></div>
              <div><strong>100+</strong><span>Projects Delivered</span></div>
              <div><strong>24/7</strong><span>Support</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-a"></div>
            <div className="orb orb-b"></div>
            <div className="network network-a"></div>

            <div className="laptop">
              <div className="laptop-screen">
                <div className="screen-top">
                  <span className="screen-dot"></span>
                  <span className="screen-dot"></span>
                  <span className="screen-dot"></span>
                  <span className="screen-url">weblogeeks.com/dashboard</span>
                </div>
                <div className="dashboard">
                  <aside className="dash-side">
                    <div className="mini-logo">W</div>
                    <span className="dash-active"></span><span></span><span></span><span></span><span></span>
                  </aside>
                  <div className="dash-main">
                    <div className="dash-heading">
                      <div>
                        <small>OVERVIEW</small>
                        <h3>Business Analytics</h3>
                      </div>
                      <div className="dash-pill">2026</div>
                    </div>
                    <div className="dash-cards">
                      <div><small>Revenue</small><b>$84.6K</b><em>+18.4%</em></div>
                      <div><small>Customers</small><b>12,840</b><em>+12.1%</em></div>
                      <div><small>Projects</small><b>184</b><em>+8.7%</em></div>
                    </div>
                    <div className="chart">
                      <div className="chart-line"></div>
                      <i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="laptop-base"></div>
            </div>
          </div>
        </div>

        <div className="container trusted">
          <span>TRUSTED TECHNOLOGIES</span>
          <div className="tech-list">
            <b>Microsoft</b><b>Google</b><b>AWS</b><b>DigitalOcean</b><b>Oracle</b>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHAT WE DO</div>
            <h2>Our <span>Services</span></h2>
            <p>End-to-end digital solutions tailored to your business needs.</p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="icon-box">⌘</div>
              <h3>Web Development</h3>
              <p>Modern, responsive and high-performance websites built with reliable technologies.</p>
              <a href="#contact">Learn More <span>→</span></a>
            </article>

            <article className="service-card">
              <div className="icon-box">▣</div>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform mobile applications for Android and iOS.</p>
              <a href="#contact">Learn More <span>→</span></a>
            </article>

            <article className="service-card">
              <div className="icon-box">▤</div>
              <h3>Desktop Software</h3>
              <p>Robust and scalable desktop applications designed for Windows environments.</p>
              <a href="#contact">Learn More <span>→</span></a>
            </article>

            <article className="service-card">
              <div className="icon-box">✦</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful and intuitive interfaces designed around real user experiences.</p>
              <a href="#contact">Learn More <span>→</span></a>
            </article>
          </div>
        </div>
      </section>

      
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="office-card">
              <div className="office-top">WEBLOGEEKS <span>● ● ●</span></div>
              <div className="office-room">
                <div className="room-screen">WEBLOGEEKS<br /><small>WEB BLOG GEEKS</small></div>
                <div className="desk desk-one"></div>
                <div className="desk desk-two"></div>
                <div className="person person-one"></div>
                <div className="person person-two"></div>
                <div className="person person-three"></div>
              </div>
            </div>
            <div className="experience-badge"><strong>10+</strong><span>Years of<br />Experience</span></div>
          </div>

          <div className="about-content">
            <div className="eyebrow">ABOUT US</div>
            <h2>Technology That <span>Works For Your Business</span></h2>
            <p>
              At WEBLOGEEKS, we are passionate about technology and innovation.
              Our team of experienced developers and designers creates high-quality
              digital solutions focused on measurable business results.
            </p>

            <ul className="check-list">
              <li>10+ Years of Experience</li>
              <li>100+ Successful Projects</li>
              <li>Client-Centric Approach</li>
              <li>Quality & Timely Delivery</li>
            </ul>

            <a href="#contact" className="btn btn-primary">More About Us</a>
          </div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">SOLUTIONS</div>
            <h2>Industry-Focused <span>Solutions</span></h2>
            <p>We build software that solves real-world business problems.</p>
          </div>

          <div className="industry-grid">
            <div className="industry-card"><span>🛒</span><b>E-Commerce</b></div>
            <div className="industry-card"><span>♡</span><b>Healthcare</b></div>
            <div className="industry-card"><span>⌂</span><b>Education</b></div>
            <div className="industry-card"><span>▥</span><b>Real Estate</b></div>
            <div className="industry-card"><span>▣</span><b>Logistics</b></div>
            <div className="industry-card"><span>▤</span><b>Finance</b></div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR PROJECTS</div>
            <h2>Featured <span>Projects</span></h2>
            <p>A selection of digital products and solutions we've built.</p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-image project-ecommerce">
                <div className="mock-window">
                  <span></span><span></span><span></span>
                  <div className="mock-content"></div>
                </div>
              </div>
              <div className="project-info"><h3>E-Commerce Platform</h3><small>Web Development</small></div>
            </article>

            <article className="project-card">
              <div className="project-image project-health">
                <div className="mock-window">
                  <span></span><span></span><span></span>
                  <div className="mock-content rows"></div>
                </div>
              </div>
              <div className="project-info"><h3>Healthcare Management</h3><small>Web Application</small></div>
            </article>

            <article className="project-card">
              <div className="project-image project-logistics">
                <div className="mock-window">
                  <span></span><span></span><span></span>
                  <div className="mock-content graph"></div>
                </div>
              </div>
              <div className="project-info"><h3>Logistics Tracking System</h3><small>Web Application</small></div>
            </article>

            <article className="project-card">
              <div className="project-image project-finance">
                <div className="mock-window">
                  <span></span><span></span><span></span>
                  <div className="mock-content finance"></div>
                </div>
              </div>
              <div className="project-info"><h3>Finance Dashboard</h3><small>Business Software</small></div>
            </article>
          </div>

          <div className="center-btn"><a href="#contact" className="btn btn-outline">View All Projects</a></div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHY CHOOSE US</div>
            <h2>Why Businesses Choose <span>WEBLOGEEKS</span></h2>
            <p>We don't just build software — we build long-term partnerships.</p>
          </div>

          <div className="why-grid">
            <article><div className="why-icon">✦</div><h3>Innovative Solutions</h3><p>We use modern technologies to deliver practical and scalable solutions.</p></article>
            <article><div className="why-icon">♙</div><h3>Experienced Team</h3><p>Our team brings deep development experience across multiple domains.</p></article>
            <article><div className="why-icon">◈</div><h3>Agile Approach</h3><p>Flexible development processes keep projects moving quickly and efficiently.</p></article>
            <article><div className="why-icon">⚙</div><h3>Support & Maintenance</h3><p>Reliable post-launch support keeps your software running smoothly.</p></article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <div className="eyebrow">READY TO START?</div>
            <h2>Let's Build Something <span>Amazing Together.</span></h2>
            <p>Have a project in mind? Let's discuss how WEBLOGEEKS can help you achieve your goals.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Start Your Project →</a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">GET IN TOUCH</div>
            <h2>Let's Talk About <span>Your Project</span></h2>
            <p>Tell us what you're building and we'll help turn your idea into a reliable digital product.</p>

            <div className="contact-details">
              <div><span>☎</span><div><small>CALL US</small><b>+91 98765 43210</b></div></div>
              <div><span>✉</span><div><small>EMAIL</small><b>hello@weblogeeks.com</b></div></div>
              <div><span>⌖</span><div><small>LOCATION</small><b>New Delhi, India</b></div></div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea rows="6" placeholder="Tell us about your project..." required></textarea>
            <button type="submit" className="btn btn-primary">Send Message →</button>
          </form>
        </div>
      </section>

      </main>
    </div>
    
  );
}

export default App;
