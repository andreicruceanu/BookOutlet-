import styles from "./styles.module.css";
import { TbBooks } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { closeList, openList } from "../../features/recentBooks/recentBooks";
import { SwiperSlide, Swiper } from "swiper/react";
import { getImageUrl } from "../../utils/images";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";

const ListRecentBooks = ({ books }) => {
  return (
    <Swiper
      slidesPerView={4}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation]}
      className={styles.swiperRecentBooks}
    >
      {books &&
        books?.length > 0 &&
        books.map((book) => (
          <SwiperSlide key={book._id} className={styles.wrapItem}>
            <div className={styles.recentItem}>
              <div className={styles.recentItemDelete}>
                <RiDeleteBin5Line />
              </div>
              <div className={styles.recentItemImg}>
                <Link to={`/book/${book._id}`}>
                  <img src={getImageUrl(book.mainImg)} alt={book.title} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

function RecentBook() {
  const { showRecent, listRecentBooks } = useSelector(
    (state) => state.recentBooks
  );

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openList());
  };
  const handleClose = () => {
    dispatch(closeList());
  };

  return (
    <>
      {showRecent ? (
        <div className={`${styles.recentContainer} ${styles.recentList}`}>
          <div className={styles.headerList}>
            <span>Istoric produse recent vizualizate</span>
            <TfiClose onClick={handleClose} />
          </div>
          <ListRecentBooks books={listRecentBooks} />
        </div>
      ) : (
        <div
          className={`${styles.recentContainer} ${styles.recentBtn}`}
          onClick={handleOpen}
        >
          <span className={styles.BookCount}>{listRecentBooks.length}</span>
          <div className={styles.wrap}>
            <TbBooks className={styles.iconBooks} />
            <p className={styles.textBtn}>Istoric</p>
          </div>
        </div>
      )}
    </>
  );
}

export default RecentBook;
