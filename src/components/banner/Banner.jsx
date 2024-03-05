import BannerIteam from "../banner-iteam/BannerIteam";
import styles from "./styles.module.css";
import { validationDateBanner } from "../../constants/validationDateBanner";
import { useEffect, useState } from "react";
import bannersApi from "../../api/modules/banners";
import { toast } from "react-toastify";

function Banner({ type }) {
  const [banner, setDataBanner] = useState([]);

  useEffect(() => {
    const fetchDataBanner = async () => {
      const { response, err } = await bannersApi.getBanners();
      if (type === 0 && response && !err) {
        setDataBanner(
          response
            .filter((el) => el.bannerTypeId === 1)
            .slice(0, 2)
            .filter(validationDateBanner)
        );
      } else {
        setDataBanner(
          response
            .filter((el) => el.bannerTypeId === 1)
            .slice(2, 4)
            .filter(validationDateBanner)
        );
      }
      if (err) {
        toast.error(err.message);
      }
    };
    fetchDataBanner();
  }, [type]);

  return (
    <>
      {banner?.length > 0 && (
        <div className={styles.containerCards}>
          {banner.map((element) => (
            <BannerIteam data={element} key={element.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Banner;
