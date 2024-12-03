import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";

let router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>
    }
])

export default router