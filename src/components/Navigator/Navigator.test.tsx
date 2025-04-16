import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigator from "./Navigator";

describe("Given the Navigator component", () => {
  describe("When it renders", () => {
    test("Then it should a 'Pokédex' link", () => {
      render(
        <MemoryRouter>
          <Navigator />
        </MemoryRouter>,
      );

      const pokedexLink = screen.getByRole("link", {
        name: /pokédex/i,
      });

      expect(pokedexLink).toBeVisible();
    });
  });
});
