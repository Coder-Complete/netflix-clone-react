import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.js";
import ErrorPage from "./routes/errorPage.js";
import Home from "./Home.js";
import MyList from "./MyList.js";
// import ErrorPage from "./routes/error-page.js";
import React from "react";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "my-list", element: <MyList /> },
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
