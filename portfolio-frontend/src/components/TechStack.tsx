export default function TechStack() {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Node.js", "Flask", "Python", "SQL",
     "Git", "REST APIs","Java"
  ];
  return (
    <section id="tech" className="tech-container">
      <h2 className="section-title">My Tech Stack</h2>
      
      <div className="tech-tags-container">
        {skills.map((skill, index) => (
          <div key={index} className="tech-tag" data-aos="fade-up">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}