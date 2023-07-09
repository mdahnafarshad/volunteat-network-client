import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../pages/Layout/Home/Main";
import RegLayOut from "../pages/Layout/signIn/RegLayOut";
import Registration from "../pages/Layout/signIn/Registration/Registration";
import Login from "../pages/Layout/signIn/Login/Login";
import Blog from "../pages/Blog/Blog";
import Banner from "../pages/Layout/Home/home/Banner";
import Donation from "../pages/Donation/Donation";
import PrivateRout from "./PrivateRout";
import DonationList from "../pages/DonationList/DonationList";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Banner></Banner>,
            loader: ()=>fetch('http://localhost:5000/cards')
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/donations/:id",
          element: <PrivateRout><Donation></Donation></PrivateRout>,
          loader: ({params})=> fetch(`http://localhost:5000/donate/${params.id}`)
        },
        {
          path: "/donationList",
          element: <DonationList></DonationList>,
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