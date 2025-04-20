import { Pokemon, PokemonFormData } from "../types";

interface PokemonClientStructure {
  getPokemons: () => Promise<Pokemon[]>;
  addPokemon: (pokemonFormData: PokemonFormData) => Promise<Pokemon>;
  deletePokemon: (pokemonId: string) => Promise<Pokemon>;
}

export default PokemonClientStructure;
