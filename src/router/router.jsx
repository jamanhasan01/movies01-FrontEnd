import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Addmovies from "../pages/Addmovies";
import Allmovies from "../pages/Allmovies";
import FavMovies from "../pages/FavMovies";

let router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'addmovies',
                element:<Addmovies></Addmovies>
            },
            {
                path:'allmovies',
                element:<Allmovies></Allmovies>,
                loader:()=>fetch('https://movies01-backend.vercel.app/movies')
                
            },
            {
                path:'favmovies',
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