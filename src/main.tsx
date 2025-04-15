import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/permanent-marker/index.css";
import "@fontsource-variable/roboto/index.css";
import App from "./components/App/App";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
