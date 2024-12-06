import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export let authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  console.log(user);

  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  let signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let handleSignOut=()=>{
    signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setuser(user);
    });
  }, [user]);

  let authInfo = {
    createUser,
    setuser,
    user,
    signInUser,
    signOut,
    handleSignOut
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
