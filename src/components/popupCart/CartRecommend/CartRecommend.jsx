import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import BookRecommend from "../BookRecommend/BookRecommend";
import { useSelector } from "react-redux";

function CartRecommend({ bookId }) {
  const { topPackagesBook: books } = useSelector((state) => state.books);

  const booksFilter = books && books.filter((book) => book._id !== bookId);

  return (
    <>
      <div>
        <h3 className={styles.titleRecommend}>
          Frecvent cumpărată împreună cu:
        </h3>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            modifierClass: `swiper-pagination-wrap`,
            bulletClass: `swiper-pagination-bullet ${styles[`costum-bullet`]}`,
          }}
          mousewheel={true}
          slidesPerView={4}
          spaceBetween={10}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={`${styles.mySwiper}`}
        >
          {booksFilter &&
            booksFilter?.length > 0 &&
            booksFilter.map((book) => (
              <SwiperSlide key={book._id}>
                <BookRecommend {...book} />
              </SwiperSlide>
            ))}

          <div
            className={`swiper-button-prev sw-prev ${styles.swPrevBook}`}
          ></div>
          <div
            className={`swiper-button-next sw-next ${styles.swNextBook}`}
          ></div>
        </Swiper>
      </div>
    </>
  );
}
export default CartRecommend;
