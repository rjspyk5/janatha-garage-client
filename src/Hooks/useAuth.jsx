import { useContext } from "react";
import { AuthContext } from "./../assets/Provider/AuthProvider";
export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
