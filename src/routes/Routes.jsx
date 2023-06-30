import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Main from "../pages/Layout/Home/Main";
import RegLayOut from "../pages/Layout/signIn/RegLayOut";
import Registration from "../pages/Layout/signIn/Registration/Registration";
import Login from "../pages/Layout/signIn/Login/Login";
import Blog from "../pages/Blog/Blog";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <App></App>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        }
      ]
    },
    {
      path: "/",
      element:<RegLayOut></RegLayOut>,
      children:[ 
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element:<Registration></Registration>,
        }
       ],
    }
  ]);


  export default router;