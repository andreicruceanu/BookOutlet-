import logo from "./../../images/Logo.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to={"/"} className={styles.logoLink}>
      <img src={logo} alt="" className={styles.logoImg} />
    </Link>
  );
}

export default Logo;
