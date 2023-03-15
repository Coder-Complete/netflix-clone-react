import React, { StrictMode } from "react";

import App from "./src/App.js";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#root");

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
