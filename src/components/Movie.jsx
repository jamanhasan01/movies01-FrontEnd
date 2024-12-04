import { FaStar } from "react-icons/fa"
import { FaStopwatch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  let { _id, title, poster, genres, duration, releaseYear, rating, summary } =
    movie;
 
  
  let hour = Math.floor(duration / 60);
  let sec= duration%60
  

  return (
    <div className="w-full p-5 bg-black/30   rounded-2xl">
      <div className="flex  gap-4">
        <img className="max-w-[150px] rounded-2xl " src={poster} alt="" />
        <div className="flex flex-col gap-2 justify-between">
            <p className="text-sm">{releaseYear}</p>
          <h3 className="text-2xl">{title}</h3>
          <h4 className="flex gap-1 items-center"><FaStopwatch/>{`${hour} hour ${sec} min`}</h4>
          <div className="flex gap-2 text-sm">
            <p>{genres[0]}</p>
            <p>{genres[1]}</p>
            <p>{genres[2]}</p>
          </div>
          <p className="flex gap-1 items-center"><FaStar/>{rating}</p>
          <Link to=''><button className="btn bg-mainClr text-wrap hover:bg-slate-100 hover:text-black/80">See Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
