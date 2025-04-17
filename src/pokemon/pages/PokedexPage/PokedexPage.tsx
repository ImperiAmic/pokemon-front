import { useEffect } from "react";
import usePokemon from "../../hooks/usePokemon";
import "./PokedexPage.css";

const PokedexPage: React.FC = () => {
  const { pokemons, loadPokemons } = usePokemon();

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <main className="main-container">
      <div className="pokedex-container">
        <h2 className="pokedex__title">Your Pokédex!</h2>
        <span className="pokedex__counter">
          <span>Current Pokémon count:</span>
          <span>{pokemons.length}</span>
        </span>
      </div>
    </main>
  );
};

export default PokedexPage;
