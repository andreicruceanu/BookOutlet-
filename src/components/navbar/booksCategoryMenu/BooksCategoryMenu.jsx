import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";

import MenuItem from "./MenuItem";
import { MENU_DATA_BOOKS_CATEGORY } from "../../../constants/menuData";

function BooksCategoryMenu() {
  return (
    <div className={styles.navBurgerMenu}>
      <div className={styles.navBurgerMenuLeft}>
        <AiOutlineMenu className={styles.navBurgerIconMenu} />
        <p>Categorii de carte</p>
      </div>
      <div className={styles.navBurgerMenuRight}>
        <MdKeyboardArrowDown />
      </div>
      <ul className={styles.navBurgerMenuDropMenu}>
        <div className={styles.navBurgerMenuDropMenuWrap}>
          {MENU_DATA_BOOKS_CATEGORY.map(({ icon, name, href, submenu }) => (
            <MenuItem
              key={uuidv4()}
              icon={icon}
              name={name}
              href={href}
              submenu={submenu}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default BooksCategoryMenu;
