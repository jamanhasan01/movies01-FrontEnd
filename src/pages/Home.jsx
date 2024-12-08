import { useContext, useState } from "react";
import { moviesContext } from "../provider/MoviesProvider";
import Movie from "../components/Movie";
import Slider from "../components/Slider";
import Upcomming from "../components/Upcomming";
import { Link } from "react-router-dom";

const Home = () => {
  let { movies } = useContext(moviesContext);
  const [isSorted, setIsSorted] = useState(false); // State to track sorting

  // Get the top 6 movies, sorted if `isSorted` is true
  const featuredMovies = [...movies]
    .sort((a, b) => (isSorted ? b.rating - a.rating : 0)) // Sort only when isSorted is true
    .slice(0, 6);

  // Toggle sorting when the button is clicked
  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  return (
    <div>
      {/* Slider Section */}
      <div className="my-20">
        <Slider></Slider>
      </div>

      {/* Featured Movies Section */}
      <div className="my-20">
        <h1 className="text-4xl text-center font-bold mb-10">Featured Movies</h1>
        <div className="text-right mb-5">
          <button
            className="btn bg-mainClr text-white"
            onClick={handleSort}
          >
            {isSorted ? "Show Default" : "Sort by Rating"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
          {featuredMovies.map((movie) => (
            <Movie key={movie._id} movie={movie}></Movie>
          ))}
        </div>
        <div className="w-full mx-auto text-center">
          <Link className="btn bg-mainClr" to={'/allmovies'}>
            See All Movies
          </Link>
        </div>
      </div>

      {/* Upcoming Movies Section */}
      <div className="my-20">
        <Upcomming></Upcomming>
      </div>
    </div>
  );
};

export default Home;
