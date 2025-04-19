import { useState } from "react";
import { PokemonFormData } from "../../types";
import "./PokemonForm.css";

const PokemonForm: React.FC = () => {
  const emptyPokemonData: PokemonFormData = {
    name: "",
    imageUrl: "",
    pokedexPosition: 0,
    types: [],
    abilities: [],
  };

  const [pokemonData, setPokemonData] =
    useState<PokemonFormData>(emptyPokemonData);

  const editPokemonData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
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
    pokemonData.pokedexPosition <= maxPokedexNumber &&
    pokemonData.types.length !== 0;

  return (
    <form className="form">
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
      <div className="form-group">
        <label className="form__label" htmlFor="types">
          Write down its type:
        </label>
        <span className="form__label-aclaration">
          (separe by comma if it has two types)
        </span>
        <input
          className="form__input"
          id="types"
          type="text"
          value={pokemonData.types}
          onChange={editPokemonData}
          required
        />
      </div>
      <div className="form-group">
        <label className="form__label" htmlFor="abilities">
          Any special ability?
        </label>
        <span className="form__label-aclaration">
          (separe by comma if it has more than one ability)
        </span>
        <input
          className="form__input"
          id="abilities"
          type="text"
          value={pokemonData.abilities}
          onChange={editPokemonData}
        />
      </div>
      <button className="form__button" type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default PokemonForm;
