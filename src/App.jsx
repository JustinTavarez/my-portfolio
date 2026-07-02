import { Link, Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app min-h-screen w-full overflow-x-hidden">
      <header className="app-header flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4 md:px-8">
        <Link to="/" className="logo text-sm sm:text-base truncate max-w-[60%] sm:max-w-none">
          Justin Damian Tavarez
        </Link>
        <nav className="nav flex flex-wrap gap-1 sm:gap-2 md:gap-4 justify-end">
          <NavLink to="/" end className="nav-link max-sm:px-2 max-sm:py-1.5 max-sm:text-xs">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link max-sm:px-2 max-sm:py-1.5 max-sm:text-xs">
            Projects
          </NavLink>
          <NavLink to="/skills" className="nav-link max-sm:px-2 max-sm:py-1.5 max-sm:text-xs">
            Skills
          </NavLink>
          <NavLink to="/certifications" className="nav-link max-sm:px-2 max-sm:py-1.5 max-sm:text-xs">
            Certifications
          </NavLink>
          <NavLink to="/contact" className="nav-link max-sm:px-2 max-sm:py-1.5 max-sm:text-xs">
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="app-main w-full max-w-full box-border px-4 py-6 sm:px-6 sm:py-8 md:px-8">
        {/* This is where the current page renders */}
        <Outlet />
      </main>

      <footer className="app-footer px-4 py-3 sm:px-6 md:px-8 text-xs sm:text-sm text-right">
        © {new Date().getFullYear()} Justin Tavarez
      </footer>
    </div>
  );
}

export default App;
