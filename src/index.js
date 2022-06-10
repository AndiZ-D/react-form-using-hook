import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import MultiInputForm from "./MultiInputForm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <MultiInputForm />
  </StrictMode>
);
