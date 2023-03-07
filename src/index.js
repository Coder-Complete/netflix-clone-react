import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import App from "./App.js";
import ErrorPage from "./routes/error-page.js";
import Home from "./routes/home.js";
import MyList from "./routes/my-list.js";
import React from "react";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="browse" />,
  },
  {
    path: "/browse",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
