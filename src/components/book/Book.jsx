import Badges from "../badges/Badges";
import BadgesDiscount from "../badges/BadgesDiscount";
import BookImg from "../BookImg/BookImg";
import BookStar from "../bookStar/BookStar";
import BookTitle from "../bookTitle/BookTitle";
import CartButton from "../cartButton/CartButton";
import FavoriteIcon from "../favoriteIcon/FavoriteIcon";
import styles from "./styles.module.css";
import BookPrice from "../bookPrice/PriceBook";
function Book(bookData) {
  const { badges, rating, title, oldPrice, price, mainImageUrl } = bookData;

  return (
    <div className={styles.bookContainer}>
      <Badges badges={badges} />
      <BadgesDiscount
        oldPrice={oldPrice}
        price={price}
        leftPosition={"8px"}
        bottomPosition={"148px"}
      />
      <FavoriteIcon />
      <BookImg bookImg={mainImageUrl} />
      <BookTitle title={title} />
      <BookStar rating={rating} />
      <div className={styles.priceContainer}>
        <BookPrice oldPrice={oldPrice} price={price} />
        <CartButton />
      </div>
    </div>
  );
}

export default Book;
