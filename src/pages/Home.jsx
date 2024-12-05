import { useContext, useState } from "react";
import { moviesContext } from "../provider/MoviesProvider";
import Movie from "../components/Movie";

const Home = () => {
  let { movies } = useContext(moviesContext);
  const [visibleData, setvisibleData] = useState(6)
  let moreMovies=movies.slice(0,visibleData)
  let handleSeeMore=()=>{
    setvisibleData(visibleData+6)
  }

  return (
    <div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 my-20 justify-items-center gap-5">
          {moreMovies.map((movie) => (
            <Movie key={movie._id} movie={movie}></Movie>
          ))}
                  <button className='btn text-center col-span-full bg-mainClr' onClick={handleSeeMore}>Show More</button>

        </div>

    </div>
  );
};

export default Home;
