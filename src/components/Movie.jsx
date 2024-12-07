import { FaStar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
const Movie = ({ movie }) => {
  let { user } = useContext(authContext);
  let navigate = useNavigate();
  let { _id, title, poster, genres, duration, releaseYear, rating, } =
    movie;

  let hour = Math.floor(duration / 60);
  let sec = duration % 60;

  const handleNavigation = () => {
    if (user) {
      navigate(`/moviedetails/${_id}`);
    } else {
      toast.warn("You have to Login first");
      navigate("/signin");
    }
  };

  return (
    <div className="w-full p-5 bg-black/30   rounded-2xl">
      <div className="flex h-full   gap-4">
        <img
          className="max-w-[150px] h-full  rounded-2xl "
          src={poster}
          alt=""
        />
        <div className="flex flex-col gap-2 justify-between">
          <p className="text-sm">{releaseYear}</p>
          <h3 className="text-2xl">{title}</h3>
          <h4 className="flex gap-1 items-center">
            <FaStopwatch />
            {`${hour} hour ${sec} min`}
          </h4>
          <div className="flex gap-2 text-sm">
            <p>{genres ? genres[0] : "sry"}</p>
            <p>{genres ? genres[0] : "sry"}</p>
            <p>{genres ? genres[0] : "sry"}</p>
          </div>
          <p className="flex gap-1 items-center">
            <FaStar />
            {rating}
          </p>

          <button
            onClick={handleNavigation}
            className="btn bg-mainClr text-wrap hover:bg-slate-100 hover:text-black/80"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
