import { createBrowserRouter } from "react-router-dom";

import Home from "../Screen/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Artists from "../Screen/Artists/Artists";
import Designs from "../Screen/Designs/Designs";
import Packages from "../Screen/Packages/Packages";
import Gallery from "../Screen/Home/Gallery";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "designs",
        element: <Designs />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path:"gallery",
        element:<Gallery/>
      },
      {
        
      }
    ],
  },
]);

export default AppRouter;
