import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokedexPage from "../pokemon/pages/PokedexPage/PokedexPage";
import NotFoundPage from "../pages/NotFoundPage";
import AddPokemonPage from "../pokemon/pages/AddPokemonPage/AddPokemonPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/pokedex"} />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="add-pokemon" element={<AddPokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
