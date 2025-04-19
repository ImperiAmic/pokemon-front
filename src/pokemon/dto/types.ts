import { Pokemon } from "../types";

export type PokemonDto = Omit<Pokemon, "imageDescription" | "types">;

export default PokemonDto;
