import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">Justin Damian Tavarez</div>
        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            Skills
          </NavLink>
          <NavLink to="/certifications" className="nav-link">
            Certifications
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        {/* This is where the current page renders */}
        <Outlet />
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} Justin Tavarez
      </footer>
    </div>
  );
}

export default App;
