import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFlask } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
export default function TechStack() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> }, 
    { name: "Machine Learning", icon: <FaBrain /> }, 
    { name: "Git", icon: <FaGitAlt /> },
    { name: "REST APIs", icon: <TbApi /> }
  ];
  return (
    <section id="tech" className="tech-container">
      <h2 className="section-title">My Tech Stack</h2>
      
      <div className="tech-tags-container">
        {skills.map((skill, index) => (
          <div key={index} className="tech-tag" data-aos="fade-up">
            <span className="tech-icon">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}