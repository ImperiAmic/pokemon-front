import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <div className="main-header__text-container">
          <h1 className="main-header__title">Pokédex</h1>
          <span className="main-header__text">Gotta manage 'em all!</span>
        </div>
        <img
          className="main-header__pokemon"
          src="/mew.svg"
          alt="Pokémon Mew joyfuly floating"
          height={100}
          width={92}
        />
      </div>
    </header>
  );
};

export default Header;
