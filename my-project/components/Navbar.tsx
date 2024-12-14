export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="navbar-content">
          <div className="logo">JeuMachahary</div>
          <div className="nav-links">
            {["work", "skills", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="nav-button"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
