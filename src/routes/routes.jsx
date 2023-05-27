import { createBrowserRouter, } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../pages/Home/Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<h1>error page </h1>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router