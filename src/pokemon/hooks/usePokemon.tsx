import { useContext } from "react";
import PokemonContextStructure from "../context/types";
import PokemonContext from "../context/PokemonContext";

const usePokemon = (): PokemonContextStructure => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("Missing provider for Pokemon content");
  }

  return context;
};

export default usePokemon;
