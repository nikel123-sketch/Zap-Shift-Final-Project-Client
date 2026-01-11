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
        loader:()=>fetch('/warehouses.json').then(res=>res.json()),
        Component:SandParcel
      },
      {
        path: "coverage",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        Component: Coverage,
      },
      {
        path: "barider",
        // Component: BaRider,
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
    path:'/dasbord',
    element:<PrivateRout><DasbordLayout></DasbordLayout></PrivateRout>,
    children:[
      {
        path:'myparcel',
        Component:MyParcel
      }
    ]

  }
]);