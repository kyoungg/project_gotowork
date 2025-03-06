import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";

const MainPage = lazy(() => import("./pages/home/Mainpage"));
const DaydreamPage = lazy(() => import("./pages/daydream/DaydreamPage"));
const DaydreamPointPage = lazy(() => import("./pages/daydream/PointPage"));
const DaydreamShopPage = lazy(() => import("./pages/daydream/ShopPage"));
const SpaceShopPage = lazy(() => import("./pages/spaceshop/SpaceshopPage"));
const SpaceShopPayPage = lazy(
  () => import("./pages/spaceshop/SpaceshopPayPage")
);
const SpaceShopDeliveryPage = lazy(
  () => import("./pages/spaceshop/SpaceShopDeliveryPage")
);

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
      { path: "daydream", element: <DaydreamPage /> },
      { path: "daydream/point", element: <DaydreamPointPage /> },
      { path: "daydream/shop", element: <DaydreamShopPage /> },
      { path: "spaceshop", element: <SpaceShopPage /> },
      { path: "spaceshop/pay", element: <SpaceShopPayPage /> },
      { path: "spaceshop/delivery", element: <SpaceShopDeliveryPage /> },
    ],
  },
]);

export default function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
