import Navigator from "../Navigator/Navigator";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <div className="main-header__brand-container">
          <div className="main-header__text-container">
            <h1 className="main-header__title">Pokédex</h1>
            <span className="main-header__claim">Gotta manage 'em all!</span>
          </div>
          <img
            className="main-header__image"
            src="/mew.svg"
            alt="Pokémon Mew joyfuly floating"
            height={100}
            width={92}
          />
        </div>
        <Navigator />
      </div>
    </header>
  );
};

export default Header;
