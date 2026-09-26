
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";

const Home = lazy(() => import("../Screen/Home/Home"));
const Artists = lazy(() => import("../Screen/Artists/Artists"));
const Designs = lazy(() => import("../Screen/Designs/Designs"));
const Packages = lazy(() => import("../Screen/Packages/Packages"));
const Gallery = lazy(() => import("../Screen/Gallery/Gallery"));
const Contact = lazy(() => import("../Screen/Contact/Contact"));
const About = lazy(() => import("../Screen/About/About"));

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
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

export default AppRouter;