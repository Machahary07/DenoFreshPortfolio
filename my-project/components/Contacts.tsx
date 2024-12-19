const social = [
  {
    name: 'Email',
    icon: <img src="./email-ui-mail-svgrepo-com.svg" alt="Figma Logo"/>, 
  },
  {
    name: 'Instagram',
    icon: <img src="./instagram-round-svgrepo-com.svg" alt="Code Logo"/>,
  },
  {
    name: 'LinkedIn',
    icon: <img src="./linkedin-round-svgrepo-com.svg" alt="JS Logo"/>,
  },
  {
    name: 'Github',
    icon: <img src="./github-142-svgrepo-com.svg" alt="Canva Logo"/>,
  }
];

function Contacts() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="content">
          <h2 className="title">Let's Connect</h2>
          <p className="description">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
          </p>

          <div className="icons">
            <a href="mailto:jeumachahary07@gmail.com" className="icon">{social[0].icon}</a>
            <a href="https://www.instagram.com/__natsu.css___/" className="icon">{social[1].icon}</a>
            <a href="https://www.linkedin.com/in/jeu-machahary-71b13a330/" className="icon">{social[2].icon}</a>
            <a href="https://github.com/Machahary07" className="icon">{social[3].icon}</a>
          </div>

          <p>&copy; 2024 YourCompanyName. All Rights Reserved.</p>
          <p><br/></p>
          <nav>
            <a href="#About" style="color: white; margin: 0 10px; text-decoration: none;">About</a>
            <a href="#work" style="color: white; margin: 0 10px; text-decoration: none;">Work</a>
            <a href="#skills" style="color: white; margin: 0 10px; text-decoration: none;">Skills</a>
            <a href="#contact" style="color: white; margin: 0 10px; text-decoration: none;">Contact</a>
          </nav>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>
          <p><br/></p>

        </div>
      </div>
    </section>
  );
}

export default Contacts;
