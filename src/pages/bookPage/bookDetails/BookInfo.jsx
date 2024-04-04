import { Link, useParams } from "react-router-dom";
import BookInfoCarousel from "../../../components/bookInfoCarousel/BookInfoCarousel.jsx";
import BookStar from "../../../components/bookStar/BookStar.jsx";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import ModalNoUser from "../../../components/modalNoUser/modalNoUser.jsx";
import { setModalNoUser } from "../../../features/auth/authSlice.js";
import { toast } from "react-toastify";
import { useBookDetails } from "../../../hooks/fetch-book-details.js";
import ListAuthors from "../Components/ListAuthors/ListAuthors.jsx";
import BookTitle from "../Components/BookTitle/BookTitle.jsx";
import BookOverview from "../Components/BookOverview/BookOverview.jsx";
import InfoDelivery from "../Components/InfoDelivery/InfoDelivery.jsx";
import BookPrice from "../Components/BookPrice/BookPrice.jsx";
import Summary from "../Components/Summary/Summary.jsx";
import BookAttributes from "../Components/BookAttributes/BookAttributes.jsx";
import Reviews from "../Components/Reviews/Reviews.jsx";
import Devider from "../Components/Devider/Devider.jsx";
import ButtonsPage from "../Components/ButtonsPage/ButtonsPage.jsx";

function BookInfo() {
  const { modalNoUser } = useSelector((state) => state.auth);

  const { id } = useParams();

  const { book, error } = useBookDetails(id);

  const dispatch = useDispatch();

  const handleClose = () => {
    return dispatch(setModalNoUser(false));
  };

  if (error) {
    toast.error(error);
    return;
  }
  return (
    <>
      {book && (
        <main>
          <ModalNoUser
            textHeader={"Loghează-te"}
            textContent={
              "Pentru a putea adauga la favorite o carte trebuie sa intri in contul tau BookOutlet"
            }
            open={modalNoUser}
            onClose={handleClose}
          />
          <div className={styles.containerBig}>
            <div className={styles.wrap}>
              <div className={styles.carousel}>
                <BookInfoCarousel
                  badges={book.badges}
                  bookImg={book.images}
                  price={book.price}
                  name={book.title}
                />
              </div>
              <div className={styles.details}>
                <BookTitle
                  title={book.title}
                  subtitle={book.subtitle}
                  authors={book.authors}
                />
                <div className={styles.detailsInfo}>
                  <div className={styles.detailsInfoRating}>
                    <div className={styles.detailsInfoStar}>
                      <BookStar rating={book.rating.rating} />
                    </div>
                    <Link to={"reviews"} className={styles.detailsInfoReview}>
                      {`${
                        Number.isInteger(book.rating.rating)
                          ? book.rating.rating
                          : Number(book.rating.rating).toFixed(2)
                      } (${book.rating.totalReviews} review-uri)`}
                    </Link>
                  </div>
                  <BookPrice
                    oldPrice={book?.price.oldPrice}
                    price={book?.price.price}
                  />
                </div>
                <div className={styles.detailsPricing}>
                  <BookOverview
                    shortDescription={book.shortDescription}
                    promoDescription={book.promoDescription}
                  />
                  <div className={styles.detailsPricingBox}>
                    <ButtonsPage book={book} />
                    <InfoDelivery />
                  </div>
                </div>
              </div>
            </div>
            <Devider />
            <BookAttributes bookName={book.title} bookId={book.bookId} />
            <Devider />
            <div className={styles.container}>
              <Summary
                title={book.title}
                authors={book.authors}
                description={book.description}
              />
            </div>
            <Devider />
            <ListAuthors listAuthors={book?.authors} />
            <Devider />
            <div className={styles.container}>
              <Reviews
                review={book.rating}
                bookTitle={book.title}
                bookId={book._id}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default BookInfo;
