import { FaStar } from 'react-icons/fa'
import { FaStopwatch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../provider/AuthProvider'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const Movie = ({ movie }) => {
  const { user } = useContext(authContext)
  const navigate = useNavigate()
  const { _id, title, poster, genre, duration, releaseYear, rating, summary } = movie

  const hour = Math.floor(duration / 60)
  const sec = duration % 60

  const handleNavigation = () => {
    if (user) {
      navigate(`/moviedetails/${_id}`)
    } else {
      toast.warn('You have to Login first')
      navigate('/signin')
    }
  }

  return (
    <button
      onClick={handleNavigation}
     
    >
      <div className=''>
        <div className='flex flex-col  h-full border border-gray-700 rounded-2xl p-2 w-full  gap-2'>
          <img className='w-full max-h-64  rounded-2xl' src={poster} alt={`${title} poster`} />
          <div className='flex  w-full gap-2 justify-between'>
            <h3 className='text-base text-left'>{title.slice(0,15)}</h3>

            <p className='flex gap-1 items-center'>
              <FaStar />
              {rating}
            </p>
          </div>
          <div className='flex justify-between'>
           <p>
             {genre}
           </p>
           <p>{releaseYear}</p>
          </div>
        </div>
      </div>
    </button>
  )
}

export default Movie
