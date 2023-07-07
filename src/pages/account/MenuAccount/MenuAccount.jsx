import { Link, useLocation } from "react-router-dom";
import styles from "./MenuAccount.module.css";
import { useState } from "react";

function MenuAccount() {
  const menuConfig = [
    { path: "/account/account", label: "Contul meu" },
    { path: "/account/orders", label: "Comenzile mele" },
    { path: "/account/vouchers", label: "Voucherele mele" },
    { path: "/account/favourites", label: "Favorite" },
    { path: "/account/personal", label: "Date personale" },
  ];

  const location = useLocation();

  return (
    <ul className={styles.myaccountMenu}>
      {menuConfig.map((item) => (
        <li className={styles.myaccountMenuItem} key={item.path}>
          <Link
            className={`${styles.menuItemLink} ${
              item.path === location.pathname ? styles.active : ""
            }`}
            to={item.path}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default MenuAccount;
