import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import ErrorElement from "../Pages/ErrorPage/ErrorElement";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import MoreAbout from "../Pages/MoreAbout/MoreAbout";
import Loading from "../Components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        loader: () => fetch("./importantPlace.json"),
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },

  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/moreAbout",

    Component: MoreAbout,
    loader: () => fetch("./moreAbout.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
]);
