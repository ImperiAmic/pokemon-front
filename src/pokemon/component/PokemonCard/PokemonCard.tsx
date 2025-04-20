import usePokemon from "../../hooks/usePokemon";
import { Pokemon } from "../../types";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { removePokemon } = usePokemon();

  const isPokemonInPokeball = pokemon.isCaptured ? (
    <img
      src="/favicon.svg"
      alt="Poke Ball"
      loading="lazy"
      width={24}
      height={24}
    />
  ) : (
    <button className="pokemon__catch-button">{"Catch!"}</button>
  );

  return (
    <article className="pokemon">
      <header className="pokemon__header">
        <span className="pokemon__position">{`Nº: ${pokemon.pokedexPosition}`}</span>
        <h2 className="pokemon__name">{pokemon.name}</h2>
      </header>
      <img
        src={pokemon.imageUrl}
        alt={pokemon.imageDescription}
        loading="lazy"
        className="pokemon__image"
        width={183}
        height={183}
      />
      <footer className="pokemon__footer">
        <div className="pokemon__types">
          {pokemon.types.map((type) => (
            <span className="pokemon__type" key={type}>
              {type}
            </span>
          ))}
        </div>
        {isPokemonInPokeball}
        <button type="button" onClick={() => removePokemon(pokemon.id)}>
          <img src="/cross.svg" alt="Cross icon" height={24} width={24} />
        </button>
      </footer>
    </article>
  );
};

export default PokemonCard;
