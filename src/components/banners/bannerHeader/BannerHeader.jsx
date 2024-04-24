import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { getImageUrl } from "../../../utils/images";
import { useEffect, useState } from "react";
import { validationDateBanner } from "../../../utils/validationDateBanner";

const BannerHeader = function () {
  const { banners } = useSelector((state) => state.banners);
  const [bannersHeader, setBannersHeader] = useState([]);

  useEffect(() => {
    setBannersHeader(
      banners
        .filter((el) => el?.bannerTypeId === 2)
        .filter(validationDateBanner)
    );
  }, [banners]);

  return (
    <>
      {bannersHeader?.length > 0 && (
        <div className={styles.containerBannerHeader}>
          {bannersHeader.map((el) => (
            <Link to={el.url} key={el.id}>
              <picture className={styles.bannerImg}>
                <source srcSet={el.desktopImageWebP} />
                <img src={getImageUrl(el.desktopImage)} alt={el.name} />
              </picture>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BannerHeader;
