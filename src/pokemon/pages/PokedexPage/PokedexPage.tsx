import "./PokedexPage.css";

const PokedexPage: React.FC = () => {
  return (
    <main className="main-container">
      <div className="pokedex-container">
        <h2 className="pokedex__title">Your Pokédex!</h2>
        <span className="pokedex__counter">Current Pokémon count: 0</span>
      </div>
    </main>
  );
};

export default PokedexPage;
