import { toast } from "react-toastify";
import styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";

const DataRenderer = ({ children, error, isLoading }) => {
  if (isLoading) {
    return (
      <>
        <div className={styles.containerLoader}>
          <Spinner />
        </div>
      </>
    );
  }

  if (error) {
    return toast.error(error);
  }

  return children;
};

export default DataRenderer;
