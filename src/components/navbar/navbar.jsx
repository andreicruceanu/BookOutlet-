import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import Logo from "../logo/logo";
import styles from "./styles.module.css";

import { ACTIONS } from "../../constants/actions";
import {
  DATA_MENU_SECONDARY,
  DATA_MENU_SECONDARY2,
} from "../../constants/menuData";
import menuImg from "../../images/bars-regular.svg";
import SearchInput from "./searchInput/SearchInput";

import BooksCategoryMenu from "./booksCategoryMenu/BooksCategoryMenu";
import MenuSecondary from "./menuSecondary/MenuSecondary";
import Action from "./actionMenu/Action";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbarMenu}>
          <img className={styles.navbarMenuImg} src={menuImg} alt="Menu Img" />
        </div>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.navSearch}>
          <SearchInput />
        </div>
        <div className={styles.searchIcon}>
          <CiSearch />
        </div>
        <div className={styles.actionsContainer}>
          <Action
            icon={<CiUser />}
            name="Contul meu"
            arrow={true}
            link={false}
            action={ACTIONS.myAccount}
          />
          <Action
            icon={<CiHeart />}
            name="Favorite"
            arrow={true}
            link={false}
            action={ACTIONS.favorites}
          />
          <Action
            icon={<IoCartOutline />}
            name="Cosul meu"
            arrow={false}
            link={true}
            href="/cos"
            action={ACTIONS.shoppingCart}
          />
        </div>
      </div>
      <div className={styles.navMenu}>
        <div className={styles.navMenuContainer}>
          <BooksCategoryMenu />
          <div className={styles.navMenuSecondaryContainer}>
            <MenuSecondary
              dataMenuSecondary={DATA_MENU_SECONDARY}
              className="menuSecondary"
            />
          </div>
          <div className={styles.navMenuSecondaryContainer2}>
            <MenuSecondary
              dataMenuSecondary={DATA_MENU_SECONDARY2}
              className="menuSecondary2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
