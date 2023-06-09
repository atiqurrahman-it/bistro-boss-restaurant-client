import { createBrowserRouter, } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Authentication/Login/Login";
import SingUp from "../pages//Authentication/SingUP/SingUp";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<h1>error page </h1>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/sing-up',
          element:<SingUp></SingUp>
        },

      ]
    },
    {
      path:'dashboard/',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'my-cart',
          element:<MyCart></MyCart>
        },
        {
          path:'all-users',
          element:<AllUsers></AllUsers>
        },
      
      ]
    }
  ]);

  export default router