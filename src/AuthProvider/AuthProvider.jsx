import React, { useEffect, useState } from "react";
import { AuthContext } from "./../Context/AuthContext";
import { auth } from "./../../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateUser = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  const logOut = () => {
    setLoading(true);
      localStorage.removeItem('token')
    return signOut(auth);
  };
  const authInfo = {
    createUser,
    signInUser,
    updateUser,
    user,
    setUser,
    googleSignin,
    logOut,
    loading,
    setLoading,
  };

  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser?.email){

         axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{
        email:currentUser?.email})
        .then(res=>localStorage.setItem("token",res.data.token))
      }
     
      console.log("User status changed:", currentUser);
      setLoading(false);
    });
    return () => disconnect();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;