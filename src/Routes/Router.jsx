import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import ErrorElement from "../Pages/ErrorPage/ErrorElement";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home/Home";
import MoreAbout from "../Pages/MoreAbout/MoreAbout";
import Loading from "../Components/Loading/Loading";
import AuthLayouts from "../Layouts/AuthLayouts";
import Thana from "../Pages/Thana/Thana";
import TouristPlaces from "../Pages/TouristPlaces/TouristPlaces";
import FamousPeople from "../Pages/FamousPeople/FamousPeople";
import FamousFood from "../Pages/FamousFood/FamousFood";

import UpazilasLayout from "../Layouts/UpazilasLayout";
import Allupazilas from "../Pages/AllUpazilas/Allupazilas";
import DetailsFood from "../Pages/FamousFood/DetailsFood";
import DetailsPeople from "../Pages/FamousPeople/DetailsPeople";
import DetailsTouristPlace from "../Pages/TouristPlaces/DetailsTouristPlace";
import RiversOfBogura from "../Pages/RiverOfBogura/RiversOfBogura";
import RiverDetails from "../Pages/RiverOfBogura/RiverDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/thana",
        Component: Thana,
      },

      {
        path: "/touristPlaces",
        Component: TouristPlaces,
      },
      {
        path: "/touristPlaces/:id",
        Component: DetailsTouristPlace,
      },

      {
        path: "/famousPeople",
        Component: FamousPeople,
      },

      {
        path: "/famousPeople/:id",
        Component: DetailsPeople,
      },

      {
        path: "/rivers",
        Component: RiversOfBogura,
      },
      {
        path: "/rivers/:id",
        Component: RiverDetails,
      },

      {
        path: "/famousFood",
        Component: FamousFood,
      },
      {
        path: "/detailsFood/:id",
        Component: DetailsFood,
      },
      {
        path: "/moreAbout",
        Component: MoreAbout,
        loader: () => fetch("./moreAbout.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },

  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/",
    Component: UpazilasLayout,
    children: [
      {
        path: "/allUpazilas",
        Component: Allupazilas,
      },
    ],
  },
]);
