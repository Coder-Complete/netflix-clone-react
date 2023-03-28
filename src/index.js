import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import React, { createContext, useState } from "react";

import App from "./App.js";
import ErrorPage from "./routes/error-page.js";
import Home from "./routes/home.js";
import Login from "./routes/login.js";
import MyList from "./routes/my-list.js";
import { createRoot } from "react-dom/client";

export const UserContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="browse" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/browse",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/browse/my-list",
        element: <MyList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function Everything() {
  const [user, setUser] = useState("");

  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

const container = document.querySelector("#root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Everything />
  </React.StrictMode>
);
