import { render, screen } from "@testing-library/react";
import { negri } from "../../fixtures";
import PokemonContextProvider from "../../context/PokemonContextProvider";
import { MemoryRouter } from "react-router";
import PokemonCard from "./PokemonCard";

describe("Given the PokemonCard component", () => {
  describe("When it renders receiveing a Pokémon Negri", () => {
    test("Then it should show 'Negri' inside a heading", () => {
      const expectedPokemonName = negri.name;

      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonCard pokemon={negri} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const pokemonName = screen.getByRole("heading", {
        name: expectedPokemonName,
      });

      expect(pokemonName).toBeVisible();
    });

    test("Then it should show 'Pokémon Negri posing defiantly' as an image alternative text", () => {
      const expectedImageDescription = negri.imageDescription;

      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonCard pokemon={negri} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const pokemonImage = screen.getByAltText(expectedImageDescription);

      expect(pokemonImage).toHaveAttribute("alt", expectedImageDescription);
    });
  });
});
