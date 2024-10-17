import { NavLink } from "react-router-dom";
import "./NavigationBar.scss";
function NavigationBar() {
  return (
    <div className="navbar">
      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navItem">
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
