import { render, screen } from "@testing-library/react";
import PokemonForm from "./PokemonForm";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

const user = userEvent.setup();
const fakeAction = vitest.fn();

beforeEach(() => {
  fakeAction.mockClear();
});

describe("Given the PokemonForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Write the new Pokémon name' text box", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={fakeAction} />
        </MemoryRouter>,
      );

      const PokemonNameTextBox = screen.getByLabelText(
        /write the new pokémon name/i,
      );

      expect(PokemonNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Add an image of your Pokémon' text box", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={fakeAction} />
        </MemoryRouter>,
      );
      const PokemonNameTextBox = screen.getByLabelText(
        /add an image of your pokémon/i,
      );

      expect(PokemonNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Which is its Pokédex position?' text box", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={fakeAction} />
        </MemoryRouter>,
      );
      const PokemonNameTextBox = screen.getByLabelText(
        /which is its pokédex position/i,
      );

      expect(PokemonNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Write down its type' text box", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={fakeAction} />
        </MemoryRouter>,
      );
      const PokemonNameTextBox = screen.getByLabelText(/write down its type/i);

      expect(PokemonNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Any special ability?' text box", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={fakeAction} />
        </MemoryRouter>,
      );
      const PokemonNameTextBox = screen.getByLabelText(/any special ability/i);

      expect(PokemonNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Submit' button", () => {
      render(
        <MemoryRouter>
          <PokemonForm action={fakeAction} />
        </MemoryRouter>,
      );
      const PokemonNameTextBox = screen.getByRole("button", {
        name: "Submit",
      });

      expect(PokemonNameTextBox).toBeVisible();
    });
  });

  describe("And the user types 'Pikachu' in 'Write the new Pokémon name' text box", () => {
    test("Then it should show 'Pikachu' in 'Write the new Pokémon name' text box", async () => {
      const expectedTextBox = "Pikachu";

      render(
        <MemoryRouter>
          <PokemonForm action={fakeAction} />
        </MemoryRouter>,
      );
      const PokemonNameTextBox = screen.getByLabelText(
        /write the new pokémon name/i,
      );

      await user.type(PokemonNameTextBox, expectedTextBox);

      expect(PokemonNameTextBox).toHaveValue(expectedTextBox);
    });
  });
});
