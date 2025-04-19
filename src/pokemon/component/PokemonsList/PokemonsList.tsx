import { Pokemon } from "../../types";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonsList.css";

interface PokemonsListProps {
  pokemons: Pokemon[];
}

const PokemonsList: React.FC<PokemonsListProps> = ({ pokemons }) => {
  return (
    <div className="pokemons-container">
      <ul className="pokemons">
        {pokemons.map((pokemon) => (
          <li className="pokemon-wrapper" key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsList;
