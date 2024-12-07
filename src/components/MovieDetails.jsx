import { useContext } from "react";
import { FaStar } from "react-icons/fa"
import { FaStopwatch } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MovieDetails = () => {
  let {user}=useContext(authContext)
  let navigate=useNavigate()
  console.log(user);
  let email=user.email
  
 let movie= useLoaderData()

  let { _id,  title, poster, genres, duration, releaseYear, rating, summary } =
  movie;

  let movieObj={ title, poster, genres, duration, releaseYear, rating, summary,email}
console.log(movieObj);

let hour = Math.floor(duration / 60);
let sec= duration%60

let handleDeletedMovie=()=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    

  fetch(`http://localhost:5000/movies/${_id}`,{
    method:"DELETE"
  }).then((res)=>res.json())
  .then(data=>{
    if (data.deletedCount>0) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      navigate('/allmovies')
    }
  }
  )
}
});
}

  let handleFvrtList=()=>{
    fetch(`http://localhost:5000/fvrtmovies`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(movieObj)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('This card has been added to favorate list')
        navigate('/favmovies')
      }
    } 
    )
  }

  return (
    <div className="w-full py-20">
      <div className="max-w-[600px]  mx-auto p-5 bg-black/30   rounded-2xl">
      <div className="flex flex-col md:flex-row gap-4">
        <img className="w-full rounded-2xl " src={poster} alt="" />
        <div className="flex flex-col gap-2 justify-between">
            <p className="text-sm">{releaseYear}</p>
          <h3 className="text-2xl">{title}</h3>
          <h4 className="flex gap-1 items-center"><FaStopwatch/>{`${hour} hour ${sec} min`}</h4>
          <div className="flex gap-2 text-sm">
            {/* <p>{genres?genres[0]:"sry"}</p>
            <p>{genres?genres[1]:"sry"}</p>
            <p>{genres?genres[2]:"sry"}</p>
           */}
          </div>
          <p className="text-sm"> 
            {summary}
          </p>
          <p className="flex gap-1 items-center"><FaStar/>{rating}</p>
          <div className="flex gap-3">
         <button onClick={handleDeletedMovie} className="btn bg-mainClr text-wrap hover:bg-slate-100 hover:text-black/80">Delete Movie</button>
          <button onClick={handleFvrtList} className="btn bg-mainClr text-wrap hover:bg-slate-100 hover:text-black/80">Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
