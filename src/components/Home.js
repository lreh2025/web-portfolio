import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaGraduationCap } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text fade-in">
            <div className="graduation-badge">
              <FaGraduationCap className="graduation-icon" />
              <span className="badge-text">GSU Student</span>
            </div>
            
            <h1 className="home-title">
              Hi, I'm <span className="highlight">Law Reh</span>
              <br />
              Computer Science Student &<br />
              Aspiring Developer
            </h1>
            
            <p className="home-description">
              Current Georgia State University student pursuing a Bachelor's in Computer Science, 
              holding an Associate's degree in Computer Science. Passionate about building 
              innovative web applications and continuously learning new technologies to solve 
              real-world problems.
            </p>
            
            <div className="education-highlight">
              <div className="edu-current">
                <div className="edu-header">
                  <span className="edu-status">Current</span>
                  <span className="edu-progress">In Progress</span>
                </div>
                <span className="edu-degree">B.S. Computer Science</span>
                <span className="edu-school">Georgia State University</span>
              </div>
              
              <div className="edu-divider"></div>
              
              <div className="edu-completed">
                <div className="edu-header">
                  <span className="edu-status">Completed</span>
                </div>
                <span className="edu-degree">A.S. Computer Science</span>
                <span className="edu-year">2023</span>
              </div>
            </div>
            
            <div className="home-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects
                <FaArrowRight className="btn-icon" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/lawreh" target="_blank" rel="noopener noreferrer" className="social-tooltip" data-tooltip="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/lawreh" target="_blank" rel="noopener noreferrer" className="social-tooltip" data-tooltip="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/lawreh" target="_blank" rel="noopener noreferrer" className="social-tooltip" data-tooltip="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div className="home-image">
            <div className="image-container">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="profile-image">
                <div className="student-overlay">
                  <div className="student-text">Student</div>
                  <div className="student-degree">Developer</div>
                  <div className="student-status">GSU CS</div>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;