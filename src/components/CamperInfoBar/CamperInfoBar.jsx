import sprite from "../../assets/img/sprite.svg";

const CamperInfoBar = ({ rating, reviews, location }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <h4 className="flex items-center sm:mr-4 text-text-color text-base font-normal leading-normal underline">
        <span className="mr-1 ">
          <svg className="w-4 h-4 fill-star-yelow">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        </span>
        {`${rating}(${reviews?.length} Reviews)`}
      </h4>
      <h4 className="flex items-center text-text-color text-base font-normal leading-normal mt-3 sm:m-0">
        <span>
          <svg className="w-4 h-4 mr-1 fill-text-color">
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </span>
        {`${location?.split(", ").pop()}, Ukraine`}
      </h4>
    </div>
  );
};
export default CamperInfoBar;
