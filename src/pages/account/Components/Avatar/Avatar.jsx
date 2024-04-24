import { useState } from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

const Avatar = () => {
  const [firstName] = useState(
    localStorage.getItem("firstName") || "cititorule"
  );
  const location = useLocation();
  const { pathname } = location;

  return (
    pathname.toLowerCase() !== "/account/account" && (
      <div className={styles.avatar}>
        <div className={styles.avatarWrap}>
          <span className={styles.avatarImg}>
            {firstName && firstName.slice(0, 1)}
          </span>
          <div className={styles.avatarTextWrap}>
            <p>Bine ai venit,</p>
            <h3>{firstName && firstName}</h3>
          </div>
        </div>
      </div>
    )
  );
};

export default Avatar;
