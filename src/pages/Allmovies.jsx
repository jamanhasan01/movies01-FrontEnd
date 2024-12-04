import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Movie from '../components/Movie';

const Allmovies = () => {
    let data=useLoaderData()
    console.log(data);
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 py-20 justify-items-center gap-5'>
        {
            data.map((movie)=><Movie key={movie._id} movie={movie}></Movie>)
        }
    </div>
  )
}

export default Allmovies