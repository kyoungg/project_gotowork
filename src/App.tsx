import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout";
import NothingLayout from "./layout/NothingLayout";
import ProtectedRoute from "./assets/routes/ProtectedRoute";

const MainPage = lazy(() => import("./pages/home/MainPage"));
const MainLoginPage = lazy(() => import("./pages/home/MainLoginPage"));
const WastePage = lazy(() => import("./pages/home/WastePage"));
const MyComputerPage = lazy(() => import("./pages/home/MyComputer"));
const MokpoPage = lazy(() => import("./pages/train/MokpoPage"));
const TamraPage = lazy(() => import("./pages/train/TamraPage"));
const AltarPage = lazy(() => import("./pages/train/AltarPage"));
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
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
        ],
      },
      { path: "waste", element: <WastePage /> },
      { path: "mycomputer", element: <MyComputerPage /> },
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
    children: [
      { path: "login", element: <MainLoginPage /> },
      { path: "train/tamra", element: <TamraPage /> },
      { path: "train/altar", element: <AltarPage /> },
    ],
  },
]);

export default function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
