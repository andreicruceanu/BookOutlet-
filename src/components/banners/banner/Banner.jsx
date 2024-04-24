import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../../utils/images";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { validationDateBanner } from "../../../utils/validationDateBanner";

const BannerIteam = ({ data }) => {
  return (
    <Link to={"/"}>
      <picture alt={data.name} className={styles.bannerImg}>
        <img src={getImageUrl(data.desktopImage)} alt={data.name} />
      </picture>
    </Link>
  );
};

function Banner({ type }) {
  const { banners } = useSelector((state) => state.banners);

  const [dataBanners, setDataBanners] = useState([]);

  useEffect(() => {
    if (type === 0) {
      setDataBanners(
        banners
          .filter((el) => el.bannerTypeId === 1)
          .slice(0, 2)
          .filter(validationDateBanner)
      );
    } else {
      setDataBanners(
        banners
          .filter((el) => el.bannerTypeId === 1)
          .slice(2, 4)
          .filter(validationDateBanner)
      );
    }
  }, [banners, type]);

  return (
    <>
      {dataBanners?.length > 0 && (
        <div className={styles.containerCards}>
          {dataBanners.map((element) => (
            <BannerIteam data={element} key={element.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Banner;
