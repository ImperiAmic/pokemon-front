import PokemonForm from "../../component/PokemonForm/PokemonForm";
import "./AddPokemonPage.css";

const AddPokemonPage: React.FC = () => {
  return (
    <main className="main-container">
      <div className="form-container">
        <h2 className="form__title">Add a Pokémon!</h2>
        <PokemonForm />
      </div>
    </main>
  );
};

export default AddPokemonPage;
