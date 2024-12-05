import { createContext, useState } from "react"

export let moviesContext=createContext()

const MoviesProvider = ({children}) => {
    const [movies, setmovies] = useState(null)
    const [loading, setloading] = useState(true)

   

    
    let moviesInfo={
        movies,
        setmovies,
        loading,
        setloading,
        
    }
  return (
    <moviesContext.Provider value={moviesInfo}>
        {children}
    </moviesContext.Provider>
  )
}

export default MoviesProvider