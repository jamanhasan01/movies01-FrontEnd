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
  }, []);


  
  return (
    <div className="flex flex-col gap-4 my-20">
      {fvrtmovies.map((movie) => {
        return <div key={movie._id}>
          <div className="w-[600px] mx-auto flex">
            <div><img src={movie.poster} alt="" /></div>
            <div className="flex flex-col">
              <h3>{movie.title}</h3>
              <button className="btn">See Details</button>
              <button className="btn">See Details</button>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default FavMovies;
