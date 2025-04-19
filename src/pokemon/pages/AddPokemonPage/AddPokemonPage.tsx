import PokemonForm from "../../component/PokemonForm/PokemonForm";
import usePokemon from "../../hooks/usePokemon";
import "./AddPokemonPage.css";

const AddPokemonPage: React.FC = () => {
  const { createPokemon } = usePokemon();

  return (
    <main className="main-container">
      <div className="form-container">
        <h2 className="form__title">Add a Pokémon!</h2>
        <PokemonForm action={createPokemon} />
      </div>
    </main>
  );
};

export default AddPokemonPage;
