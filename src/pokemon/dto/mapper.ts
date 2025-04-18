import Pokemon from "../types";
import PokemonDto from "./types";

const mapPokemonsDtoToPokemons = (pokemonsDto: PokemonDto[]): Pokemon[] => {
  return pokemonsDto.map<Pokemon>(({ name, ...pokemonsDto }) => ({
    ...pokemonsDto,
    name,
    imageDescription: `Pokémon ${name} in a defiant pose`,
    types: [],
  }));
};

export default mapPokemonsDtoToPokemons;
