
import Movie from '../components/Movie';
import { useContext, useState } from 'react';
import { moviesContext } from '../provider/MoviesProvider';

const Allmovies = () => {
  const [visibleData, setvisibleData] = useState(6)
  let {movies}=useContext(moviesContext)
  let seeMoreMovies=movies.slice(0,visibleData)
  let handleSeeMore=()=>{
    setvisibleData(visibleData+6)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 py-20 justify-items-center gap-5'>
      <div>{movies.length}</div>
        {
            seeMoreMovies.map((movie)=><Movie key={movie._id} movie={movie}></Movie>)
        }
        <button className='btn text-center col-span-full bg-mainClr' onClick={handleSeeMore}>Show More</button>
    </div>
  )
}

export default Allmovies