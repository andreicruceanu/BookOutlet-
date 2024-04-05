import { BiErrorCircle } from "react-icons/bi";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.error}>
            <BiErrorCircle className={styles.errorIcon} />
            <p className={styles.title}>This page could not be found</p>
            <Link className={styles.link} to="/" replace>
              Back to the home page
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
