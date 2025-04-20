import { useState } from "react";
import { PokemonFormData } from "../../types";
import "./PokemonForm.css";
import { useNavigate } from "react-router";

interface PokemonFormProps {
  action: (pokemonFormData: PokemonFormData) => Promise<void>;
}

const PokemonForm: React.FC<PokemonFormProps> = ({ action }) => {
  const emptyPokemonData: PokemonFormData = {
    name: "",
    imageUrl: "",
    pokedexPosition: 0,
    types: [],
    abilities: [],
  };

  const [pokemonData, setPokemonData] =
    useState<PokemonFormData>(emptyPokemonData);

  const editPokemonData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const propertyName = event.target.id;

    setPokemonData((pokemonData) => ({
      ...pokemonData,
      [propertyName]:
        propertyName === "types" || propertyName === "abilities"
          ? newValue.split(",").map((value) => value.trim())
          : newValue,
    }));
  };

  const maxPokedexNumber = 1025;

  const isFormValid =
    pokemonData.name !== "" &&
    pokemonData.imageUrl !== "" &&
    pokemonData.pokedexPosition > 0 &&
    pokemonData.pokedexPosition <= maxPokedexNumber;

  const navigate = useNavigate();

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    await action(pokemonData);

    navigate("/pokedex");
  };

  return (
    <form className="form" onSubmit={onSubmitForm}>
      <fieldset className="form-set">
        <div className="form-group">
          <label className="form__label" htmlFor="name">
            Write the new Pokémon name:
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            value={pokemonData.name}
            onChange={editPokemonData}
            required
          />
        </div>
        <div className="form-group">
          <label className="form__label" htmlFor="imageUrl">
            Add an image of your Pokémon:
          </label>
          <input
            className="form__input"
            id="imageUrl"
            type="url"
            value={pokemonData.imageUrl}
            onChange={editPokemonData}
            required
          />
        </div>
        <div className="form-group">
          <label className="form__label" htmlFor="pokedexPosition">
            Which is its Pokédex position?
          </label>
          <input
            className="form__input"
            id="pokedexPosition"
            type="number"
            value={pokemonData.pokedexPosition || ""}
            onChange={editPokemonData}
            min="1"
            max={maxPokedexNumber}
            required
          />
        </div>
      </fieldset>
      <fieldset className="form-set">
        <span className="form__aclaration">
          Are you inventing a Pokémon? 🤫
        </span>
        <span>If so, keep filling; if not, just submit!</span>
        <div className="form-group">
          <label className="form__label" htmlFor="types">
            Write down its type:
          </label>
          <span>(separe by comma if it has two types)</span>
          <input
            className="form__input"
            id="types"
            type="text"
            value={pokemonData.types}
            onChange={editPokemonData}
          />
        </div>
        <div className="form-group">
          <label className="form__label" htmlFor="abilities">
            Any special ability?
          </label>
          <span>(separe by comma if it has more than one ability)</span>
          <input
            className="form__input"
            id="abilities"
            type="text"
            value={pokemonData.abilities}
            onChange={editPokemonData}
          />
        </div>
      </fieldset>
      <button className="form__button" type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default PokemonForm;
