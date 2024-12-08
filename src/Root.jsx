import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; 
import { useContext, useEffect } from "react";
import { moviesContext } from "./provider/MoviesProvider";

const Root = () => {
  const navigation = useNavigation();
  let moviesData=useLoaderData()

  let {setmovies,setloading,loading}=useContext(moviesContext)
  useEffect(()=>{
    setmovies(moviesData)
    setloading(false)
  },[moviesData])
 
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="max-w-[1240px] mt-36 mx-auto px-5 md:px-0 min-h-[350px]">
        {navigation.state  === "loading" ? <Loading /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
