import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";

const MainPage = lazy(() => import("./pages/home/Mainpage"));
const DaydreamPage = lazy(() => import("./pages/daydream/DaydreamPage"));
const PointPage = lazy(() => import("./pages/daydream/PointPage"));
const SpaceshopPage = lazy(() => import("./pages/spaceshop/SpaceshopPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <a>im error!</a>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "daydream",
        element: <DaydreamPage />,
      },
      { path: "daydream/point", element: <PointPage /> },
      { path: "daydream/shop", element: <PointPage /> },
      {
        path: "spaceshop",
        element: <SpaceshopPage />,
      },
    ],
  },
]);

export default function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
