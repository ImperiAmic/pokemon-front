import mapPokemonsDtoToPokemons from "../dto/mapper";
import PokemonDto from "../dto/types";
import { Pokemon } from "../types";
import PokemonClientStructure from "./types";

class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemons: PokemonDto } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    const litePokemons = mapPokemonsDtoToPokemons(PokemonDto);

    const pokemons = Promise.all(
      litePokemons.map(async (typlessPokemon) => {
        const pokeApiResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${typlessPokemon.name}`,
        );

        const pokeApiTypesAndAbilities = (await pokeApiResponse.json()) as {
          types: { type: { name: string } }[];
          abilities: { ability: { name: string } }[];
        };

        const pokemonTypes = pokeApiTypesAndAbilities.types.map(
          (pokemonType) => pokemonType.type.name,
        );

        const pokemonAbilities = pokeApiTypesAndAbilities.abilities.map(
          (pokemonAbility) => pokemonAbility.ability.name,
        );

        return {
          ...typlessPokemon,
          types: pokemonTypes,
          abilities: pokemonAbilities,
        };
      }),
    );

    return pokemons;
  };
}

export default PokemonClient;
