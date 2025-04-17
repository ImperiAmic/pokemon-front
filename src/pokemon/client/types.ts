import Pokemon from "../types";

interface PokemonClientStructure {
  getPokemons: () => Promise<Pokemon[]>;
}

export default PokemonClientStructure;
