import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Root/Root";
import Home from "../src/Pages/Home/Home";
import UpcomingEvents from "../src/Pages/UpcomingEvents/UpcomingEvents";
import Register from "../src/Pages/Register/Register";
import Login from "../src/Pages/Login/Login";
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>,
          element:<Home></Home>
        },{
            path:'/UpcomingEvents',
            element:<UpcomingEvents></UpcomingEvents>
        },{
            path:"/register",
            element:<Register></Register>
        },{
            path:"/login",
            element:<Login></Login>
        }
    ]
  },
]);