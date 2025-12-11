import "./App.css";
import taha from "./assets/taha.jpg"

function App() {
  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="nav">
        <div className="logo">Taha <span>Alsaity</span></div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Dropdown */}
        <label className="popup">
          <input type="checkbox" />
          <div className="burger">
            <span></span><span></span><span></span>
          </div>

          <nav className="popup-window">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </label>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h1 className="glow">Taha Alsaity</h1>
          <p className="role">Full-Stack Web Developer</p>
          <p className="bio">
            Specializing in <span>React</span> and <span>Django</span>{" "}
            
          </p>
        </div>

        <div className="hero-image">
          <div className="circle"></div>
          <img src={taha} alt="profile" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p style={{marginLeft:40}}>
        I’m Taha Adam Alsaity, an Information Technology student in the Networks Engineering department. I build modern and scalable full-stack applications using React and Django, with some knowledge of the Laravel PHP framework.

I’m passionate about improving the quality of life in Libya through innovative apps and technologies, solving problems, and staying up-to-date with the latest features and trends in software development
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <h2>Skills</h2>

        <div className="skills-grid"> 
          <div className="skill-card">HTML / CSS / JS</div>
          <div className="skill-card">React JS</div>
          
          <div className="skill-card">Django</div>
          <div className="skill-card">Docker</div>
          <div className="skill-card">PostgreSQL</div>
         
          <div className="skill-card">Git</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>H2O Calculator</h3>
            <p>
             app to calculate  daily water intake with responsive UI.
            </p>
          </div>

          <div className="project-card">
            <h3>Classgate  </h3>
            <p>
              a Platform with courses and exams helps students with online studying.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
  <section id="contact" className="contact-section">
  <h2>Contact Me</h2>
  <p>If you have any project idea, contact me on WhatsApp.</p>

  <a
    href="https://wa.me/218923709167" 
    target="_blank"
    className="whatsapp-btn"
  >
    <i className="fa-brands fa-whatsapp"></i>
    Chat on WhatsApp
  </a>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Taha portfolio</p>
      </footer>
    </div>
  );
}

export default App;
