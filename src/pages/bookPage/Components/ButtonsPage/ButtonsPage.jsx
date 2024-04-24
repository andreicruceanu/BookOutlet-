import { AiOutlineHeart } from "react-icons/ai";
import Button from "../../../../components/ui/Button/Button";
import content from "../../../../constants/content";
import { getClassName, getName } from "../../bookDetails/function";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartReducer } from "../../../../features/cart/cartSlice";
import {
  addFavorite,
  removeFavorite,
  setModalNoUser,
} from "../../../../features/auth/authSlice";
import favoriteApi from "../../../../api/modules/favorite.api";
import { toast } from "react-toastify";
import BtnAddToCart from "../../../../images/adauga-in-cos.svg";

const ButtonsPage = ({ book }) => {
  const { listFavorite, user } = useSelector((state) => state.auth);

  const [isBookFavorite, setBookFavorite] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    const { _id, title, subtitle, url } = book;
    const price = book.price.price;
    const oldPrice = book.price.oldPrice;
    const mainImageUrl = book.images.find((img) => img.is_main === true).url;

    const bookCart = {
      _id,
      title,
      subtitle,
      url,
      mainImageUrl,
      oldPrice,
      price,
    };

    dispatch(addToCartReducer(bookCart));
  };

  const handleFavorite = async (book) => {
    if (!user) {
      return dispatch(setModalNoUser(true));
    }
    if (isBookFavorite) {
      const favoriteDetails = listFavorite.find(
        (item) => item.bookId === book._id && item.user === user.id
      );
      const { response, err } = await favoriteApi.remove({
        favoriteId: favoriteDetails._id,
      });

      if (err) {
        return toast.error(err.errorMessage ? err.errorMessage : err.message);
      }

      if (response) {
        dispatch(removeFavorite(favoriteDetails));
        setBookFavorite(false);
      }
    } else {
      const { _id, title, url, subtitle } = book;
      const price = book.price.price;
      const oldPrice = book.price.oldPrice;
      const mainImageUrl = book.images.find((img) => img.is_main === true).url;

      const body = {
        bookId: _id,
        mainImageUrl,
        price,
        oldPrice,
        title,
        subtitle,
        url,
      };

      const { response, err } = await favoriteApi.add(body);

      if (err) {
        return toast.error(err.errorMessage ? err.errorMessage : err.message);
      }
      if (response) {
        dispatch(addFavorite(response));
        toast.success("Ai adaugat o carte la favorite!");
        setBookFavorite(true);
      }
    }
  };

  useEffect(() => {
    if (book && user) {
      setBookFavorite(
        listFavorite.some(
          (item) => item.bookId === book._id && item.user === user.id
        )
      );
    }
  }, [book, user, listFavorite]);

  return (
    <div className={styles.priceButtonWrap}>
      <Button
        className="flex items-center mt-0"
        classNameText="w-full"
        startIconImage={BtnAddToCart}
        type="button"
        size="lg"
        name={content.add_to_cart}
        onClick={() => handleAddToCart(book)}
      />
      <Button
        type="button"
        size="lg"
        name={getName(isBookFavorite)}
        className="flex items-center mt-0"
        classNameText="w-full"
        variant="secondary"
        startIcon={<AiOutlineHeart className={getClassName(isBookFavorite)} />}
        onClick={() => handleFavorite(book)}
      />
    </div>
  );
};

export default ButtonsPage;
