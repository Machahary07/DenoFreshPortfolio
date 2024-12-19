const projects = [
  {
    title: "Professional",
    description: "Dark mode e-commerce website.",
    image: "./EcomVid.mp4", // Add the video here
    category: "Web-frontend"
  },
  {
    title: "Creative",
    description: "Unique web design elements.",
    image: "./SliderUpDown.mp4",
    category: "Web-frontend"
  },
  {
    title: "Competitive",
    description: "Beautiful corousal for hackathon project, Artify.",
    image: "./Artify.mp4",
    category: "Web-frontend"
  }
];

function Work2() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Web-Designs</h2>
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

export default Work2;
