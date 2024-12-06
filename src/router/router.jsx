import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Addmovies from "../pages/Addmovies";
import Allmovies from "../pages/Allmovies";
import FavMovies from "../pages/FavMovies";
import PrivetRoute from "./PrivetRoute";



let router=createBrowserRouter([
    {
        path:'/',
        loader:()=>fetch('https://movies01-backend.vercel.app/movies'),
        element:<Root></Root>,
       
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            {
                path:'addmovies',
                element:<PrivetRoute><Addmovies></Addmovies></PrivetRoute>
            },
            {
                path:'allmovies',
                element:<Allmovies></Allmovies>,
                
            },
            {
                path:'/favmovies',
                element:<FavMovies></FavMovies>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default router