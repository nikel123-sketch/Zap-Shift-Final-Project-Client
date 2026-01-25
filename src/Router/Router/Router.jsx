import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";

import AboutUs from "../../Pages/AboutUs/AboutUs";
import Coverage from "../../Pages/Coverage/Coverage";
import AuthLayout from "../../Layout/AuthLayout/AuthLayout";
import Login from "../../Pages/AuthPage/Login";
import Register from "../../Pages/AuthPage/Register";
import BaRider from "../../Pages/BaRider/BaRider";
import PrivateRout from "../PrivateRout/PrivateRout";
import Pricing from "../../Pages/Pricing/Pricing";
import SandParcel from "../../Pages/SandParcel/SandParcel";
import DasbordLayout from "../../Layout/DasbordLayout/DasbordLayout";
import MyParcel from "../../Pages/Dasbord/MyParcel/MyParcel";
import Pay from "../../Pages/Dasbord/Pay/Pay";
import PaySuccess from "../../Pages/Dasbord/Pay/PaySuccess";
import PayCancel from "../../Pages/Dasbord/Pay/PayCancel";
import PaymentHistory from "../../Pages/Dasbord/PaymentHistory/PaymentHistory";
import AproveRiders from "../../Layout/DasbordLayout/AproveRiders";
import UserManagement from "../../Layout/DasbordLayout/UserManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "aboutus",
        Component: AboutUs,
      },
      {
        path: "pricing",
        Component: Pricing,
      },
      {
        path: "sandparcel",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        // Component: SandParcel,
        element: (
          <PrivateRout>
            <SandParcel></SandParcel>
          </PrivateRout>
        ),
      },
      {
        path: "coverage",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        Component: Coverage,
      },
      {
        path: "barider",
        // Component: BaRider,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        element: (
          <PrivateRout>
            <BaRider></BaRider>
          </PrivateRout>
        ),
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },

  {
    path: "/dasbord",
    element: (
      <PrivateRout>
        <DasbordLayout></DasbordLayout>
      </PrivateRout>
    ),
    children: [
      {
        path: "myparcel",
        Component: MyParcel,
      },
      {
        path: "pay/:parcelId",
        Component: Pay,
      },
      {
        path: "PaySuccess",
        Component: PaySuccess,
      },
      {
        path: "PayCancel",
        Component: PayCancel,
      },
      {
        path: "paymenthistory",
        Component: PaymentHistory,
      },
      {
        path: "aproveRiders",
        Component: AproveRiders,
      },
      {
        path:'UserManagement',
        Component:UserManagement
      }
    ],
  },
]);