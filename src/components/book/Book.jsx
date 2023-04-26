import Badges from "../badges/Badges";
import BadgesDiscount from "../badges/BadgesDiscount";
import BookImg from "../BookImg/BookImg";
import BookStar from "../bookStar/BookStar";
import BookTitle from "../bookTitle/BookTitle";
import CartButton from "../cartButton/CartButton";
import FavoriteIcon from "../favoriteIcon/FavoriteIcon";
import styles from "./styles.module.css";
import BookPrice from "../bookPrice/PriceBook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addFavorite,
  removeFavorite,
  setModalNoUser,
} from "../../features/auth/authSlice";
function Book(bookData) {
  const { badges, rating, title, oldPrice, price, mainImageUrl, _id } =
    bookData;

  const { listFavorite, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (user) {
      console.log(listFavorite);
      listFavorite.some((item) => item.bookId === _id && item.user === user.id)
        ? setFavorite(true)
        : setFavorite(false);
    }
  }, [user, listFavorite, _id]);

  const onRemoveFavorite = () => {
    if (!user) {
      return dispatch(setModalNoUser(true));
    }
    const favorite = listFavorite.find(
      (e) => e.bookId.toString() === _id.toString()
    );
    console.log("aoco");
    dispatch(removeFavorite(favorite));
  };

  const addToFavorite = () => {
    if (!user) {
      return dispatch(setModalNoUser(true));
    }
    if (isFavorite) {
      onRemoveFavorite();

      return;
    }

    dispatch(addFavorite({ bookId: _id }));
  };

  return (
    <div className={styles.bookContainer}>
      <Badges badges={badges} />
      <BadgesDiscount
        oldPrice={oldPrice}
        price={price}
        leftPosition={"8px"}
        bottomPosition={"148px"}
      />
      <FavoriteIcon isFavorite={isFavorite} addToFavorite={addToFavorite} />
      <BookImg bookImg={mainImageUrl} title={title} id={_id} />
      <BookTitle title={title} id={_id} />
      <BookStar rating={rating} />
      <div className={styles.priceContainer}>
        <BookPrice oldPrice={oldPrice} price={price} />
        <CartButton />
      </div>
    </div>
  );
}

export default Book;
