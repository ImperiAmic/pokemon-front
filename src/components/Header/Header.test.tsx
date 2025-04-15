import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokédex' as a heading level 1", () => {
      const expectedAppTitle = "Pokédex";

      render(<Header />);

      const appTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedAppTitle,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show 'Gotta manage 'em all!' as a claim", () => {
      const expectedAppClaim = "Gotta manage 'em all!";

      render(<Header />);

      const appClaim = screen.getByText(expectedAppClaim);

      expect(appClaim).toBeVisible();
    });

    test("Then it should show an image of Pokémon Mew joyfuly floating", () => {
      const expectedAltText = "Pokémon Mew joyfuly floating";

      render(<Header />);

      const appImage = screen.getByAltText(expectedAltText);

      expect(appImage).toBeVisible();
    });
  });
});
