import Pokemon from "../../types";
import "./PokemonsList.css";

interface PokemonsListProps {
  pokemons: Pokemon[];
}

const PokemonsList: React.FC<PokemonsListProps> = ({ pokemons }) => {
  return (
    <div className="pokemons-container">
      <ul className="pokemons">
        {pokemons.map((pokemon) => (
          <li className="pokemon-wrapper" key={pokemon.id}></li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsList;
