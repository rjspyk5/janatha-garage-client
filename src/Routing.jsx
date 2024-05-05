import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { Blog } from "./Pages/Blog";
import { Cheakout } from "./Pages/Cheakout";
import { MyBookings } from "./Pages/MyBookings";
import { ErrorPage } from "./Pages/ErrorPage";
import { ServiceSection } from "./Components/ServiceSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Cheakout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <ServiceSection />,
      },
    ],
  },
]);
