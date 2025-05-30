import { Pokemon, PokemonFormData } from "../types";

interface PokemonContextStructure {
  pokemons: Pokemon[];
  loadPokemons: () => Promise<void>;
  createPokemon: (pokemonFormData: PokemonFormData) => Promise<void>;
  removePokemon: (pokemonId: string) => Promise<void>;
}

export default PokemonContextStructure;
