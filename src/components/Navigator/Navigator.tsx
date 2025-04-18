import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav className="navigator">
      <ul className="navigator__links">
        <li>
          <NavLink className="navigator__link" to="/pokedex">
            Pokédex
          </NavLink>
        </li>
        <li>
          <NavLink className="navigator__link" to="/add-pokemon">
            Add Pokémon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
