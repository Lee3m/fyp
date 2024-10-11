import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <div className="navItem">
        <Navlink to="/">Home</Navlink>
      </div>
    </nav>
  );
}

export default NavigationBar;
