import { CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import Logo from "../logo/logo";
import styles from "./styles.module.css";
// TODO inlocuire btn_login ca loginButtonImage si numele fisierului in login-buttin

import SearchInput from "./../search-input/search-input";
import BooksCategoryMenu from "../books-category-menu/books-category-menu";

import Action from "../action/action";
import { ACTIONS } from "../../constants/actions";
import {
  DATA_MENU_SECONDARY,
  DATA_MENU_SECONDARY2,
} from "../../constants/menuData";
import NavMenuSecondary from "../menu-secondary/nav-menu-secondary";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.navSearch}>
          <SearchInput />
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
            href="/cos/produse"
            action={ACTIONS.shoppingCart}
          />
        </div>
      </div>
      <div className={styles.navMenu}>
        <div className={styles.navMenuContainer}>
          <BooksCategoryMenu />
          <div className={styles.navMenuSecondaryContainer}>
            <NavMenuSecondary
              dataMenuSecondary={DATA_MENU_SECONDARY}
              className="menuSecondary"
            />
          </div>
          <div className={styles.navMenuSecondaryContainer2}>
            <NavMenuSecondary
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
