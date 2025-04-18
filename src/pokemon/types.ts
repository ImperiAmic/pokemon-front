export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  pokedexPosition: number;
  isCaptured: boolean;
  imageDescription: string;
  types: string[];
}

export default Pokemon;
