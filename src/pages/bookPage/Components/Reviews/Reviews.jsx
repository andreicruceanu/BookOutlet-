import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalNoUser } from "../../../../features/auth/authSlice";

import BookStar from "../../../../components/bookStar/BookStar";
import styles from "./styles.module.css";
import reviewApi from "../../../../api/modules/review.api";
import Review from "./Review";
import Button from "../../../../components/ui/Button/Button";
import content from "../../../../constants/content";
import useModal from "../../../../hooks/useModal";
import Modal from "../../../../components/modal/Modal";
import FormReview from "../FormReview/FormReview";

const Reviews = ({ review, bookId, bookTitle }) => {
  const { user } = useSelector((state) => state.auth);
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();

  const [listReviews, setListReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const handleCreateReview = () => {
    if (!user) {
      return dispatch(
        setModalNoUser({ open: true, content: content.noUserAddReview })
      );
    } else onOpenModal(true);
  };

  useEffect(() => {
    setFilteredReviews([...listReviews].splice(0, skip));
  }, [listReviews]);

  const skip = 4;

  const onLoadMore = () => {
    setFilteredReviews([
      ...filteredReviews,
      ...[...listReviews].splice(page * skip, skip),
    ]);
    setPage(page + 1);
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
      <div id="reviews" className={styles.comments}>
        <div className={styles.reviewTitle}>Recenzii</div>
        <div className={styles.filterWrap}>
          <div className={styles.commentsGrid}>
            <div className={styles.commentBox}>
              <h3>Ți-a plăcut produsul?</h3>
              <p>Spune tuturor părerea ta aici.</p>
              <div className={styles.commentBoxWrap}>
                <span
                  className={styles.reviewBtn}
                  onClick={() => handleCreateReview()}
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
          {filteredReviews.length > 0 && (
            <div className={styles.commentsContent}>
              {filteredReviews.map((comment) => (
                <Review comment={comment} key={comment._id} />
              ))}
            </div>
          )}
          {filteredReviews.length < listReviews.length && (
            <div className="flex  w-full justify-center">
              <Button
                type="button"
                variant="blue"
                onClick={onLoadMore}
                name=" Vezi toate recenziile"
                className="max-w-220"
              />
            </div>
          )}
        </div>
        <Modal
          isOpen={isOpenModal}
          onClose={onCloseModal}
          title="Scrie o recenzie"
        >
          <FormReview
            onClose={onCloseModal}
            updateListReview={updateListReview}
            bookTitle={bookTitle}
            bookId={bookId}
          />
        </Modal>
      </div>
    </>
  );
};

export default Reviews;
