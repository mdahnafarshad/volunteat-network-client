

import {
  createBrowserRouter
} from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import Donation from "../pages/Donation/Donation";
import DonationList from "../pages/DonationList/DonationList";
import Banner from "../pages/Layout/Home/home/Banner";
import Main from "../pages/Layout/Home/Main";
import Login from "../pages/Layout/signIn/Login/Login";
import Registration from "../pages/Layout/signIn/Registration/Registration";
import RegLayOut from "../pages/Layout/signIn/RegLayOut";
import PrivateRout from "./PrivateRout";

  

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Banner></Banner>,
            loader: ()=>fetch('https://volunteer-network-server-flax.vercel.app/cards')
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/donations/:id",
          element: <PrivateRout><Donation></Donation></PrivateRout>,
          loader: ({params})=> fetch(`https://volunteer-network-server-flax.vercel.app/donate/${params.id}`)
        },
        {
          path: "/donationList",
          element: <PrivateRout><DonationList></DonationList></PrivateRout>,
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