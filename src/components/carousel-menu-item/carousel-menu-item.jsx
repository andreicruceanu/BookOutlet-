import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css";

function CarouselMenuItem(props) {
  const { icon, name, href } = props;

  return (
    <li className={styles.menuIteam}>
      <span className={styles.menuIteamIcon}> {icon} </span>
      <Link to={href}>
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default CarouselMenuItem;
