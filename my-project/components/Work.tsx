// work.tsx

const projects = [
    {
      title: "E-Commerce Redesign",
      description: "A complete overhaul of an online shopping experience",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
      category: "UI/UX Design"
    },
    {
      title: "Banking App Interface",
      description: "Modern banking made simple and intuitive",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Mobile Design"
    },
    {
      title: "Travel Platform",
      description: "Connecting travelers with unique experiences",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Web Design"
    }
  ];
  
  function Work() {
    return (
      <section id="work" className="work-section">
        <div className="container">
          <h2 className="section-title">Selected Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
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
  
  export default Work;
  