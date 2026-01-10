import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";



// signin with google---
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  // --------------state---------------------------
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);
  const [error, seterror] = useState(null);
  // ---------------------------------------

  // createuser---
  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signinUser---
  const signinUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // singOutUser----
  const singOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  //   sign in with google---
  const signinwithgoogle = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };

  //useeffect auth observer----
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
      setuser(currentUser);
      setloading(false);
    });

    return () => unsubscribe();
  }, []);

  // authinfo---
  const authinfo = {
    createuser,
    setloading,
    signinUser,
    singOutUser,
    signinwithgoogle,
    setuser,
    loading,
    user,
    error,
    seterror,
  };

  return <AuthContex value={authinfo}>{children}</AuthContex>;
};

export default AuthProvider;
