import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Pokemon } from "../types";
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

  const pokemonContextValue: PokemonContextStructure = {
    pokemons,
    loadPokemons,
  };

  return (
    <PokemonContext.Provider value={pokemonContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
