const projects = [
  {
    title: "Creative",
    description: "RGU Anime Club Logo.",
    image: "./AkariVid.mp4", // Add the video here
    category: "Graphic Design"
  },
  {
    title: "Professional",
    description: "Magazine.",
    image: "./ProjuktiVid.mp4",
    category: "Graphic Design"
  },
  {
    title: "Industrial",
    description: "Startup logo.",
    image: "./TolauntryVid.mp4",
    category: "Graphic Design"
  }
];

function Work3() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Graphic-Designs</h2>
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

export default Work3;
