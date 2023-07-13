import MenuAccount from "../MenuAccount/MenuAccount";
import styles from "./styles.module.css";
import img from "../../../images/printul-harry-rezerva.jpg";
import { Link } from "react-router-dom";
import Badges from "../../../components/badges/Badges";
import { useEffect, useState } from "react";
import favoriteApi from "../../../api/modules/favorite.api";
import { toast } from "react-toastify";
import { API_URL_IMG } from "../../../api/api-img";

function Favorite() {
  const [listFavorite, setListFavorite] = useState([]);

  useEffect(() => {
    const getFavorite = async () => {
      const { response, err } = await favoriteApi.getList();
      if (response) {
        setListFavorite(response);
      }
      if (err) {
        return toast.error(err.errorMessage ? err.errorMessage : err.message);
      }
    };
    getFavorite();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.personalData}>
        <div className={styles.personalDataAside}>
          <div className={styles.avatar}>
            <div className={styles.avatarWrap}>
              <span className={styles.avatarImg}>a</span>
              <div className={styles.avatarTextWrap}>
                <p>Bine ai venit,</p>
                <h3>{localStorage.getItem("firstName") || "cititorule"}</h3>
              </div>
            </div>
          </div>
          <MenuAccount />
        </div>
        <div className={styles.favoriteMain}>
          <div className={styles.favoriteWrap}>
            <div className={styles.favoriteHeader}>
              <h3>Favorite</h3>
              <p>{`${listFavorite.length} produse`}</p>
            </div>
            <div className={styles.favoriteContent}>
              {listFavorite.length > 0 ? (
                listFavorite.map((book) => (
                  <div className={styles.favoriteItem}>
                    <div className={styles.bookDetails}>
                      <div className={styles.bookImgWrap}>
                        <Link to={`/book/${book.bookId}`}>
                          <img
                            className={styles.bookImg}
                            src={`${API_URL_IMG}${book.mainImageUrl}`}
                            alt={book.title}
                          />
                        </Link>
                        <Badges />
                      </div>
                      <Link to={`/book/${book.bookId}`}>
                        <p className={styles.bookTitle}>{book.title}</p>
                      </Link>
                    </div>
                    <div className={styles.bookPrice}>
                      <div className={styles.bookPriceWrap}>
                        <p className={styles.priceAvailability}>In stoc</p>
                        <p className={styles.pricesDeduct}>
                          <span className={styles.pricesOld}> 55 Lei</span>{" "}
                          (-10.9%)
                        </p>
                        <p className={styles.bookPriceValue}>49 Lei</p>
                      </div>
                      <button>Adauga in coss</button>
                      <span>Sterge</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>Nu ai produse favorite.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
