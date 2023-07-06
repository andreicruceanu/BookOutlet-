import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function AddressLink({ href, text }) {
  return (
    <Link to={href} className={styles.addressLink}>
      {text}
    </Link>
  );
}
export default AddressLink;
