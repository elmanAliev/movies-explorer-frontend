import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";

export const AuthRoute = ({ children }) => {

  const currentUser = useContext(CurrentUserContext);

  return currentUser?.isLoggedIn ? <Navigate to="/"/> : children ;
}