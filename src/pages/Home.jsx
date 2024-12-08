import { useContext, useState } from "react";
import { moviesContext } from "../provider/MoviesProvider";
import Movie from "../components/Movie";
import Slider from "../components/Slider";
import Upcomming from "../components/Upcomming";

const Home = () => {
  let { movies } = useContext(moviesContext);
  const [visibleData, setvisibleData] = useState(6);
  let moreMovies = movies.slice(0, visibleData);
  let handleSeeMore = () => {
    setvisibleData(visibleData + 6);
  };

  return (
    <div>
      <div className="my-20">
        <Slider></Slider>
      </div>
     <div className="my-20 ">
      <h1 className="text-4xl text-center font-bold mb-10">Featured Movies</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
        {moreMovies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      { visibleData>6 &&  <button
          className="btn text-center col-span-full bg-mainClr"
          onClick={handleSeeMore}
        >
          Show More
        </button>}
      </div>
     </div>
      <div className="my-20">
          <Upcomming></Upcomming>
      </div>
    </div>
  );
};

export default Home;
