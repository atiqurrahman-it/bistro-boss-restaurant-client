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
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ItemEdit from "../pages/Dashboard/ManageItem/ItemEdit";
import Booking from "../pages/Dashboard/Booking/Booking";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path:'/contactUs',
          element:<ContactUs></ContactUs>
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
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'my-cart',
          element:<MyCart></MyCart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        // admin routes 
        {
          path:'adminHome',
          element:<AdminRoute> <AdminHome></AdminHome> </AdminRoute>
        },
        
        {
          path:'addItem',
          element:<AdminRoute> <AddItem></AddItem> </AdminRoute>
        },
        {
          path:'itemEdit',
          element:<AdminRoute> <ItemEdit></ItemEdit> </AdminRoute>
        },
        {
          path:"manageItems",
          element:<AdminRoute> <ManageItem></ManageItem> </AdminRoute>
        },
        {
          path:"booking",
          element:<AdminRoute> <Booking></Booking> </AdminRoute>
        },
        {
          path:'all-users',
          element:<AdminRoute> <AllUsers></AllUsers> </AdminRoute>
        },
      
      ]
    }
  ]);

  export default router