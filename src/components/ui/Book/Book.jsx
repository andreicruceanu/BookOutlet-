import Badges from "../../badges/Badges";
import BadgesDiscount from "../../badges/BadgesDiscount";
import BookImg from "../../BookImg/BookImg";
import BookStar from "../../bookStar/BookStar";
import BookTitle from "../../bookTitle/BookTitle";
import CartButton from "../../cartButton/CartButton";
import FavoriteIcon from "../../favoriteIcon/FavoriteIcon";
import styles from "./styles.module.css";
import BookPrice from "../../bookPrice/PriceBook";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  setModalNoUser,
} from "../../../features/auth/authSlice";
import favoriteApi from "../../../api/modules/favorite.api";
import { addToCartReducer } from "../../../features/cart/cartSlice";
import { toast } from "react-toastify";
import content from "../../../constants/content";
import { openModal } from "../../../features/modalCart/modalCartSlice";
import useAddToCart from "../../../hooks/addToCart";

function Book(bookData) {
  const {
    badges,
    rating,
    title,
    subtitle,
    oldPrice,
    price,
    mainImageUrl,
    _id,
    url,
  } = bookData;

  const addToCart = useAddToCart();

  const handleAddToCart = () => {
    addToCart(bookData);
  };

  const { listFavorite, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isFavorite = listFavorite.some(
    (item) => item.bookId === _id && item.user === user.id
  );

  const onRemoveFavorite = async () => {
    if (!user) {
      return dispatch(
        setModalNoUser({ open: true, content: content.noUserAddToFavorite })
      );
    }
    const favorite = listFavorite.find(
      (e) => e.bookId.toString() === _id.toString()
    );

    const { response, err } = await favoriteApi.remove({
      favoriteId: favorite._id,
    });

    if (err) return console.log(err);
    if (response) {
      dispatch(removeFavorite(favorite));
    }
  };

  const addToFavorite = async () => {
    if (!user) {
      return dispatch(
        setModalNoUser({ open: true, content: content.noUserAddToFavorite })
      );
    }
    if (isFavorite) {
      onRemoveFavorite();
      return;
    }

    const body = {
      bookId: _id,
      mainImageUrl,
      price,
      oldPrice,
      subtitle,
      title,
      url,
    };

    const { response, err } = await favoriteApi.add(body);

    if (err) {
      return toast.error(err.errorMessage ? err.errorMessage : err.message);
    }
    if (response) {
      dispatch(addFavorite(response));
      toast.success("Ai adaugat o carte la favorite!");
    }
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
        <CartButton addToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default Book;
