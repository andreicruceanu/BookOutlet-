import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

function MenuItem({ name, icon, href, submenu }) {
  return (
    <li key={name} className={styles.navBurgerMenuDropItem}>
      {icon}
      <Link to={href}>{name}</Link>
      {submenu && <MdKeyboardArrowRight className={styles.arrowRight} />}
      {submenu && (
        <ul className={styles.menuSubDropList}>
          {submenu.map((iteam) => {
            return (
              <li key={uuidv4()} className={styles.menuSubDropIteam}>
                <Link to={iteam.href}>{iteam.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
