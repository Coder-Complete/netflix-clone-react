import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.js";
// import Home from "./src/routes/Home.js";
import Root from "./routes/Root.js";
import MyList from "./routes/MyList.js";
import ErrorPage from "./routes/ErrorPage.js";
import "./index.css";

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
            element: <Home />,
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
