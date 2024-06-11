import { useParams } from "react-router-dom";
import BookInfoCarousel from "../../../components/bookInfoCarousel/BookInfoCarousel.jsx";
import styles from "./styles.module.css";
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
import useScrollTop from "../../../hooks/useScrollTop.js";
import { toast } from "react-toastify";
import useRecommendedProducts from "../../../hooks/useRecommendedBooks.js";
import SwiperBooks from "../../../components/ui/SwiperBooks/SwiperBooks.jsx";
import BookRating from "../Components/BookRating/BookRating.jsx";
import Container from "../Components/Container/Container.jsx";
import ContainerSwiperBookStore from "../../../components/containers/containerBookStore/ContainerSwiperBookStore.jsx";
import useFetchBooks from "../../../hooks/useFetchBooks.js";
import Spinner from "../../../components/Spinner/Spinner.jsx";
import useCloseCartModal from "../../../hooks/closeCartModal.js";

function BookInfo() {
  const { id } = useParams();

  const { data: book, isLoading, error } = useFetchBooks(id);

  const {
    data: recommendedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useRecommendedProducts(id);

  useScrollTop(id);
  useCloseCartModal();

  if (error) return toast.error(error);

  return (
    <main>
      {isLoading && (
        <div className={styles.containerLoader}>
          <Spinner />
        </div>
      )}
      {book && !isLoading && (
        <div className="flex flex-col">
          <Container>
            <BookInfoCarousel
              badges={book.badges}
              bookImg={book.images}
              price={book.price}
              name={book.title}
            />
            <div className="flex flex-col w-full">
              <BookTitle
                title={book.title}
                subtitle={book.subtitle}
                authors={book.authors}
              />
              <div className="flex flex-row mt-10 items-center">
                <BookRating rating={book.rating} />
                <BookPrice
                  oldPrice={book?.price.oldPrice}
                  price={book?.price.price}
                />
              </div>
              <div className="flex flex-row mt-20">
                <BookOverview
                  shortDescription={book.shortDescription}
                  promoDescription={book.promoDescription}
                />
                <div className="w-50">
                  <ButtonsPage book={book} />
                  <InfoDelivery />
                </div>
              </div>
            </div>
          </Container>
          <Devider />
          <Container>
            <BookAttributes bookName={book.title} bookId={book.bookId} />
          </Container>
          <Devider />
          <Container>
            <Summary
              title={book.title}
              authors={book.authors}
              description={book.description}
            />
          </Container>
          <Devider />
          <ListAuthors listAuthors={book?.authors} />
          <Devider />
          <Container>
            <Reviews
              review={book.rating}
              bookTitle={book.title}
              bookId={book._id}
            />
          </Container>
          <ContainerSwiperBookStore>
            <SwiperBooks
              title={"Recommended for You"}
              viewBook={6}
              books={recommendedProducts}
            />
          </ContainerSwiperBookStore>
        </div>
      )}
    </main>
  );
}

export default BookInfo;
