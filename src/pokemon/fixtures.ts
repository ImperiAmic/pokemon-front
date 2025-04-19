import { Pokemon } from "./types";

export const negri: Pokemon = {
  id: "a1",
  name: "Negri",
  imageUrl: "",
  pokedexPosition: 6,
  isCaptured: true,
  imageDescription: "Pokémon Negri posing defiantly",
  types: ["cat", "lazy"],
  abilities: ["open doors", "loud meow"],
};

export const pikachu: Pokemon = {
  id: "b2",
  name: "Pikachu",
  imageUrl: "",
  pokedexPosition: 12,
  isCaptured: false,
  imageDescription: "Pokémon Pikachu posing defiantly",
  types: ["electric", "famous"],
  abilities: ["smoke", "drink"],
};

export const fixturePokemons = [negri, pikachu];
