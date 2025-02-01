import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/favorites/selectors.js";
import { toggleFavorite } from "../../../redux/favorites/slice.js";
import sprite from "../../../assets/img/sprite.svg";

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  return (
    <svg
      className={`cursor-pointer w-6 h-6  transition-all hover:fill-hover-btn-red  transform  hover:scale-105 ${
        isFavorite ? "fill-btn-red" : "fill-text-color"
      }`}
      width={24}
      height={24}
      onClick={() => dispatch(toggleFavorite(id))}
    >
      <use href={`${sprite}#icon-heart`}></use>
    </svg>
  );
};
export default FavoriteButton;
