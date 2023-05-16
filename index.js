import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const container = document.querySelector("#root");

const root = createRoot(container);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
