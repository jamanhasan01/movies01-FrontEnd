import { createContext } from "react"

export let authContext=createContext()
const AuthProvider = ({children}) => {
    let authInfo={
        
    }
  return (
    
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider