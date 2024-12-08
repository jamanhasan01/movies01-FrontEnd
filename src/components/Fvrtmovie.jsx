import { FaStar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FvrtMovie = ({ movie }) => {
  let { _id, title, poster, genre, duration, releaseYear, rating, email } =
  movie;

  let navigate=useNavigate()
  
  let hour = Math.floor(duration / 60);
  let sec = duration % 60;
  let handleDelete = () => {
    
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
      
  
    fetch(`https://movies01-backend.vercel.app/movies/${email}/${_id}`,{
      method:"DELETE"
    }).then((res)=>res.json())
    .then(data=>{
      if (data.deletedCount>0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        navigate('/favmovies')
      }
    }
    )
  }
  });
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
           {genre}
          </div>
          <p className="flex gap-1 items-center">
            <FaStar />
            {rating}
          </p>

          <button
            onClick={handleDelete}
            className="btn bg-mainClr text-wrap hover:bg-slate-100 hover:text-black/80"
          >
            Delete Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FvrtMovie;
