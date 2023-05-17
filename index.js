import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/routes/App.js";
import MyList from "./src/routes/MyList.js";
import ErrorPage from "./src/routes/ErrorPage.js";
import "./index.css";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/browse/my-list",
        element: <MyList />,
      },
    ],
  },
]);

const container = document.querySelector("#root");

const root = createRoot(container);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
