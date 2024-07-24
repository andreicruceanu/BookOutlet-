import { useDispatch } from "react-redux";
import { addToCartReducer } from "../features/cart/cartSlice";
import { openModal } from "../features/modalCart/modalCartSlice";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCart = (bookData) => {
    const { _id, title, subtitle, url, mainImageUrl, oldPrice, price } =
      bookData;

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
    dispatch(openModal(bookData));
  };

  return addToCart;
};

export default useAddToCart;
