export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  pokedexPosition: number;
  isCaptured: boolean;
  imageDescription: string;
  types: string[];
  abilities: string[];
}

export type PokemonFormData = Omit<
  Pokemon,
  "id" | "isCaptured" | "imageDescription"
>;
