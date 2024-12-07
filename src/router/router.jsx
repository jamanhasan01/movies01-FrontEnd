import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Addmovies from "../pages/Addmovies";
import Allmovies from "../pages/Allmovies";
import FavMovies from "../pages/FavMovies";
import PrivetRoute from "./PrivetRoute";
import MovieDetails from "../components/MovieDetails";
import ErrorPage from "../components/ErrorPage";



let router=createBrowserRouter([
    {
        path:'/',
        loader:()=>fetch('http://localhost:5000/movies'),
        element:<Root></Root>,
       errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivetRoute><FavMovies></FavMovies></PrivetRoute>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/moviedetails/:id',
                loader:({params})=> fetch(`http://localhost:5000/movies/${params.id}`),
                element:<MovieDetails></MovieDetails>,
            }
        ]
    }
])

export default router