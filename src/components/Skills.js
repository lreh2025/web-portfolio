import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaFigma, FaDatabase 
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, level: 85, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 75, color: '#000000' },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 82, color: '#339933' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 78, color: '#47A248' },
        { name: 'PostgreSQL', icon: <FaDatabase />, level: 75, color: '#336791' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'Figma', icon: <FaFigma />, level: 85, color: '#F24E1E' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;