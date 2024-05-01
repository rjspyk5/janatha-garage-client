import React, { createContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const contextData = {};

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
