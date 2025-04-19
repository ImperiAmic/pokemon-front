import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Pokemon, PokemonFormData } from "../types";
import PokemonClient from "../client/PokemonClient";
import PokemonContextStructure from "./types";
import PokemonContext from "./PokemonContext";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonClient = useMemo(() => new PokemonClient(), []);

  const loadPokemons = useCallback(async (): Promise<void> => {
    const apiPokemons = await pokemonClient.getPokemons();

    setPokemons(apiPokemons);
  }, [pokemonClient]);

  const createPokemon = async (
    pokemonFormData: PokemonFormData,
  ): Promise<void> => {
    const addedPokemon = await pokemonClient.addPokemon(pokemonFormData);

    setPokemons((pokemons) => [...pokemons, addedPokemon]);
  };

  const pokemonContextValue: PokemonContextStructure = {
    pokemons,
    loadPokemons,
    createPokemon,
  };

  return (
    <PokemonContext.Provider value={pokemonContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
