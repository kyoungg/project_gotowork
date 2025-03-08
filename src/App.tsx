import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout";
import NothingLayout from "./layout/NothingLayout";

const MainPage = lazy(() => import("./pages/home/MainPage"));
const WastePage = lazy(() => import("./pages/home/WastePage"));
const TamraPage = lazy(() => import("./pages/train/TamraPage"));
const MokpoPage = lazy(() => import("./pages/train/MokpoPage"));
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
      { path: "waste", element: <WastePage /> },
      { path: "train/mokpo", element: <MokpoPage /> },
      { path: "daydream", element: <DaydreamPage /> },
      { path: "daydream/point", element: <DaydreamPointPage /> },
      { path: "daydream/shop", element: <DaydreamShopPage /> },
      { path: "spaceshop", element: <SpaceShopPage /> },
      { path: "spaceshop/pay", element: <SpaceShopPayPage /> },
      { path: "spaceshop/delivery", element: <SpaceShopDeliveryPage /> },
    ],
  },
  {
    path: "/",
    element: <NothingLayout />,
    errorElement: <a>im error!</a>,
    children: [{ path: "train/tamra", element: <TamraPage /> }],
  },
]);

export default function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
