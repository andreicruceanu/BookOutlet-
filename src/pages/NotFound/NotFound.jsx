import { BiErrorCircle } from "react-icons/bi";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Button from "../../components/ui/Button/Button";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.error}>
            <img
              className={styles.noFoundImg}
              src="https://bookzone.ro/_nuxt/img/404.d8b6e1e.svg"
              alt="imagine shopping-cart"
            />
            <h3 className={styles.title}>Ups ... această pagină nu există.</h3>
            <Link className={styles.link} to="/" replace>
              <Button
                variant="blue"
                name="Continua cumparaturile"
                className="max-w-250 blue"
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
