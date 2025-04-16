import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav>
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
