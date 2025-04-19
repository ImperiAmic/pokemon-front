import { Pokemon } from "../types";

export type PokemonDto = Omit<Pokemon, "imageDescription">;

export default PokemonDto;
