import hms from "../assets/hms.png";
import lms from "../assets/lms.png";
import cs from "../assets/coming-soon.jpg";
export default function Projects() {

  const projectList = [
    {
      title: "Learning Management System",
      description: "A comprehensive platform for managing online courses, student progress, and interactive learning experiences.",
      techStack: ["HTML","CSS","JS", "Node.js", "POSTGRESQL", "Express"],
      githubLink: "https://github.com/SREEVINAYAKG/Learning-Management-System",
      liveLink: "#",
      image:lms
    },
    {
      title: "Hospital Management System",
      description: "A robust backend system built for managing patient records, appointments, and doctor schedules efficiently.",
      techStack: ["Flask", "Python", "HTML", "CSS"],
      githubLink: "#",
      liveLink: "#",
      image:hms
    },
    {
      title: "Placement Portal",
      description: "A platform for connecting students with potential employers, featuring job listings, application management, and networking capabilities.",
      techStack: ["Vue Js", "Flask", "SQLite"],
      githubLink: "#",
      liveLink: "#",
      image:cs
    },
  ];
  return (
    <section id="projects" className="projects-container">
      <div className="project-title">
        <h2 className="section-title">Some Things I've Built</h2>
      </div>
<div className="projects-grid">
  {projectList.map((project, index) => (
    <div key={index} className="project-card" data-aos="fade-up">
      {project.image && (
        <img src={project.image} alt={project.title} className="small-project-image" />
      )}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech-list">
        {project.techStack.map((tech, i) => (
          <span key={i} className="project-tech-item">{tech}</span>
        ))}
      </div>
      
      <div className="project-links-overlay">
        <a href={project.githubLink} target="_blank" className="project-link">GitHub</a>
        <a href={project.liveLink} target="_blank" className="project-link">Live Demo</a>
      </div>

    </div>
  ))}
</div>
    </section>
  )
}
