import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Root = () => {
 
  
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="max-w-[1240px] mx-auto px-5 md:px-0">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root