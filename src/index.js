import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import MovieProvider from "./store/MovieStore";
import NominationProvider from "./store/NominationStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MovieProvider >
      {/* <NominationProvider > */}
      <App />
      {/* </NominationProvider> */}
    </ MovieProvider>
  </StrictMode>
);
