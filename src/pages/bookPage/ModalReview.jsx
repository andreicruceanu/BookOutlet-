import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiTwotoneStar } from "react-icons/ai";

import styles from "./ModalReview.module.css";
import reviewApi from "../../api/modules/review.api";
import Button from "../../components/ui/Button/Button";
import content from "../../constants/content";

function ModalReview({ open, onClose, updateListReview, bookId, bookTitle }) {
  const [Rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [Text, setText] = useState("");
  const [Title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [isSucces, setSucces] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
    onClose();
  }

  const handleSubmitReview = async () => {
    if (Text.length === 0 || Rating === null) {
      setError(true);
      return;
    }

    const { response, err } = await reviewApi.addReview({
      bookId,
      Rating,
      Text,
      Title,
    });

    if (response) {
      setSucces(true);
      updateListReview(response);
    }
    if (err) {
      console.log(err);
    }
  };
  if (!open) return "";
  return (
    <div className={styles.overlay}>
      {isSucces ? (
        <div className={styles.containerModal}>
          <div className={styles.modalTitle}>
            <h5>Scrie o recenzie</h5>
            <AiOutlineClose onClick={onClose} />
          </div>
          <div className={`${styles.modalWrap} ${styles.textCenter}`}>
            <br />
            <br />
            <h3>Comentariul tau a fost adaugat cu succes.</h3>
            <span
              className={styles.modalBtn}
              style={{ padding: `10px 10px` }}
              onClick={onClose}
            >
              Ok
            </span>
            <br />
            <br />
            <br />
          </div>
        </div>
      ) : (
        <div className={styles.containerModal}>
          <div className={styles.modalTitle}>
            {!!user ? <h5>Scrie o recenzie</h5> : <h5>Loghează-te</h5>}
            <AiOutlineClose onClick={onClose} />
          </div>
          <div className={styles.modalWrap}>
            <div className={styles.modalContent}>
              {!!user ? (
                <>
                  <div className={styles.productName}>
                    <h4>Produs</h4>
                    <span>{bookTitle}</span>
                  </div>
                  <div className={styles.reviewRating}>
                    <h4>Evaluare</h4>
                    <div className={styles.starIconWrap}>
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                          <label key={i} className="mx-0">
                            <input
                              type="radio"
                              name="rating"
                              value={ratingValue}
                              onClick={() => setRating(ratingValue)}
                            />
                            <AiTwotoneStar
                              color={
                                ratingValue <= (Rating || hover)
                                  ? "#ffd055"
                                  : "grey"
                              }
                              className={styles.starIcon}
                              onMouseEnter={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(null)}
                            />
                          </label>
                        );
                      })}
                      <br />
                      {error && Rating === null ? (
                        <span className={styles.errorText}>
                          Selecteaza reatingul
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className={styles.reviewContent}>
                    <h4>Recenzie</h4>
                    <textarea
                      name="recenzie"
                      className={
                        error && Text.length <= 0
                          ? `${styles.reviewInputText} ${styles.reviewInputTextErr}`
                          : `${styles.reviewInputText}`
                      }
                      rows="5"
                      placeholder="Scrie despre produs"
                      value={Text}
                      onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    {error && Text.length <= 0 ? (
                      <span className={styles.errorText}>
                        Acest camp este obligatoriu
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles.reviewTitleInput}>
                    <h4>
                      Titlu
                      <span className={styles.titleOpt}>(optional)</span>
                    </h4>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      className={styles.inputTitle}
                      value={Title}
                      type="text"
                      placeholder="Scrie titlu"
                    />
                  </div>
                </>
              ) : (
                <p>
                  Pentru a putea lasa o recenzie trebuie sa intri in contul tau
                  BookOutlet.
                </p>
              )}
            </div>
          </div>
          {!!user ? (
            <div className={styles.modalFooter}>
              <p className={styles.reviewFooterText}>
                Prin publicarea recenziei, ești de acord cu
                <Link to={"#"}> termenii și condițiile </Link> site-ului
              </p>
              <div className={styles.reviewFooterCta}>
                <button
                  className={styles.modalBtn}
                  onClick={() => handleSubmitReview()}
                >
                  Scrie o recenzie
                </button>
                <span className={styles.btnClose} onClick={onClose}>
                  Anulează
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.modalFooter}>
              <Button
                className="p-10 mr-12 my-0"
                classNameText="text-sm"
                size="xs"
                name={content.go_to_login}
                onClick={handleLogin}
              />
              <span className={styles.btnClose} onClick={onClose}>
                {content.cancel}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ModalReview;
