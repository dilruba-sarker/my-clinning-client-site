import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Root/Root";
import Home from "../src/Pages/Home/Home";
import UpcomingEvents from "../src/Pages/UpcomingEvents/UpcomingEvents";
import Register from "../src/Pages/Register/Register";
import Login from "../src/Pages/Login/Login";
import CreateEvent from "../src/Pages/CreateEvent/CreateEvent";
import PrivateRoute from "../src/Private/PrivateRoute";
import ManageEvents from "../src/Pages/ManageEvents/ManageEvents";
import JoinedEvents from "../src/Pages/JoinedEvents/JoinedEvents";
import CardDetails from "../src/Pages/UpcomingEvents/CardDetails";
import UpdateEvent from "../src/Components/UpdateEvent/UpdateEvent";
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
            element:<UpcomingEvents></UpcomingEvents>,
            // loader:()=>fetch(`${import.meta.env.VITE_API_URL}/roads`)
        },{
path:'/UpcomingEvents/:id',
element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/roads/${params.id}`)
        },
        
        {
            path:"/register",
            element:<Register></Register>
        },{
            path:"/login",
            element:<Login></Login>
        },{
            path:"/create-event",
            element:<PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
        },{
            path:"/manage-events",
            element:<PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>
        },{
            path:"/joined-events",
            element:<PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>,
            
        },{
            path:'update/:id',
            element:<UpdateEvent></UpdateEvent>
        }
    ]
  },
]);