import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Interactive Recipe Pages',
      description: 'Collaborative school project building multi-page recipe website with interactive ingredient highlighting and responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Team Collaboration'],
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop',
      github: 'https://github.com/pocscz06/webdevp1',
      live: null, // Add live demo URL here if available
      team: true,
      role: 'Frontend Developer & Collaborator'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive React portfolio showcasing projects, skills, and education with modern UI/UX design.',
      tags: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
      github: 'https://github.com/lreh2025/my_website', // Update with your actual repo
      live: null, // Add your live URL when deployed
      team: false,
      role: 'Full Stack Developer'
    },
    {
      title: 'Task Management App',
      description: 'Academic project for managing assignments and deadlines with priority sorting and progress tracking.',
      tags: ['JavaScript', 'Local Storage', 'Bootstrap', 'DOM Manipulation'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      github: '#',
      live: '#',
      team: false,
      role: 'Solo Developer'
    },
    {
      title: 'GSU Course Catalog Helper',
      description: 'Conceptual tool to help Georgia State University students plan their Computer Science course schedules.',
      tags: ['React', 'Node.js', 'Academic Planning', 'UI Design'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
      github: '#',
      live: '#',
      team: false,
      role: 'Concept & Design'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Academic and personal development work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View on GitHub"
                    >
                      <FaGithub />
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  {project.team && (
                    <div className="team-badge">
                      <FaUsers /> Team Project
                    </div>
                  )}
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.role && (
                    <span className="project-role">
                      <FaCode /> {project.role}
                    </span>
                  )}
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                {project.team && (
                  <div className="team-info">
                    <small>Collaborative project with Kenny Pham & Steven Phan</small>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="project-cta">
          <p>More projects and academic work available on my GitHub profile!</p>
          <a 
            href="https://github.com/lreh2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <FaGithub /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;