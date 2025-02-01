import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "../../../redux/campers/slice.js";
import {
  selectIsLoading,
  selectPage,
  selectTotalCampers,
} from "../../../redux/campers/selectors.js";

const LoadMoreButton = () => {
  const page = useSelector(selectPage);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const maxPage = totalCampers / 4 >= page;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(incrementPage());
  };

  return (
    <div className="w-full flex justify-center pt-10 pb-12">
      {maxPage && (
        <button
          className="m-auto border border-gray-light px-8 py-4 rounded-[200px] cursor-pointer transition-all transform hover:scale-105 hover:border-btn-red "
          type="button"
          onClick={handleClick}
          disabled={isLoading}
        >
          Load More
        </button>
      )}
    </div>
  );
};
export default LoadMoreButton;
