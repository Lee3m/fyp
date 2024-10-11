import { NavLink } from "react-router-dom";
import "./NavigationBar.scss";
function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navItem">
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
