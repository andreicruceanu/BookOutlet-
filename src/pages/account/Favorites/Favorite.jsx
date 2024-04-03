import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import ContainerContent from "../Components/ContainerContent/ContainerContent";
import FavoriteBook from "../Components/FavoriteBook/FavoriteBook";
import content from "../../../constants/content";

function Favorite() {
  const { listFavorite } = useSelector((state) => state.auth);

  return (
    <ContainerContent
      title={content.favorite_title}
      subtitle={`${listFavorite.length} ${content.products}`}
    >
      <div className={styles.favoriteContent}>
        {listFavorite.length > 0 ? (
          listFavorite.map((book) => (
            <FavoriteBook book={book} key={book._id} />
          ))
        ) : (
          <p>{content.empty_list_favorite}</p>
        )}
      </div>
    </ContainerContent>
  );
}

export default Favorite;
