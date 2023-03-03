import BannerIteam from "../banner-iteam/BannerIteam";
import styles from "./styles.module.css";
import { validationDateBanner } from "../../constants/validationDateBanner";
import { useEffect, useState } from "react";
import axios from "axios";

function Banner({ fetchURL, type }) {
  const [banner, setDataBanner] = useState([]);

  useEffect(() => {
    const fetchDataBanner = async () => {
      const response = await axios.get(fetchURL);

      if (type === 0) {
        setDataBanner(
          response.data
            .filter((el) => el.bannerTypeId === 1)
            .slice(0, 2)
            .filter(validationDateBanner)
        );
      } else {
        setDataBanner(
          response.data
            .filter((el) => el.bannerTypeId === 1)
            .slice(2, 4)
            .filter(validationDateBanner)
        );
      }
    };
    fetchDataBanner();
  }, [fetchURL, type]);

  return (
    <>
      {banner.length > 0 && (
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
