import styles from "./MyAccount.module.css";
import AddressImg from "../../../images/adresele-mele.svg";
import AddressLink from "../../../components/addressLink/AddressLink";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import profileApi from "../../../api/modules/profile.api";
import { useSelector } from "react-redux";

function MyAccount() {
  const [profileUser, setProfileUser] = useState(null);
  const { listFavorite } = useSelector((state) => state.auth);
  useEffect(() => {
    const getProfileUser = async () => {
      const { response, err } = await profileApi.getProfile();
      if (response) {
        setProfileUser(response);
      }
      if (err) {
        console.log(err);
      }
    };
    getProfileUser();
  }, []);

  console.log(profileUser);

  return (
    <>
      <div className={styles.myaccountWrap}>
        <div className={styles.myaccountMain}>
          <div className={styles.myaccountData}>
            <h2>Datele Contului</h2>
            <div className={styles.myaccountDataWrap}>
              <div className={styles.avatar}>
                <span>{profileUser && profileUser.firstName.slice(0, 1)}</span>
              </div>

              <div className={styles.myaccountDataDetails}>
                <h3>
                  {profileUser &&
                    `${profileUser.firstName} ${profileUser.lastName}`}
                </h3>
                <p className={styles.email}>
                  {profileUser && profileUser.email}
                </p>
                <p className={styles.username}>
                  {profileUser && profileUser.username}
                </p>
                <AddressLink
                  href={"/account/personal"}
                  text={"Schimba datele tale"}
                />
              </div>
            </div>
          </div>
          <div className={styles.addressContainer}>
            <div className={styles.addressWrap}>
              <p className={styles.addressTitle}>Adresele mele</p>
              <img width={60} src={AddressImg} alt="Address Img" />
              <p className={styles.addressText}>
                Adaugă o adresă pentru a comanda mult mai rapid de pe BookOutlet
              </p>

              <AddressLink href={"/account/personal"} text={"Adaugă adresă"} />
            </div>
          </div>
        </div>
        <div className={styles.myaccountSide}>
          <div className={styles.myaccountSideBox}>
            <p>Favorite</p>
            <div className={styles.myaccountSideBoxWrap}>
              <CiHeart className={styles.myaccountSideBoxIcon} />
              <span className={styles.myaccountSideBoxText}>
                {listFavorite && `${listFavorite.length} produse favorite`}
              </span>
            </div>
            <AddressLink
              href={"/account/favourites"}
              text={"Vezi produse favorite"}
            />
          </div>
          <div className={styles.myaccountSideBox}>
            <p>Istoric comenzi</p>
            <div className={styles.myaccountSideBoxWrap}>
              <CiHeart className={styles.myaccountSideBoxIcon} />
              <span className={styles.myaccountSideBoxText}>
                0 comenzi plasate
              </span>
            </div>
            <AddressLink
              href={"/account/favourites"}
              text={"Vezi istoricul de comenzi"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
