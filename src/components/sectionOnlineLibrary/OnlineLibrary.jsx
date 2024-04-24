import { useState } from "react";
import { Link } from "react-router-dom";
import { menuCategories } from "./menuCategories";

import styles from "./styles.module.css";
import SwiperBooks from "../ui/SwiperBooks/SwiperBooks";

function OnlineLibrary({ books }) {
  const [menu] = useState(menuCategories);

  const [activeItem, setActiveItem] = useState(menu[0].id);

  const handleActiveItem = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Librarie online</h2>
      </div>
      <div className={styles.wrap}>
        <div className={styles.menuWrap}>
          <ul className={styles.menuList}>
            {menu.map((item) => (
              <li
                key={item.id}
                className={`${styles.menuItemWrap} ${
                  activeItem === item.id ? styles.active : ""
                }`}
                onClick={() => handleActiveItem(item.id)}
              >
                <div className={styles.menuIteam}>
                  {item.icon}
                  <span>{item.name}</span>
                  <Link
                    className={styles.newsletterBtn}
                    to={item.url}
                    title={item.name}
                  >
                    Vezi toate
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.menuSlide}>
          <h2>Top oferte</h2>
          <div className={styles.swiperBooksContainer}>
            <SwiperBooks books={books} viewBook={4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineLibrary;
