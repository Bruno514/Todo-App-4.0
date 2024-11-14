import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { StyleReset } from "./global/css-reset.ts";
import { GlobalStyle } from "./global/fonts.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleReset />
    <GlobalStyle />

    <App />
  </StrictMode>
);
