import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import auth from "../firebase/firebase.config"

export let authContext=createContext()
const AuthProvider = ({children}) => {
    let createUser=(email,password)=>{
  
      return createUserWithEmailAndPassword(auth,email,password)
    }
    let authInfo={
      createUser,
    }
  return (
    
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider