import { Pokemon } from "../types";
import PokemonDto from "./types";

export const mapPokemonsDtoToPokemons = (
  pokemonsDto: PokemonDto[],
): Pokemon[] => {
  return pokemonsDto.map<Pokemon>(({ name, ...pokemonsDto }) => ({
    ...pokemonsDto,
    name,
    imageDescription: `Pokémon ${name} in a defiant pose`,
    isCaptured: false,
  }));
};

export const mapPokemonDtoToPokemon = (pokemonDto: PokemonDto): Pokemon => {
  const pokemon: Pokemon = {
    ...pokemonDto,
    imageDescription: `Pokémon ${name} in a defiant pose`,
    isCaptured: false,
  };

  return pokemon;
};
