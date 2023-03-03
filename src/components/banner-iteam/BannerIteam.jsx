import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function BannerIteam({ data }) {
  return (
    <Link to={data.url}>
      <picture alt={data.name} className={styles.bannerImg}>
        <img src={data.desktopImageWebP} alt={data.name} />
      </picture>
    </Link>
  );
}

export default BannerIteam;
