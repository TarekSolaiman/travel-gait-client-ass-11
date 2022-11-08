import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/MainPage/Main";
import AddServices from "../Component/Pages/AddServices/AddServices";
import AllServices from "../Component/Pages/AllServices/AllServices";
import Blog from "../Component/Pages/BlogPage/Blog";
import Error from "../Component/Pages/ErrorPage/Error";
import Home from "../Component/Pages/HomePage/Home";
import Login from "../Component/Pages/LoginPage/Login";
import MyReviow from "../Component/Pages/MyReviow/MyReviow";
import Register from "../Component/Pages/RegisterPage/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/addservices",
        element: <AddServices />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/reviows",
        element: <MyReviow />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <Register />,
      },
    ],
  },
]);
