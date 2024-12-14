function Contacts() {
    return (
      <section id="contact" className="contact-section">
        <div className="contactcontainer">
          <div className="content">
            <h2 className="title">Let's Connect</h2>
            <p className="description">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
            </p>
  
            <div className="icons">
              <a href="mailto:jeumachahary07@gmail.com" className="icon">EMail</a>
              <a href="https://www.instagram.com/__natsu.css___/" className="icon">Instagram</a>
              <a href="https://www.linkedin.com/in/jeu-machahary-71b13a330/" className="icon">LinkedIn</a>
              <a href="https://github.com/Machahary07" className="icon">GitHub</a>
            </div>
  
            <form className="form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={4} className="input textarea"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contacts;
  