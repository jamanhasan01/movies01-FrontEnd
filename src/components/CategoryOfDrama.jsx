
import Movie from './Movie'
import { useEffect, useState } from 'react'

const CategoryOfDrama = () => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    fetch(`https://movies01-backend.vercel.app/category/drama`)
      .then((res) => res.json())
      .then((data) => setmovies(data))
  }, [])

  return (
    <div className='my-20'>
      <h1 className='text-2xl text-start font-bold mb-10'>Drama Movies</h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-5'>
        {movies.slice(0, 5).map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  )
}

export default CategoryOfDrama
