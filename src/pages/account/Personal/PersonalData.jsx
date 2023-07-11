import { useSelector } from "react-redux";
import MenuAccount from "../MenuAccount/MenuAccount";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profileApi from "../../../api/modules/profile.api";
import { useFormik } from "formik";
import { validateForm } from "./validateForm";
import { toast } from "react-toastify";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";

function PersonalData() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");

  const formik = useFormik({
    initialValues: {
      gender: "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      newsletter: true,
    },

    validationSchema: validateForm,
  });

  useEffect(() => {
    const getProfileUser = async () => {
      const { response, err } = await profileApi.getProfile();

      if (response) {
        formik.setValues(response);
        setFirstName(response.firstName);
      }
      if (err) {
        return toast.error(err.errorMessage ? err.errorMessage : err.message);
      }
    };

    getProfileUser();
  }, []);

  if (!user) {
    return navigate("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.personalData}>
        <div className={styles.personalDataAside}>
          <div className={styles.avatar}>
            <div className={styles.avatarWrap}>
              <span className={styles.avatarImg}>A</span>
              <div className={styles.avatarTextWrap}>
                <p>Bine ai venit,</p>
                <h3>{firstName}</h3>
              </div>
            </div>
          </div>
          <MenuAccount />
        </div>
        <div className={styles.personalDataMain}>
          <div className={styles.personalDataWrap}>
            <h3>Date personale</h3>
            <form onSubmit={formik.handleSubmit}>
              <label className={styles.personalDataLabel}>
                Formă de adresare
              </label>
              <div className={styles.gender}>
                <input
                  className={styles.genderInput}
                  value="Dl"
                  checked={formik.values.gender === "Dl"}
                  onChange={formik.handleChange}
                  type="radio"
                  id="mr"
                  name="gender"
                />
                <label className={styles.genderLabelMr} htmlFor="mr">
                  Dl.
                </label>
                <input
                  className={styles.genderInput}
                  onChange={formik.handleChange}
                  checked={formik.values.gender === "Dna"}
                  value="Dna"
                  type="radio"
                  id="mrs"
                  name="gender"
                />
                <label className={styles.genderLabelMrs} htmlFor="mrs">
                  Dna.
                </label>
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="firstName" className={styles.personalDataLabel}>
                  Prenume
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={styles.personalDataInput}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <ErrorMessage value={formik.errors.firstName} />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="lastName" className={styles.personalDataLabel}>
                  Nume
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={styles.personalDataInput}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <ErrorMessage value={formik.errors.lastName} />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="username" className={styles.personalDataLabel}>
                  Utilizator
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className={styles.personalDataInput}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username && formik.touched.username ? (
                  <ErrorMessage value={formik.errors.username} />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="emial" className={styles.personalDataLabel}>
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={styles.personalDataInput}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={true}
                />
                {formik.errors.email && formik.touched.email ? (
                  <ErrorMessage value={formik.errors.email} />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="password" className={styles.personalDataLabel}>
                  Parola
                </label>
                <input
                  type="text"
                  id="password"
                  disabled={true}
                  value={"***********"}
                  className={styles.personalDataInput}
                />
              </div>
              <div className={styles.newsletter}>
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  onChange={formik.handleChange}
                  checked={formik.values.newsletter}
                />
                <label htmlFor="newsletter">
                  Vreau să primesc newsletterul BookOutlet
                </label>
              </div>
              <div className={styles.wrapBtn}>
                <button
                  className={styles.personalDataSubmitBtn}
                  disabled={!formik.isValid}
                  type="submit"
                >
                  Salvează
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
