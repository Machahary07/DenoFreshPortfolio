const skills = [
  {
    name: 'Figma',
    icon: <img src="./figma-logo-svgrepo-com.svg" alt="Figma Logo"/>, 
    description: 'UI/UX Design & Prototyping'
  },
  {
    name: 'Web Development',
    icon: <img src="./code-svgrepo-com.svg" alt="Code Logo"/>,
    description: 'HTML, CSS, TypeScript'
  },
  {
    name: 'JavaScript',
    icon: <img src="./javascript-svgrepo-com.svg" alt="JS Logo"/>,
    description: 'Modern JS & TypeScript'
  },
  {
    name: 'Canva',
    icon: <img src="./canva-svgrepo-com.svg" alt="Canva Logo"/>,
    description: 'Graphic Design & Layout'
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
