import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import styles from "./styles.module.css";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);

  return !user ? (
    <div className={styles.container}>
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default ProtectedRoute;
