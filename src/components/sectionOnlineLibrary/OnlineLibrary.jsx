import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requests from "../../constants/requests";
import ReactIcon from "../reactIcon/ReactIcon";

import SwiperBooks from "../SwiperBooks/SwiperBooks";
import styles from "./styles.module.css";
function OnlineLibrary() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const dataCategories = async () => {
      const response = await axios.get("/categories.json");
      if (response.status === 200) {
        setCategories(response.data);
      } else {
        console.log("A aparut o eroare la apelarea datelor ");
      }
    };
    dataCategories();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Librarie online</h2>
      </div>
      <div className={styles.wrap}>
        <div className={styles.menuWrap}>
          <ul className={styles.menuList}>
            {categories.length > 0 &&
              categories.map((iteam) => (
                <li key={iteam.id} className={styles.menuIteamWrap}>
                  <div className={styles.menuIteam}>
                    <ReactIcon icons={iteam.icon} />
                    <span>{iteam.name}</span>
                    <Link
                      className={styles.offerBtn}
                      to={iteam.url}
                      title={iteam.name}
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
            <SwiperBooks fetchURL={requests.requestNewBookzone} viewBook={4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineLibrary;
