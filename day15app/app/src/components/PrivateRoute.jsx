import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.isAuth.isAuth);

  console.log(isAuth);

  if (!isAuth) {
    alert("without login you cannot access this page");
    return <Navigate to={"/"} />;
  }
  return children;
};

export { PrivateRoute };
