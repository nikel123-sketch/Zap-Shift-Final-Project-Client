import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import Navber from "../../Shared/Navber/Navber";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                index:true,               
                Component:HomeLayout
            },
            {
                path:'navber',
                Component:Navber
            }
        ]
    }
])