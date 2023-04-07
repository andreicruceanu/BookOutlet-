import { BiError } from "react-icons/bi";
import styles from "./styles.module.css";
function LoadingSliders({ isError }) {
  return (
    <>
      {isError ? (
        <div className={styles.loaderContainer}>
          <div className={styles.error}>
            <BiError />
          </div>
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loaderStyles}></div>
        </div>
      )}
    </>
  );
}

export default LoadingSliders;
