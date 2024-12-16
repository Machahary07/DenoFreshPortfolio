const projects = [
    {
      title: "E-Commerce Webpage",
      description: "A complete online shopping webpage",
      image: "./EcomWork.png", // Use relative path for local image
      alt: "E-Commerce Webpage", // Add alt text for accessibility
      category: "UI/UX Design",
    },
    {
      title: "Artify (Hackathon)",
      description: "Artify hackathon project",
      image: "./ArtifyWork.png", // Use relative path for local image
      alt: "Artify Project", // Add alt text for accessibility
      category: "UI/UX Design",
    },
    {
      title: "Anime Club RGU",
      description: "Logo of RGU anime club",
      image: "./AnimeClubRGU.jpg", // Use relative path for local image
      alt: "Anime Club RGU Project", // Add alt text for accessibility
      category: "Graphic Design",
    }
  ];
  
  function Work2() {
    return (
      <section id="work" className="work-section">
        <div className="container">
          <h2 className="section-title">Selected Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.alt} // Use provided alt text
                  className="project-image"
                />
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