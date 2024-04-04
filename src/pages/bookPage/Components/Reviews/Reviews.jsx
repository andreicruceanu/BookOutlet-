import { useEffect, useState } from "react";
import BookStar from "../../../../components/bookStar/BookStar";
import ModalReview from "../../ModalReview";
import styles from "./styles.module.css";
import reviewApi from "../../../../api/modules/review.api";
import Review from "./Review";

function Reviews({ review, bookId, bookTitle }) {
  const [isOpen, setOpenModal] = useState(false);
  const [listReviews, setListReviews] = useState([]);
  const numberView = 2;

  const onLoadMoare = () => {
    return null;
  };

  function updateListReview(review) {
    setListReviews([review, ...listReviews]);
  }

  useEffect(() => {
    const getReview = async () => {
      const { response, err } = await reviewApi.getList({ bookId });

      if (response) {
        setListReviews(response);
      }
      if (err) {
        console.log(err);
      }
    };
    getReview();
  }, [bookId]);

  const total =
    review?.star1 +
    review?.star2 +
    review?.star3 +
    review?.star4 +
    review?.star5;
  return (
    <>
      <div className={styles.reviewTitle}>Recenzii</div>
      <div id="reviews" className={styles.comments}>
        <div className={styles.filterWrap}>
          <div className={styles.commentsGrid}>
            <div className={styles.commentBox}>
              <h3>Ți-a plăcut produsul?</h3>
              <p>Spune tuturor părerea ta aici.</p>
              <div className={styles.commentBoxWrap}>
                <span
                  className={styles.reviewBtn}
                  onClick={() => setOpenModal(true)}
                >
                  Scrie o recenzie
                </span>
              </div>
            </div>
            <div className={styles.commentOverAll}>
              <p className={styles.scoreReview}>
                {`${
                  Number.isInteger(review?.rating)
                    ? review?.rating
                    : Number(review?.rating).toFixed(2)
                }`}
              </p>
              <BookStar rating={review?.rating} />
              <p className={styles.numberReview}>
                {review?.totalReviews} recenzii
              </p>
            </div>
            <div className={styles.commentStats}>
              <div className={styles.commentStat}>
                <p>5 stele</p>
                <div className={styles.commentProgress}>
                  <div
                    className={styles.commentProgressInner}
                    style={{
                      width: `${(review?.star5 / total) * 100}%`,
                    }}
                  ></div>
                </div>
                <p>{review?.star5}</p>
              </div>
              <div className={styles.commentStat}>
                <p>4 stele</p>
                <div className={styles.commentProgress}>
                  <div
                    className={styles.commentProgressInner}
                    style={{
                      width: `${(review?.star4 / total) * 100}%`,
                    }}
                  ></div>
                </div>
                <p>{review?.star4}</p>
              </div>
              <div className={styles.commentStat}>
                <p>3 stele</p>
                <div className={styles.commentProgress}>
                  <div
                    className={styles.commentProgressInner}
                    style={{
                      width: `${(review?.star3 / total) * 100}%`,
                    }}
                  ></div>
                </div>
                <p>{review?.star3}</p>
              </div>
              <div className={styles.commentStat}>
                <p>2 stele</p>
                <div className={styles.commentProgress}>
                  <div
                    className={styles.commentProgressInner}
                    style={{
                      width: `${(review?.star2 / total) * 100}%`,
                    }}
                  ></div>
                </div>
                <p>{review?.star2}</p>
              </div>
              <div className={styles.commentStat}>
                <p>1 stele</p>
                <div className={styles.commentProgress}>
                  <div
                    className={styles.commentProgressInner}
                    style={{
                      width: `${(review?.star1 / total) * 100}%`,
                    }}
                  ></div>
                </div>
                <p>{review?.star1}</p>
              </div>
            </div>
          </div>
          {listReviews.length > 0 && (
            <div className={styles.commentsContent}>
              {listReviews.map((comment) => (
                <Review comment={comment} key={comment._id} />
              ))}
            </div>
          )}
          {numberView < listReviews.length && (
            <span className={styles.reviewBtn} onClick={onLoadMoare}>
              Vezi toate recenziile
            </span>
          )}
        </div>
        <ModalReview
          open={isOpen}
          updateListReview={updateListReview}
          bookTitle={bookTitle}
          bookId={bookId}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </>
  );
}

export default Reviews;
