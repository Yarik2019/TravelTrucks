import { NavLink, Outlet } from "react-router-dom";
import CamperInfoBar from "../CamperInfoBar/CamperInfoBar";
import BookForm from "../BookForm/BookForm";

const CamperCard = ({ camper }) => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-2xl mb-2">{camper?.name}</h2>
      <div className="mb-4">
        <CamperInfoBar
          rating={camper?.rating}
          reviews={camper?.reviews || []}
          location={camper?.location}
        />
      </div>
      <p className="mb-7 text-2xl font-semibold">
        &euro;{` ${camper?.price}.00 `}
      </p>
      <ul className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8 2xl:gap-12 mb-4 md:mb-5 2xl:mb-7">
        {camper?.gallery?.map((item, i) => (
          <li key={i}>
            <img
              className="w-full md:max-w-[292px] h-[320px] object-cover object-center rounded-[10px]"
              src={item?.thumb}
              alt={"camper" + i}
            />
          </li>
        ))}
      </ul>
      <p className="text-text-light mb-5 lg:mb-8 2xl:mb-15">
        {camper?.description}
      </p>
      <div>
        <ul className="flex gap-10 pb-6 border-b border-gray-light mb-5 2xl:mb-11">
          <li>
            <NavLink
              to="features"
              className={({ isActive }) =>
                `text-xl font-semibold pb-6 ${
                  isActive ? "border-b-4 border-btn-red" : ""
                }`
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                `text-xl font-semibold pb-6 ${
                  isActive ? "border-b-4 border-btn-red" : ""
                }`
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <div className="w-full min-h-full flex flex-col-reverse  md:flex-row items-stretch gap-5 2xl:gap-10">
          <div className="w-full md:w-1/2">
            <Outlet />
          </div>
          <div className="w-full md:w-1/2">
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
