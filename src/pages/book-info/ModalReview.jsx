import { useFormik } from "formik";
import { useContext, useState } from "react";
import { AiOutlineClose, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/userContext.jsx/UserContext";
import styles from "./ModalReview.module.css";

function ModalReview({ open, onClose }) {
  const [Rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [Text, setText] = useState("");
  const [Title, setTitle] = useState("");

  const userTest = {
    nume: "Andrei",
  };
  if (!open) return "";
  return (
    <div className={styles.overlay}>
      <div className={styles.containerModal}>
        <div className={styles.modalTitle}>
          {!!userTest ? <h5>Scrie o recenzie</h5> : <h5>Loghează-te</h5>}
          <AiOutlineClose onClick={onClose} />
        </div>
        <div className={styles.modalWrap}>
          <div className={styles.modalContent}>
            {!!userTest ? (
              <>
                <div className={styles.productName}>
                  <h4>Produs</h4>
                  <span>Am scris o carte despre noi</span>
                </div>
                <div className={styles.reviewRating}>
                  <h4>Evaluare</h4>
                  <div className={styles.starIconWrap}>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
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
                  </div>
                </div>
                <div className={styles.reviewContent}>
                  <h4>Recenzie</h4>
                  <textarea
                    name="recenzie"
                    className={styles.reviewInputText}
                    rows="5"
                    placeholder="Scrie despre produs"
                    value={Text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
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
        {!!userTest ? (
          <div className={styles.modalFooter}>
            <p className={styles.reviewFooterText}>
              Prin publicarea recenziei, ești de acord cu
              <Link to={"#"}> termenii și condițiile </Link> site-ului
            </p>
            <div className={styles.reviewFooterCta}>
              <button className={styles.modalBtn} to={"/"}>
                Scrie o recenzie
              </button>
              <span className={styles.btnClose} onClick={onClose}>
                Anulează
              </span>
            </div>
          </div>
        ) : (
          <div className={styles.modalFooter}>
            <button className={styles.modalBtn} to={"/"}>
              Mergi la pagina de login
            </button>
            <span className={styles.btnClose} onClick={onClose}>
              Anulează
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalReview;
