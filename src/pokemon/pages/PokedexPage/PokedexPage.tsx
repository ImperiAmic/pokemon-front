import { useEffect } from "react";
import usePokemon from "../../hooks/usePokemon";
import "./PokedexPage.css";
import PokemonsList from "../../component/PokemonsList/PokemonsList";

const PokedexPage: React.FC = () => {
  const { pokemons, loadPokemons } = usePokemon();

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <main className="main-container">
      <div className="pokedex-container">
        <header className="pokedex-header">
          <h2 className="pokedex-header__title">Your Pokédex!</h2>
          <span className="pokedex-header__counter">
            <span>Current Pokémon count:</span>
            <span>{pokemons.length}</span>
          </span>
        </header>
        <PokemonsList pokemons={pokemons} />
      </div>
    </main>
  );
};

export default PokedexPage;
