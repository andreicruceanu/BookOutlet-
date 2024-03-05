import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { validationDateBanner } from "../../constants/validationDateBanner";
import styles from "./styles.module.css";
import bannersApi from "../../api/modules/banners";
import { API_URL_IMG } from "../../api/api-img";
import { toast } from "react-toastify";
const BannerHeader = function ({ fetchURL }) {
  const [banner, setDataBanner] = useState([]);

  useEffect(() => {
    const fetchDataBanner = async () => {
      const { response, err } = await bannersApi.getBanners();

      if (response) {
        setDataBanner(
          response
            .filter((el) => el.bannerTypeId === 2)
            .filter(validationDateBanner)
        );
      }

      if (err) {
        toast.error(err.message);
      }
    };

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
                <img src={`${API_URL_IMG}${el.desktopImage}`} alt={el.name} />
              </picture>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BannerHeader;
