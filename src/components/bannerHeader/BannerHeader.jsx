import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { validationDateBanner } from "../../constants/validationDateBanner";
import styles from "./styles.module.css";
const BannerHeader = function ({ fetchURL }) {
  console.log(fetchURL);
  const [banner, setDataBanner] = useState([]);

  useEffect(() => {
    const fetchDataBanner = async () => {
      const response = await axios.get(fetchURL);

      if (response.status === 200) {
        setDataBanner(
          response.data
            .filter((el) => el.bannerTypeId === 2)
            .filter(validationDateBanner)
        );
      }
    };
    console.log("Sunt Aici");
    fetchDataBanner();
  }, [fetchURL]);

  return (
    <>
      {banner.length > 0 && (
        <div className={styles.containerBannerHeader}>
          {banner.map((el) => (
            <Link to={el.url} key={el.id}>
              <picture className={styles.bannerImg}>
                <source srcSet={el.desktopImageWebP} />
                <img src={el.desktopImage} alt={el.name} />
              </picture>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BannerHeader;
