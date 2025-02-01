import { useSelector } from "react-redux";
import {
  selectOneCamper,
  selectIsLoading,
} from "../../redux/campers/selectors";

import sprite from "../../assets/img/sprite.svg";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const camper = useSelector(selectOneCamper);
  const isLoading = useSelector(selectIsLoading);

  const reviews = camper?.reviews || [];

  const renderStars = (rating) => {
    const maxStars = 5;
    return Array.from({ length: maxStars }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-star-yelow" : "fill-gray-100"
        }`}
      >
        <use href={`${sprite}#icon-star`}></use>
      </svg>
    ));
  };

  return (
    <>
      {isLoading ? (
        <div className="h-full flex justify-center items-center">
          <Loader height="50" width="50" />
        </div>
      ) : (
        <ul className="w-full h-full mt-1">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <li key={index} className="mb-8 2xl:mb-11">
                <div className="flex items-center mb-4">
                  <div className="w-[60px] h-[60px] flex justify-center items-center bg-gray-100 rounded-full">
                    <span className="font-semibold text-2xl text-btn-red">
                      {review?.reviewer_name?.[0] || "?"}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-text-color mb-1">
                      {review?.reviewer_name || "Анонім"}
                    </h3>
                    <div className="flex items-center">
                      {renderStars(review?.reviewer_rating || 0)}
                    </div>
                  </div>
                </div>
                <p className="font-normal text-base text-text-light">
                  {review?.comment || "Без коментарів"}
                </p>
              </li>
            ))
          ) : (
            <p className="text-center font-normal text-base text-text-light">
              Відгуки поки що відсутні.
            </p>
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
