import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@fontsource/permanent-marker/index.css";
import "@fontsource-variable/roboto/index.css";
import "./styles/styles.css";
import AppRouter from "./router/AppRouter";
import PokemonContextProvider from "./pokemon/context/PokemonContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonContextProvider>
        <AppRouter />
      </PokemonContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
