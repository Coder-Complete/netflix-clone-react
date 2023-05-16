import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App.js";
// import Home from "./src/routes/Home.js";
import Root from "./src/routes/Root.js";
import MyList from "./src/routes/MyList.js";
import ErrorPage from "./src/routes/ErrorPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            // path: "browse",
            element: <App />,
          },
          {
            path: "browse/my-list",
            element: <MyList />,
          },
        ],
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
