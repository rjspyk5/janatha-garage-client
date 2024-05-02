import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
