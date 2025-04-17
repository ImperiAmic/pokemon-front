import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokedexPage from "../pokemon/pages/PokedexPage/PokedexPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/pokedex"} />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
