import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { API_URL_IMG } from "../../api/api-img";
function BannerIteam({ data }) {
  return (
    <Link to={"/"}>
      <picture alt={data.name} className={styles.bannerImg}>
        <img src={`${API_URL_IMG}${data.desktopImage}`} alt={data.name} />
      </picture>
    </Link>
  );
}

export default BannerIteam;
