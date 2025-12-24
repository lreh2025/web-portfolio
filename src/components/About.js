import React from 'react';
import { FaCode, FaPalette, FaRocket, FaGraduationCap, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code following industry best practices and design patterns learned through coursework and projects.'
    },
    {
      icon: <FaPalette />,
      title: 'Modern Design',
      description: 'Creating responsive, intuitive interfaces with a focus on user experience and accessibility principles.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solving',
      description: 'Applying algorithmic thinking and data structures knowledge to solve complex technical challenges.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Experienced in team projects and agile methodologies for effective group development.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Computer Science Student & Aspiring Developer</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="education-highlight">
              <FaGraduationCap className="edu-icon" />
              <div className="edu-info">
                <h4>Georgia State University</h4>
                <p>Bachelor of Science in Computer Science (In Progress)</p>
                <span className="edu-status">Expected Graduation: 2026</span>
              </div>
            </div>
            
            <h3>Building a Foundation for Tech Innovation</h3>
            <p>
              I'm a dedicated Computer Science student at Georgia State University, 
              building upon my Associate's degree in Computer Science. My academic 
              journey has equipped me with a solid foundation in software engineering 
              principles, algorithms, and full-stack development.
            </p>
            <p>
              Currently advancing toward my Bachelor's degree, I'm passionate about 
              applying classroom knowledge to real-world projects. I specialize in 
              creating web applications that combine technical functionality with 
              engaging user experiences.
            </p>
            <p>
              My goal is to contribute to innovative tech solutions while continuously 
              expanding my skills in modern development technologies and methodologies.
            </p>
            
            <div className="stats">
              <div className="stat">
                <span className="stat-number">A.S.</span>
                <span className="stat-label">Computer Science</span>
                <span className="stat-sub">Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">GSU</span>
                <span className="stat-label">Current Student</span>
                <span className="stat-sub">B.S. in Progress</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
                <span className="stat-sub">Academic & Personal</span>
              </div>
            </div>
            
            <div className="academic-focus">
              <h4>Academic Focus Areas:</h4>
              <div className="focus-tags">
                <span className="focus-tag">Data Structures</span>
                <span className="focus-tag">Algorithms</span>
                <span className="focus-tag">Web Development</span>
                <span className="focus-tag">Database Systems</span>
                <span className="focus-tag">Software Engineering</span>
                <span className="focus-tag">Computer Networks</span>
              </div>
            </div>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;