import FvrtMovie from "../components/fvrtmovie";
import Unavailable from "../components/Unavailable";

import { authContext } from "../provider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const FavMovies = () => {
  let { user } = useContext(authContext);
  const [fvrtmovies, setfvrtmovies] = useState([]);
  let email = user?.email;

  useEffect(() => {
    fetch(`https://movies01-backend.vercel.app/fvrtmovies/${email}`)
      .then((res) => res.json())
      .then((data) => setfvrtmovies(data));
  }, []);
if (!fvrtmovies) {
  return  <Unavailable></Unavailable>
}
  return (

        <div className=" space-y-2 pb-20 justify-items-center gap-5 ">
          {fvrtmovies.slice(0,10).map((movie) => (
            <FvrtMovie key={movie._id} movie={movie}></FvrtMovie>
          ))}
        {
          fvrtmovies.length > 10 && <button className="btn text-center col-span-full bg-mainClr">
            Show More
          </button>
        }
        </div>
     
  );
};

export default FavMovies;
