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

    const typelessPokemons = mapPokemonsDtoToPokemons(PokemonDto);

    const pokemons = Promise.all(
      typelessPokemons.map(async (typlessPokemon) => {
        const pokeApiResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${typlessPokemon.name}`,
        );

        const pokeApiTypes = (await pokeApiResponse.json()) as {
          types: { type: { name: string } }[];
        };

        const pokemonTypes = pokeApiTypes.types.map(
          (pokemonType) => pokemonType.type.name,
        );

        return { ...typlessPokemon, types: pokemonTypes };
      }),
    );

    return pokemons;
  };
}

export default PokemonClient;
