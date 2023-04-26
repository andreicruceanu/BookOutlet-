import styles from "./styles.module.css";

function FavoriteIcon({ addToFavorite, isFavorite }) {
  console.log(isFavorite);
  const iconClass = isFavorite
    ? `${styles.iconHeartDefault} ${styles.isFavorite}`
    : `${styles.iconHeartDefault}`;
  return (
    <div className={styles.containerIcon} onClick={addToFavorite}>
      <span className={iconClass}></span>
    </div>
  );
}

export default FavoriteIcon;
