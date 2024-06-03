import { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

import styles from "./styles.module.css";
import reviewApi from "../../../../api/modules/review.api";
import Button from "../../../../components/ui/Button/Button";
import { useFormik } from "formik";
import Input from "../../../../components/ui/Input/Input";
import Textarea from "../../../../components/ui/Textarea/Textarea";
import { validationCreateReview } from "./validationCreateReview.js";
import { toast } from "react-toastify";
import { getError } from "../../../../utils/getError.js";

const FormReview = ({ onClose, updateListReview, bookId, bookTitle }) => {
  const [hover, setHover] = useState(null);
  const [isSucces, setSucces] = useState(false);

  const formik = useFormik({
    initialValues: {
      rating: "",
      title: "",
      text: "",
    },
    validationSchema: validationCreateReview,

    onSubmit: async (values) => {
      const { response, err } = await reviewApi.addReview({
        ...values,
        bookId,
      });
      if (response) {
        setSucces(true);
        updateListReview(response);
      }

      if (err) {
        toast.error(getError(err));
      }
    },
  });

  if (isSucces) {
    return (
      <div className={`${styles.modalWrap} ${styles.textCenter}`}>
        <br />
        <br />
        <h3>Comentariul tau a fost adaugat cu succes.</h3>
        <Button name="Ok" className="max-w-80" onClick={onClose} />
        <br />
        <br />
        <br />
      </div>
    );
  }

  return (
    <>
      <form
        id="formCreateReview"
        className={styles.modalContent}
        onSubmit={formik.handleSubmit}
      >
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
                    onClick={() =>
                      formik.setValues({
                        ...formik.values,
                        rating: ratingValue,
                      })
                    }
                  />
                  <AiTwotoneStar
                    color={
                      ratingValue <= (formik.values.rating || hover)
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
            {formik.errors?.rating && formik.touched?.rating && (
              <span className={styles.errorMessage}>
                {formik.errors?.rating}
              </span>
            )}
          </div>
        </div>
        <div className={styles.reviewContent}>
          <h4>Recenzie</h4>
          <Textarea
            id="text"
            name="text"
            placeholder="Scrie despre produs"
            formik={formik}
            rows={5}
          />
        </div>
        <div className={styles.reviewTitleInput}>
          <h4>
            Titlu
            <span className={styles.titleOpt}>(optional)</span>
          </h4>
          <Input
            id="title"
            type="text"
            placeholder="Scrie titlu"
            name="title"
            formik={formik}
          />
        </div>
      </form>
      <div className={styles.modalFooter}>
        <p className={styles.reviewFooterText}>
          Prin publicarea recenziei, ești de acord cu{" "}
          <Link to={"#"}>termenii și condițiile</Link> site-ului
        </p>
        <div className={styles.reviewFooterCta}>
          <Button
            className="max-w-130"
            name="Scrie o recenzie"
            type="submit"
            form="formCreateReview"
            isLoading={formik.isSubmitting}
          />
          <span className={styles.btnClose} onClick={onClose}>
            Anulează
          </span>
        </div>
      </div>
    </>
  );
};

export default FormReview;
