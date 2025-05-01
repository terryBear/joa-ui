import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/global.scss";
import { PrimeReactProvider } from "primereact/api";
import { SafariProvider } from "./Providers/SafariProvider.tsx";
import { SafariRouter } from "./Providers/RouteProvider.tsx";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <SafariProvider>
        <SafariRouter />
        <App />
      </SafariProvider>
    </PrimeReactProvider>
  </StrictMode>
);
