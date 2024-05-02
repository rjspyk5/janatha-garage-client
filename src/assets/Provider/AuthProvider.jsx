import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "./../../firebase.config";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const contextData = { user, loading, registration, logIn };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
