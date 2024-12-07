import FvrtMovie from "../components/fvrtmovie";

import { authContext } from "../provider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const FavMovies = () => {
  let { user } = useContext(authContext);
  const [fvrtmovies, setfvrtmovies] = useState([]);
  let email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/fvrtmovies/${email}`)
      .then((res) => res.json())
      .then((data) => setfvrtmovies(data));
  }, [fvrtmovies]);

 

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 py-20 justify-items-center gap-5'>

      {
          fvrtmovies.map((movie)=><FvrtMovie key={movie._id} movie={movie}></FvrtMovie>)
      }
      <button className='btn text-center col-span-full bg-mainClr' >Show More</button>
  </div>
  );
};

export default FavMovies;
