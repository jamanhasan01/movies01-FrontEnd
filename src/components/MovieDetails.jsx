import { FaStar } from "react-icons/fa"
import { FaStopwatch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
 let movie= useLoaderData()
  let { _id, title, poster, genres, duration, releaseYear, rating, summary } =
  movie;


let hour = Math.floor(duration / 60);
let sec= duration%60

  let handleFvrtList=()=>{
    fetch(`http://localhost:5000/fvrtmovies`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      }
    })
    .then(res=>res.json)
    .then(data=>console.log(data)
    )
  }

  return (
    <div className="w-full max-w-[600px] my-20 mx-auto p-5 bg-black/30   rounded-2xl">
      <div className="flex flex-col md:flex-row gap-4">
        <img className="w-full rounded-2xl " src={poster} alt="" />
        <div className="flex flex-col gap-2 justify-between">
            <p className="text-sm">{releaseYear}</p>
          <h3 className="text-2xl">{title}</h3>
          <h4 className="flex gap-1 items-center"><FaStopwatch/>{`${hour} hour ${sec} min`}</h4>
          <div className="flex gap-2 text-sm">
            <p>{genres[0]}</p>
            <p>{genres[1]}</p>
            <p>{genres[2]}</p>
          </div>
          <p className="text-sm"> 
            {summary}
          </p>
          <p className="flex gap-1 items-center"><FaStar/>{rating}</p>
          <div className="flex gap-3">
         <button className="btn bg-mainClr text-wrap hover:bg-slate-100 hover:text-black/80">Delete Movie</button>
          <button onClick={handleFvrtList} className="btn bg-mainClr text-wrap hover:bg-slate-100 hover:text-black/80">Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
