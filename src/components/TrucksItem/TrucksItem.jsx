import CommonButton from "../buttons/CommonButton/CommonButton";
import FavoriteButton from "../buttons/FavoriteButton/FavoriteButton";
import CamperInfoBar from "../CamperInfoBar/CamperInfoBar";
import CamperFeature from "../CamperFeature/CamperFeature";

const TrucksItem = ({ camperInfo }) => {
  const { gallery, name, price, id, rating, reviews, location, description } =
    camperInfo;

  return (
    <div className="w-full 2xl:max-w-[888px] xl:h-[368px] p-3 md:p-4 xl:p-6 bg-white border border-[#dadde1] transition-all duration-300 hover:shadow-md rounded-3xl">
      <div className="w-full flex flex-col gap-3 lg:gap-6 h-full  2xl:flex-row">
        <img
          className="w-full 2xl:max-w-[292px]  2xl:h-[320px] object-cover object-center rounded-[10px]"
          src={gallery[0].thumb}
          alt={name}
        />
        <div className="flex flex-col gap-4 lg:gap-7">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="max-w-[250px] font-semibold leading-[1.333] text-2xl mb-2 md:mb-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
                {name}
              </h3>
              <CamperInfoBar
                rating={rating}
                reviews={reviews}
                location={location}
              />
            </div>
            <div className="flex items-center">
              <p className="text-2xl font-semibold text-text-color leading-[1.333] pr-3">
                &euro;{` ${price}.00 `}
              </p>
              <FavoriteButton id={id} />
            </div>
          </div>
          <p className="max-w-[500px] text-text-light overflow-hidden text-ellipsis whitespace-nowrap">
            {description}
          </p>
          <CamperFeature camperInfo={camperInfo} />
          <div className="max-2-[166px]">
            <CommonButton value={"Show more"} redirect={`catalog/id`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrucksItem;
