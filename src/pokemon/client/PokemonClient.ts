import {
  mapPokemonDtoToPokemon,
  mapPokemonsDtoToPokemons,
} from "../dto/mapper";
import PokemonDto from "../dto/types";
import { Pokemon, PokemonFormData } from "../types";
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
      litePokemons.map(async (litePokemon) => {
        const pokeApiResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${litePokemon.name}`,
        );

        if (pokeApiResponse.status === 404) {
          return {
            ...litePokemon,
            types: litePokemon.types,
            abilities: litePokemon.abilities,
          };
        }

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
          ...litePokemon,
          types: pokemonTypes,
          abilities: pokemonAbilities,
        };
      }),
    );

    return pokemons;
  };

  public addPokemon = async (
    pokemonFormData: PokemonFormData,
  ): Promise<Pokemon> => {
    const response = await fetch(`${this.apiUrl}/pokemon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemonFormData),
    });

    const addedPokemon = (await response.json()) as PokemonDto;

    return mapPokemonDtoToPokemon(addedPokemon);
  };
}

export default PokemonClient;
