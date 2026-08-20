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
import MoreDetailsInPopularPlace from "../Pages/MoreDetailsInPopularPlace/MoreDetailsInPopularPlace";
import UpazilasLayout from "../Layouts/UpazilasLayout";
import Allupazilas from "../Pages/AllUpazilas/Allupazilas";
import DetailsFood from "../Pages/FamousFood/DetailsFood";
import DetailsPeople from "../Pages/FamousPeople/DetailsPeople";
import DetailsTouristPlace from "../Pages/TouristPlaces/DetailsTouristPlace";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/importantPlace.json");
          return res.json();
        },
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/moreAbout",
        Component: MoreAbout,
        loader: () => fetch("./moreAbout.json"),
        hydrateFallbackElement: <Loading></Loading>,
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
        path: "/famousFood",
        Component: FamousFood,
      },
      {
        path: "/detailsFood/:id",
        Component: DetailsFood,
      },
    ],
  },
  {
    path: "/moreDetailsInPopularPlace/:id",
    loader: async ({ params }) => {
      const res = await fetch("/importantPlace.json");
      const data = await res.json();
      const singlePlace = data.find(
        (item) => String(item.id) === String(params.id),
      );

      return singlePlace;
    },
    Component: MoreDetailsInPopularPlace,
    hydrateFallbackElement: <Loading></Loading>,
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
