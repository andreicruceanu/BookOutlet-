import styles from "./styles.module.css";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Book from "../book/Book";
import axios from "axios";
import ModalNoUser from "../modal/ModalNoUser";
import { useDispatch, useSelector } from "react-redux";
import { setModalNoUser } from "../../features/auth/authSlice";

function SwiperBooks({ title, fetchURL, viewBook }) {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const modalNoUser = useSelector((state) => state.auth.modalNoUser);
  console.log(modalNoUser);

  const handleClose = () => dispatch(setModalNoUser(false));
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("/api/books");
      if (response.status === 200) {
        setBooks(response.data);
      }
    };

    fetchBooks();
  }, [fetchURL]);

  return (
    <>
      {title && (
        <div>
          <h2 className={styles.SwiperBooksTitle}>{title}</h2>
        </div>
      )}

      <ModalNoUser open={modalNoUser} onClose={handleClose} />
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
        slidesPerView={viewBook}
        spaceBetween={10}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={`${styles.mySwiper}`}
      >
        {books.length > 0 &&
          books.map((book) => (
            <SwiperSlide key={book._id}>
              <Book {...book} />
            </SwiperSlide>
          ))}

        <div
          className={`swiper-button-prev sw-prev ${styles.swPrevBook}`}
        ></div>
        <div
          className={`swiper-button-next sw-next ${styles.swNextBook}`}
        ></div>
      </Swiper>
    </>
  );
}

export default SwiperBooks;
