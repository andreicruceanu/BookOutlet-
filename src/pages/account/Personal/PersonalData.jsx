import { useSelector } from "react-redux";
import MenuAccount from "../MenuAccount/MenuAccount";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import profileApi from "../../../api/modules/profile.api";

function PersonalData() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfileUser = async () => {
      const { response, err } = await profileApi.getProfile();
      console.log(response, err);
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
                <p>Bine ai venit</p>
                <h3>Andrei</h3>
              </div>
            </div>
          </div>
          <MenuAccount />
        </div>
        <div className={styles.personalDataMain}>
          <div className={styles.personalDataWrap}>
            <h3>Date personale</h3>
            <form>
              <label className={styles.personalDataLabel}>
                Formă de adresare
              </label>
              <div className={styles.gender}>
                <input
                  className={styles.genderInput}
                  value="0"
                  type="radio"
                  id="mr"
                  name="mrmrs"
                />
                <label className={styles.genderLabelMr} htmlFor="mr">
                  Dl.
                </label>
                <input
                  className={styles.genderInput}
                  value="1"
                  type="radio"
                  id="ms"
                  name="mrmrs"
                />
                <label className={styles.genderLabelMs} htmlFor="ms">
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
                  className={styles.personalDataInput}
                />
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="lastName" className={styles.personalDataLabel}>
                  Nume
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={styles.personalDataInput}
                />
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="username" className={styles.personalDataLabel}>
                  Utilizator
                </label>
                <input
                  type="text"
                  id="username"
                  className={styles.personalDataInput}
                />
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="emial" className={styles.personalDataLabel}>
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className={styles.personalDataInput}
                />
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="password" className={styles.personalDataLabel}>
                  Parola
                </label>
                <input
                  type="password"
                  id="password"
                  className={styles.personalDataInput}
                />
              </div>
              <div className={styles.newsletter}>
                <input type="checkbox" id="newsletter" />
                <label htmlFor="newsletter">
                  Vreau să primesc newsletterul BookOutlet
                </label>
              </div>
              <div className={styles.wrapBtn}>
                <button className={styles.personalDataSubmitBtn} type="submit">
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
