import { FaStar, FaStopwatch, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FvrtMovie = ({ movie }) => {
  const { _id, title, poster, genre, duration, releaseYear, rating, email } = movie;
  const navigate = useNavigate();

  // Handle if genre is array or string
  const genreDisplay = Array.isArray(genre) ? genre.join(', ') : genre;

  // Duration fallback if missing or zero
  const hour = duration ? Math.floor(duration / 60) : 0;
  const min = duration ? duration % 60 : 0;

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movies01-backend.vercel.app/fvrtmovies/${email}/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your movie has been deleted.',
                icon: 'success',
              });
              navigate('/favmovies');
            }
          });
      }
    });
  };

  return (
    <>
   <div>
       {/* Mobile View (Card) */}
      <div className="lg:hidden mb-4 bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <div className="flex p-4">
          <div className="flex-shrink-0 mr-4">
            <img
              src={poster}
              alt={title}
              className="w-20 h-28 object-cover rounded-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/80x112?text=No+Poster';
              }}
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-300">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{rating || 'N/A'}</span>
              </div>
              <div className="flex items-center">
                <FaStopwatch className="text-blue-400 mr-1" />
                <span>{hour > 0 || min > 0 ? `${hour}h ${min}m` : 'N/A'}</span>
              </div>
              <div>Year: {releaseYear || 'N/A'}</div>
              <div>Genre: {genreDisplay || 'N/A'}</div>
            </div>
            <button
              onClick={handleDelete}
              className="mt-3 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
            >
              <FaTrash className="mr-1" /> Delete
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View (Table Row) */}
      <tr className="hidden lg:table-row border-b border-gray-700 bg-gray-800 hover:bg-gray-700 transition-colors">
        <td className="px-4 py-3 align-middle">
          <img
            src={poster}
            alt={title}
            className="w-16 h-24 object-cover rounded-md mx-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/64x96?text=No+Poster';
            }}
          />
        </td>
        <td className="px-4 py-3 font-medium text-white align-middle text-center">{title}</td>
        <td className="px-4 py-3 text-gray-300 align-middle text-center">{releaseYear || 'N/A'}</td>
        <td className="px-4 py-3 text-gray-300 align-middle">
          <div className="flex items-center justify-center gap-1">
            <FaStopwatch className="text-blue-400" />
            {hour > 0 || min > 0 ? `${hour}h ${min}m` : 'N/A'}
          </div>
        </td>
        <td className="px-4 py-3 text-gray-300 align-middle text-center">{genreDisplay || 'N/A'}</td>
        <td className="px-4 py-3 text-gray-300 align-middle">
          <div className="flex items-center justify-center gap-1">
            <FaStar className="text-yellow-400" />
            {rating || 'N/A'}
          </div>
        </td>
        <td className="px-4 py-3 align-middle">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-1 mx-auto"
          >
            <FaTrash /> Delete
          </button>
        </td>
      </tr>
   </div>
    </>
  );
};

export default FvrtMovie;