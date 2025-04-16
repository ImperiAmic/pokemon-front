import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pikapi, Pika-Pika!' as a text", () => {
      const expectedNotFoundPageText = "Pikapi, Pika-Pika!";

      render(<NotFoundPage />);

      const notFoundPageText = screen.getByText(expectedNotFoundPageText);
      expect(notFoundPageText).toBeVisible();
    });

    test("Then it should show 'The page you are looking for does not exist, poke-sorry.' as a text", () => {
      const expectedNotFoundPageText =
        "The page you are looking for does not exist, poke-sorry.";

      render(<NotFoundPage />);

      const notFoundPageText = screen.getByText(expectedNotFoundPageText);

      expect(notFoundPageText).toBeVisible();
    });
  });
});
