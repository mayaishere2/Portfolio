import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          Rahmani Houda
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
