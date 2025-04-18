import mapPokemonsDtoToPokemons from "../dto/mapper";
import PokemonDto from "../dto/types";
import Pokemon from "../types";
import PokemonClientStructure from "./types";

class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch(`${this.apiUrl}/pokemons`);

    const { pokemons: PokemonDto } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    return mapPokemonsDtoToPokemons(PokemonDto);
  };
}

export default PokemonClient;
