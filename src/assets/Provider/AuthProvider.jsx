import React, { createContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const contextData = {};

  return (
    <AuthContext.provider value={contextData}>{children}</AuthContext.provider>
  );
};
