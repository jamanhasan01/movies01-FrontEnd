import { createContext, useState } from "react"

export let moviesContext=createContext()

const MoviesProvider = ({children}) => {
    const [movies, setmovies] = useState(null)
    console.log(movies);
    
    let moviesInfo={
        movies,
        setmovies
    }
  return (
    <moviesContext.Provider value={moviesInfo}>
        {children}
    </moviesContext.Provider>
  )
}

export default MoviesProvider