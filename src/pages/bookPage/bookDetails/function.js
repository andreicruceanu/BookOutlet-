import content from "../../../constants/content";

export function getName(isBookFavorite) {
  return isBookFavorite ? content.remove_to_favorite : content.add_to_favorite;
}

export function getClassName(isBookFavorite) {
  return isBookFavorite ? "iconHeart isFavorite" : "iconHeart";
}
