import MenuAccount from "../MenuAccount/MenuAccount";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Badges from "../../../components/badges/Badges";
import { useEffect, useState } from "react";
import favoriteApi from "../../../api/modules/favorite.api";
import { toast } from "react-toastify";
import { API_URL_IMG } from "../../../api/api-img";
import BtnAddToCart from "../../../images/adauga-in-cos.svg";
import { calculateDiscountPercentage } from "../../../utils/discountCalculator";
import { useDispatch, useSelector } from "react-redux";
import { addToCartReducer } from "../../../features/cart/cartSlice";
import {
  removeFavorite,
  setModalNoUser,
} from "../../../features/auth/authSlice";
import Button from "../../../components/ui/Button/Button";
import content from "../../../constants/content";

function Favorite() {
  const { user, listFavorite } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleBookDelete = async (book) => {
    if (!user) {
      return dispatch(setModalNoUser(true));
    }
    const { response, err } = await favoriteApi.remove({
      favoriteId: book._id,
    });

    if (err) return console.log(err);
    if (response) {
      dispatch(removeFavorite(book));
    }
  };

  const handleAddToCart = (book) => {
    console.log(book);
    const { title, subtitle, url, price, oldPrice, mainImageUrl, bookId } =
      book;

    const bookCart = {
      _id: bookId,
      title,
      subtitle,
      url,
      mainImageUrl,
      oldPrice,
      price,
    };
    dispatch(addToCartReducer(bookCart));
  };

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
                  <div className={styles.favoriteItem} key={book._id}>
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
                          <span className={styles.pricesOld}>
                            {book.oldPrice} Lei
                          </span>
                          (
                          {
                            -calculateDiscountPercentage(
                              book.oldPrice,
                              book.price
                            )
                          }
                          %)
                        </p>
                        <p className={styles.bookPriceValue}>
                          {book.price} Lei
                        </p>
                      </div>
                      <Button
                        id="add_to_cart"
                        type="button"
                        className="max-w-220 flex items-center mt-0"
                        classNameText="flex-3"
                        startIconImage={BtnAddToCart}
                        name={content.add_to_cart}
                        onClick={() => handleAddToCart(book)}
                      />
                      <span
                        className={styles.btnRemoveToFavorite}
                        onClick={() => handleBookDelete(book)}
                      >
                        Sterge
                      </span>
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
