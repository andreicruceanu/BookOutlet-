import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import BookStar from "../../components/bookStar/BookStar";
import styles from "./Review.module.css";

function Review({ review }) {
  console.log(review);
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
                <Link to={"/"}>Scrie o recenzie</Link>
              </div>
            </div>
            <div className={styles.commentOverAll}>
              <p className={styles.scoreReview}>{review?.rating}</p>
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
          <div className={styles.commentsContent}>
            <div className={styles.comment}>
              <div className={styles.commentWrap}>
                <div className={styles.commentHeaderWrap}>
                  <span className={styles.avatar}>
                    <b className={styles.avatarName}>A</b>
                  </span>
                  <div className={styles.commnetUserWrap}>
                    <p>Eliza</p>
                    <div className={styles.reviewStar}>
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                    </div>
                  </div>
                </div>
                <div className="commentDetails">
                  <h6>
                    Unul dintre cele mai bune plot-twist-uri pe care le-am citit
                    vreodată.
                  </h6>
                  <p>
                    Povestea este ceva ce n-am mai văzut sau citit până acum. E
                    probabil cartea mea preferată din genul thriller, dacă nu,
                    chiar printre primele oricum. A avut suspans, acțiune,
                    dialog, tot ce-ți poți dori de la o carte ce are ca
                    declanșator o crimă. Cartea a mai prezentat și ce poate face
                    o mamă pentru copilul ei, devotamentul cu care o persoană te
                    poate iubi în ciuda tuturor și puterea de a schimba
                    viitorul. Clar recomand tuturor, chiar și pentru cei ce abia
                    descoperă acest gen literar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
