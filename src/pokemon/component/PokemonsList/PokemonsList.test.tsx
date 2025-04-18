import { render, screen } from "@testing-library/react";
import { fixturePokemons, negri, pikachu } from "../../fixtures";
import PokemonContextProvider from "../../context/PokemonContextProvider";
import { MemoryRouter } from "react-router";
import PokemonsList from "./PokemonsList";

describe("Given the PokemonList component", () => {
  describe("When it renders receiving Pokémon Negri and Pikachu", () => {
    const pokemons = fixturePokemons;

    test("Then it should show 'Negri' and 'Pikachu' as a heading each", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonsList pokemons={pokemons} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const pokemonNegriName = screen.getByRole("heading", {
        name: negri.name,
      });
      const pokemonPikachuName = screen.getByRole("heading", {
        name: pikachu.name,
      });

      expect(pokemonNegriName).toBeVisible();
      expect(pokemonPikachuName).toBeVisible();
    });

    test("Then it should show 'Pokémon Negri posing defiantly' and 'Pokémon Pikachu posing defiantly'  as image alternative texts", () => {
      const expectedNegriImageDescription = negri.imageDescription;
      const expectedPikachuImageDescription = pikachu.imageDescription;

      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonsList pokemons={pokemons} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const pokemonNegriImage = screen.getByAltText(
        expectedNegriImageDescription,
      );
      const pokemonPikachuImage = screen.getByAltText(
        expectedPikachuImageDescription,
      );

      expect(pokemonNegriImage).toHaveAttribute(
        "alt",
        expectedNegriImageDescription,
      );
      expect(pokemonPikachuImage).toHaveAttribute(
        "alt",
        expectedPikachuImageDescription,
      );
    });
  });
});
