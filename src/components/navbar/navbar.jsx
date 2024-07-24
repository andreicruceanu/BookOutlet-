import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
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
import ProgressBar from "../progressBar/ProgressBar";
import { cost } from "../../utils/DeliveryCost";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state.cart);

  const totalPriceBooks = cart.reduce(
    (total, book) => Number(total) + Number(book.totalPrice),
    0
  );

  const [navbarSticky, setNavbarSticky] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 300) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${navbarSticky && styles.sticky}`}>
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
      <div
        className={`${styles.navMenu} ${navbarSticky && styles.hideNavMenu}`}
      >
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
      <div className={styles.shippingContainer}>
        <ProgressBar
          freeShippingValue={cost.freeShippingFrom}
          priceBooks={totalPriceBooks}
        />
      </div>
    </nav>
  );
}

export default Navbar;
