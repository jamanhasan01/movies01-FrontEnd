import { FaStar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const Movie = ({ movie }) => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const { _id, title, poster, genres, duration, releaseYear, rating, summary } = movie;

  const hour = Math.floor(duration / 60);
  const sec = duration % 60;

  const handleNavigation = () => {
    if (user) {
      navigate(`/moviedetails/${_id}`);
    } else {
      toast.warn("You have to Login first");
      navigate("/signin");
    }
  };

  // Truncate the summary if it exceeds 100 characters
  const truncateSummary = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="w-full p-5 bg-black/30 rounded-2xl">
      <div className="flex h-full w-full gap-4">
        <img
          className="max-w-[150px] w-full h-full rounded-2xl"
          src={poster}
          alt={`${title} poster`}
        />
        <div className="flex flex-col w-full gap-2 justify-between">
          <p className="text-sm">{releaseYear}</p>
          <h3 className="text-2xl">{title}</h3>
          <h4 className="flex gap-1 items-center">
            <FaStopwatch />
            {`${hour} hour ${sec} min`}
          </h4>
          <div className="flex gap-2 text-sm">
            {genres?.slice(0, 3).map((genre, index) => (
              <p key={index}>{genre}</p>
            ))}
          </div>
          <p className="text-sm break-words">
            {truncateSummary(summary, 100)}
          </p>
          <p className="flex gap-1 items-center">
            <FaStar />
            {rating}
          </p>
          <button
            onClick={handleNavigation}
            className="btn bg-mainClr hover:bg-slate-100 hover:text-black/80"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
