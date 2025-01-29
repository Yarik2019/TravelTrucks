import CommonButton from "../CommonButton/CommonButton";
import sprite from "../../assets/img/sprite.svg";
const TrucksItem = () => {
  return (
    <div className="w-full 2xl:max-w-[888px] xl:h-[368px] p-3 md:p-4 xl:p-6 bg-white border border-[#dadde1] transition-all duration-300 hover:shadow-md rounded-3xl">
      <div className="w-full flex flex-col gap-3 lg:gap-6 h-full  2xl:flex-row">
        <div className="w-full 2xl:max-w-[292px] h-auto rounded-[10px] overflow-hidden">
          <img
            className="w-full h-full"
            src="https://raw.githubusercontent.com/Yarik2019/conversion/refs/heads/main/truck_bg.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold leading-[1.333] text-2xl mb-2 md:mb-2.5">
                Mavericks
              </h3>
              <div className="flex flex-col sm:flex-row">
                <h4 className="flex items-center sm:mr-4 text-text-color text-base font-normal leading-normal underline">
                  <span className="mr-1">
                    <svg className="w-4 h-4">
                      <use href={`${sprite}#icon-star`}></use>
                    </svg>
                  </span>
                  4.4(2 Reviews)
                </h4>
                <h4 className="flex items-center text-text-color text-base font-normal leading-normal mt-3 sm:m-0">
                  <span>
                    <svg className="w-4 h-4 mr-0.5">
                      <use href={`${sprite}#icon-diagram`}></use>
                    </svg>
                  </span>
                  Kyiv, Ukraine
                </h4>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-2xl font-semibold text-text-color leading-[1.333] pr-3">
                €8000.00
              </p>
              <svg className="w-6 h-6">
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
          <p className="text-base font-normal leading-[1.5] text-[#475467]">
            Embrace simplicity and freedom with the Mavericks panel truck...
          </p>
          <div className="">
            <ul className="flex flex-wrap gap-2">
              <li className="flex bg-gray-100 rounded-3xl ro py-3 px-[18px] ">
                <svg className="w-5 h-5">
                  <use href={`${sprite}#icon-cup-hot`}></use>
                </svg>
                <p className="text-base font-medium text-text-color ml-2">
                  Automatic
                </p>
              </li>
              <li className="flex bg-gray-100 rounded-3xl ro py-3 px-[18px] ">
                <svg className="w-5 h-5 mr-2">
                  <use href={`${sprite}#icon-cup-hot`}></use>
                </svg>
                <p className="text-base font-medium text-text-color">
                  Automatic
                </p>
              </li>
              <li className="flex bg-gray-100 rounded-3xl ro py-3 px-[18px] ">
                <svg className="w-5 h-5 mr-2">
                  <use href={`${sprite}#icon-cup-hot`}></use>
                </svg>
                <p className="text-base font-medium text-text-color">
                  Automatic
                </p>
              </li>
              <li className="flex bg-gray-100 rounded-3xl ro py-3 px-[18px] ">
                <svg className="w-5 h-5 mr-2">
                  <use href={`${sprite}#icon-cup-hot`}></use>
                </svg>
                <p className="text-base font-medium text-text-color">AC</p>
              </li>
            </ul>
          </div>
          <div>
            <CommonButton value={"Show more"} redirect={"catalog"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrucksItem;
