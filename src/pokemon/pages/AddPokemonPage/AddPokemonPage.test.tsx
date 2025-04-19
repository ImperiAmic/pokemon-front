import { render, screen } from "@testing-library/react";
import PokemonContextProvider from "../../context/PokemonContextProvider";
import { MemoryRouter } from "react-router";
import AddPokemonPage from "./AddPokemonPage";

describe("Given the AddPokemonPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add a Pókemon!' as a heading", () => {
      const expectedPageTitle = "Add a Pókemon!";

      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <AddPokemonPage />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeVisible();
    });
  });
});
