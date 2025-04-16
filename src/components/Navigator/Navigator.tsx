import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav className="navigator">
      <ul>
        <li>
          <NavLink className="navigator__link" to="/pokedex">
            Pokédex
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
