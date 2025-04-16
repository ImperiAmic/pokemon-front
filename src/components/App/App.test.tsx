import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokédex' as a heading level 1", () => {
      const expectedAppTitle = "Pokédex";

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedAppTitle,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
