import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase.config";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setuser(currentUser);
      setloading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const registration = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setloading(true);
    signOut(auth);
  };

  const contextData = { user, loading, registration, logIn, logOut };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
