const projects = [
  {
    title: "Professional",
    description: "SIH winning powerpoint presentations.",
    image: "./SIHppt.mp4", // Add the video here
    category: "Powerpoint presentation"
  },
  {
    title: "Creative",
    description: "Designing with creativity.",
    image: "./DTppt.mp4",
    category: "Powerpoint presentation"
  },
  {
    title: "Industrial",
    description: "Connecting travelers with unique experiences",
    image: "./TOTOppt.mp4",
    category: "Powerpoint presentation"
  }
];

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Powerpoint Presentations with Morphism</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image.endsWith('.mp4') ? (
                <video
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}
              <div className="project-overlay">
                  <span className="category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
