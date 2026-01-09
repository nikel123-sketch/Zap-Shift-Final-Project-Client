import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";

import AboutUs from "../../Pages/AboutUs/AboutUs";
import Coverage from "../../Pages/Coverage/Coverage";
import AuthLayout from "../../Layout/AuthLayout/AuthLayout";
import Login from "../../Pages/AuthPage/Login";
import Register from "../../Pages/AuthPage/Register";

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
        path: "coverage",
        loader:()=>fetch('/warehouses.json').then(res=>res.json()),
        Component: Coverage,
      },
    ],
  },
  {
    path:'auth',
    Component:AuthLayout,
    children:[
        {
            path:'login',
            Component:Login
        },
        {
            path:'register',
            Component:Register
        }
    ]
  }
]);