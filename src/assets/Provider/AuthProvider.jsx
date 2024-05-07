import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase.config";
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setuser(currentUser);
      setloading(false);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .catch((er) => console.log(er));
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .then((er) => console.log(er));
      }
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
