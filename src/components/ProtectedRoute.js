import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";

export const ProtectedRoute = ({ children }) => {

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser)

  return currentUser?.isLoggedIn ? children : <Navigate to="/signin" />;
}
