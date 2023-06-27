import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Main from "../pages/Home/Main";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <App></App>,
        }
      ]
    },
  ]);


  export default router;