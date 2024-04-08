import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";

function MenuSecondary(props) {
  const { dataMenuSecondary, className } = props;
  return (
    <ul className={`${styles.navMenuList} ${styles[className]}`}>
      {dataMenuSecondary.map(({ name, href }) => (
        <li key={uuidv4()}>
          <Link to={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
export default MenuSecondary;
